import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { FaPlus } from 'react-icons/fa'
import BlogCard from '../components/blog/BlogCard'
import BlogForm from '../components/blog/BlogForm'
import { getBlogs, addBlog, initializeDefaultBlogs } from '../services/blogService'

const Blog = () => {
  const [isFormOpen, setIsFormOpen] = useState(false)
  const [blogPosts, setBlogPosts] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  // Emoji pool for auto-generation
  const emojis = ['🚴', '🛵', '🎓', '🌱', '🏍️', '💼', '🚌', '📍', '📚', '🤝', '✨', '🌟', '💡', '🎯', '🚀', '💫', '⭐', '🔥', '🎨', '🌈']

  // Function to load blogs
  const loadBlogs = async () => {
    try {
      setIsLoading(true)
      setError(null)
      
      // Initialize default blogs if needed (only runs once)
      try {
        await initializeDefaultBlogs()
      } catch (initError) {
        console.warn('Could not initialize default blogs:', initError)
        // Continue even if initialization fails
      }
      
      // Fetch blogs from Firebase
      const blogs = await getBlogs()
      setBlogPosts(blogs)
    } catch (err) {
      console.error('Error loading blogs:', err)
      const errorMessage = err.message || 'Failed to load blogs'
      if (errorMessage.includes('permission') || errorMessage.includes('PERMISSION_DENIED')) {
        setError('Firestore permission denied. Please check your Firestore security rules.')
      } else if (errorMessage.includes('not found') || errorMessage.includes('NOT_FOUND')) {
        setError('Firestore database not found. Please enable Firestore in Firebase Console.')
      } else {
        setError(`Failed to load blogs: ${errorMessage}. Please check your Firebase configuration.`)
      }
    } finally {
      setIsLoading(false)
    }
  }

  // Load blogs from Firebase on mount
  useEffect(() => {
    loadBlogs()
  }, [])


  // Function to get random emoji
  const getRandomEmoji = () => {
    return emojis[Math.floor(Math.random() * emojis.length)]
  }

  // Handle form submission (ultra-fast with optimistic updates)
  const handleAddBlog = async (formData) => {
    setError(null)
    
    const newBlog = {
      name: formData.name,
      date: formData.date,
      tagline: formData.tagline,
      heading: formData.heading,
      content: formData.content,
      emoji: getRandomEmoji(),
      image: getRandomEmoji(), // For backward compatibility
    }

      // OPTIMISTIC UPDATE: Show blog immediately in UI
      const tempId = `temp-${Date.now()}`
      const optimisticBlog = {
        id: tempId,
        ...newBlog,
        createdAt: { toMillis: () => Date.now() },
        date: formData.date
      }
      setBlogPosts(prev => [optimisticBlog, ...prev].slice(0, 9))
    
    // Close form IMMEDIATELY - don't wait for Firebase
    setIsFormOpen(false)

    // Submit to Firebase in background (non-blocking)
    addBlog(newBlog)
      .then(blogId => {
        console.log('Blog saved to Firebase:', blogId)
        // Update the temp ID with real ID
        setBlogPosts(prev => prev.map(blog => 
          blog.id === tempId ? { ...blog, id: blogId } : blog
        ))
        // Refresh to get latest from server (optional, for consistency)
        return getBlogs()
      })
      .then(updatedBlogs => {
        setBlogPosts(updatedBlogs)
        console.log('Blogs synced:', updatedBlogs.length)
      })
      .catch(err => {
        console.error('Error saving blog:', err)
        // Remove optimistic update on error
        setBlogPosts(prev => prev.filter(blog => blog.id !== tempId))
        
        const errorMessage = err.message || 'Failed to save blog'
        if (errorMessage.includes('permission') || errorMessage.includes('PERMISSION_DENIED')) {
          setError('Permission denied. Please check your Firestore security rules.')
        } else if (errorMessage.includes('not found') || errorMessage.includes('NOT_FOUND')) {
          setError('Firestore database not found. Please enable Firestore in Firebase Console.')
        } else {
          setError(`Failed to save blog: ${errorMessage}. The blog was not saved.`)
        }
        // Re-open form so user can retry
        setIsFormOpen(true)
      })
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-20 min-h-screen bg-gradient-to-b from-white via-white to-primary/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-enigma text-secondary mb-6">
            Blog & <span className="text-primary">Community</span>
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mb-6"></div>
          <p className="text-xl text-gray-700 font-metropolis max-w-2xl mx-auto mb-8">
            Stories, experiences, and insights from our SHADE community
          </p>
          
          {/* Add Blog Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              console.log('Add Blog button clicked')
              setIsFormOpen(true)
            }}
            className="bg-primary text-white px-6 py-3 rounded-full text-lg font-medium flex items-center justify-center space-x-2 mx-auto hover:bg-[#4a12c0] transition-all duration-300 shadow-lg cursor-pointer"
          >
            <FaPlus className="text-xl" />
            <span>Add Blog</span>
          </motion.button>
        </motion.div>

        {/* Error Message */}
        {error && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700 text-center"
          >
            {error}
          </motion.div>
        )}
        
        {/* Success Message */}
        {!error && blogPosts.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8 p-4 bg-green-50 border border-green-200 rounded-lg text-green-700 text-center"
          >
            ✓ Blog posts loaded successfully! All users can see these blogs.
          </motion.div>
        )}

        {/* Loading State */}
        {isLoading && blogPosts.length === 0 ? (
          <div className="text-center py-12">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
            <p className="mt-4 text-gray-600 font-metropolis">Loading blogs...</p>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post, index) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <BlogCard post={post} />
                </motion.div>
              ))}
            </div>

            {blogPosts.length === 0 && !isLoading && (
              <div className="text-center py-12">
                <p className="text-gray-600 font-metropolis text-lg">
                  No blog posts yet. Be the first to share your story!
                </p>
              </div>
            )}
          </>
        )}
      </div>

      {/* Blog Form Modal */}
      <BlogForm
        isOpen={isFormOpen}
        onClose={() => setIsFormOpen(false)}
        onSubmit={handleAddBlog}
      />
    </motion.div>
  )
}

export default Blog
