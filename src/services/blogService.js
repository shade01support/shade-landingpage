import { 
  collection, 
  addDoc, 
  getDocs, 
  query, 
  orderBy, 
  limit, 
  deleteDoc, 
  doc,
  Timestamp 
} from 'firebase/firestore'
import { db } from '../config/firebase'

const BLOGS_COLLECTION = 'blogs'
const MAX_BLOGS = 9

// Get all blogs (limited to 9 most recent)
export const getBlogs = async () => {
  try {
    const blogsRef = collection(db, BLOGS_COLLECTION)
    
    // Try to get blogs ordered by createdAt, but handle cases where createdAt might not exist
    let querySnapshot
    try {
      const q = query(blogsRef, orderBy('createdAt', 'desc'), limit(MAX_BLOGS))
      querySnapshot = await getDocs(q)
    } catch (orderError) {
      // If ordering fails (e.g., no createdAt field), get all docs without ordering
      console.warn('Could not order by createdAt, fetching all blogs:', orderError)
      querySnapshot = await getDocs(blogsRef)
    }
    
    const blogs = []
    querySnapshot.forEach((doc) => {
      const data = doc.data()
      blogs.push({
        id: doc.id,
        ...data
      })
    })
    
    // Sort manually if createdAt exists, otherwise keep original order
    blogs.sort((a, b) => {
      if (a.createdAt && b.createdAt) {
        const aTime = a.createdAt.toMillis ? a.createdAt.toMillis() : new Date(a.createdAt).getTime()
        const bTime = b.createdAt.toMillis ? b.createdAt.toMillis() : new Date(b.createdAt).getTime()
        return bTime - aTime // Descending order
      }
      return 0
    })
    
    // Limit to MAX_BLOGS
    return blogs.slice(0, MAX_BLOGS)
  } catch (error) {
    console.error('Error fetching blogs:', error)
    throw error
  }
}

// Add a new blog (ultra-fast - just add, no waiting)
export const addBlog = async (blogData) => {
  try {
    // Add new blog with timestamp immediately
    const blogWithTimestamp = {
      ...blogData,
      createdAt: Timestamp.now(),
      date: blogData.date || new Date().toISOString().split('T')[0]
    }
    
    // Add blog to Firestore - this is the only blocking operation
    const docRef = await addDoc(collection(db, BLOGS_COLLECTION), blogWithTimestamp)
    
    // Clean up old blogs in background (fire and forget - don't wait)
    // Use setTimeout to make it truly async
    setTimeout(() => {
      cleanupOldBlogs().catch(() => {
        // Silently fail - cleanup is not critical
      })
    }, 0)
    
    return docRef.id
  } catch (error) {
    console.error('Error adding blog:', error)
    throw error
  }
}

// Clean up old blogs (runs in background, fire and forget)
const cleanupOldBlogs = async () => {
  try {
    const blogsRef = collection(db, BLOGS_COLLECTION)
    const q = query(blogsRef, orderBy('createdAt', 'desc'), limit(MAX_BLOGS + 5)) // Get a few extra to check
    const querySnapshot = await getDocs(q)
    
    const blogs = []
    querySnapshot.forEach((doc) => {
      blogs.push({
        id: doc.id,
        ...doc.data()
      })
    })
    
    // If we have more than MAX_BLOGS, delete the oldest ones
    if (blogs.length > MAX_BLOGS) {
      const blogsToDelete = blogs.slice(MAX_BLOGS)
      // Delete in parallel for speed (don't await - fire and forget)
      Promise.all(
        blogsToDelete.map(blog => deleteBlog(blog.id).catch(() => {}))
      ).catch(() => {}) // Ignore all errors in cleanup
    }
  } catch (error) {
    console.warn('Error during cleanup:', error)
    // Don't throw - this is background cleanup
  }
}

// Delete a blog
export const deleteBlog = async (blogId) => {
  try {
    await deleteDoc(doc(db, BLOGS_COLLECTION, blogId))
  } catch (error) {
    console.error('Error deleting blog:', error)
    throw error
  }
}

// Clear all blogs
export const clearAllBlogs = async () => {
  try {
    const blogsRef = collection(db, BLOGS_COLLECTION)
    const querySnapshot = await getDocs(blogsRef)
    
    // Delete all blogs in parallel
    const deletePromises = []
    querySnapshot.forEach((doc) => {
      deletePromises.push(deleteDoc(doc.ref))
    })
    
    await Promise.all(deletePromises)
    console.log(`Deleted ${deletePromises.length} blogs`)
    return deletePromises.length
  } catch (error) {
    console.error('Error clearing all blogs:', error)
    throw error
  }
}

// Initialize default blogs (run once)
export const initializeDefaultBlogs = async () => {
  try {
    const existingBlogs = await getBlogs()
    
    // Only initialize if no blogs exist
    if (existingBlogs.length === 0) {
      const defaultBlogs = [
        {
          name: 'Arun',
          date: '2024-03-12',
          tagline: 'Student Story',
          heading: 'From ₹80 Autos to ₹20 SHADE Rides',
          content: 'Before SHADE, every morning from Peelamedu to PSG Tech felt like a marathon — waiting for autos, paying ₹80 one way, and still getting late to class. Now with this Coimbatore ride-sharing platform, I just open the SHADE app, find a nearby ride at ₹20, and reach college in 10 minutes. No long waits in traffic, no petrol smell — just a chill ride with friends and the feel of travelling with classmates.',
          emoji: '🚴',
          image: '🚴',
          createdAt: Timestamp.fromDate(new Date('2024-03-12'))
        },
        {
          name: 'Karthik',
          date: '2024-03-08',
          tagline: 'Smart Mobility',
          heading: 'Coimbatore\'s New Smart Mobility Culture',
          content: 'Bike pooling is slowly becoming Coimbatore\'s new smart mobility culture. SHADE connects college students and IT professionals who travel similar routes — from Gandhipuram to Tidel Park or from Peelamedu to KCT. Instead of spending ₹100+ daily, users now save 60–80% with ₹15–₹30 rides while helping reduce traffic and pollution on Coimbatore\'s busy roads.',
          emoji: '🛵',
          image: '🛵',
          createdAt: Timestamp.fromDate(new Date('2024-03-08'))
        },
        {
          name: 'Vignesh',
          date: '2024-03-03',
          tagline: 'Student Story',
          heading: 'KCT 8 AM Class, Zero Late Mark',
          content: '"Naan KCT la 8 AM ku class start aagum. Auto kidaikaama neraya naal late aayiduven." After using SHADE, mornings became smooth — ride confirmed at 7:30 from Saravanampatti, reaching college in 10 minutes for just ₹25 with a safe ride and helmet. For KCT students, SHADE means attendance safe, money saved, and no traffic stress.',
          emoji: '🎓',
          image: '🎓',
          createdAt: Timestamp.fromDate(new Date('2024-03-03'))
        }
      ]
      
      // Add default blogs
      for (const blog of defaultBlogs) {
        await addDoc(collection(db, BLOGS_COLLECTION), blog)
      }
    }
  } catch (error) {
    console.error('Error initializing default blogs:', error)
  }
}
