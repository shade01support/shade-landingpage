import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { FaPlus } from 'react-icons/fa'
import BlogCard from '../blog/BlogCard'
import BlogForm from '../blog/BlogForm'
import { getBlogs, addBlog, initializeDefaultBlogs } from '../../services/blogService'

const BlogSection = () => {
  const [isFormOpen, setIsFormOpen] = useState(false)
  const [blogPosts, setBlogPosts] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  const emojis = ['🚴', '🛵', '🎓', '🌱', '🏍️', '💼', '🚌', '📍', '📚', '🤝', '✨', '🌟', '💡', '🎯', '🚀', '💫', '⭐', '🔥', '🎨', '🌈']

  const loadBlogs = async () => {
    try {
      setIsLoading(true)
      setError(null)
      
      try {
        await initializeDefaultBlogs()
      } catch (initError) {
        console.warn('Could not initialize default blogs:', initError)
      }
      
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

  useEffect(() => {
    loadBlogs()
  }, [])

  const getRandomEmoji = () => {
    return emojis[Math.floor(Math.random() * emojis.length)]
  }

  const handleAddBlog = async (formData) => {
    setError(null)
    
    const newBlog = {
      name: formData.name,
      date: formData.date,
      tagline: formData.tagline,
      heading: formData.heading,
      content: formData.content,
      emoji: getRandomEmoji(),
      image: getRandomEmoji(),
    }

    const tempId = `temp-${Date.now()}`
    const optimisticBlog = {
      id: tempId,
      ...newBlog,
      createdAt: { toMillis: () => Date.now() },
      date: formData.date
    }
    setBlogPosts(prev => [optimisticBlog, ...prev].slice(0, 9))
    setIsFormOpen(false)

    addBlog(newBlog)
      .then(blogId => {
        setBlogPosts(prev => prev.map(blog => 
          blog.id === tempId ? { ...blog, id: blogId } : blog
        ))
        return getBlogs()
      })
      .then(updatedBlogs => {
        setBlogPosts(updatedBlogs)
      })
      .catch(err => {
        console.error('Error saving blog:', err)
        setBlogPosts(prev => prev.filter(blog => blog.id !== tempId))
        
        const errorMessage = err.message || 'Failed to save blog'
        if (errorMessage.includes('permission') || errorMessage.includes('PERMISSION_DENIED')) {
          setError('Permission denied. Please check your Firestore security rules.')
        } else if (errorMessage.includes('not found') || errorMessage.includes('NOT_FOUND')) {
          setError('Firestore database not found. Please enable Firestore in Firebase Console.')
        } else {
          setError(`Failed to save blog: ${errorMessage}. The blog was not saved.`)
        }
        setIsFormOpen(true)
      })
  }

  return (
    <section id="blog" className="py-20 bg-gradient-to-b from-white via-white to-primary/10 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-enigma text-secondary mb-6">
            Blog & <span className="text-primary">Community</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mb-6"></div>
          <p className="text-lg md:text-xl text-gray-700 font-metropolis max-w-2xl mx-auto mb-8">
            Stories, experiences, and insights from our SHADE community
          </p>
          
          {/* Add Blog Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsFormOpen(true)}
            className="bg-primary text-white px-6 py-3 rounded-full text-base sm:text-lg font-medium flex items-center justify-center space-x-2 mx-auto hover:bg-[#4a12c0] transition-all duration-300 shadow-lg cursor-pointer"
          >
            <FaPlus className="text-lg" />
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
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
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
    </section>
  )
}

export default BlogSection
