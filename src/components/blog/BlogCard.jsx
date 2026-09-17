import { motion } from 'framer-motion'
import { FaCalendarAlt, FaUser, FaTag } from 'react-icons/fa'

const BlogCard = ({ post }) => {
  // Format date - handle both Firebase Timestamp and string dates
  const formatDate = (date) => {
    if (!date) return 'N/A'
    
    // If it's a Firebase Timestamp
    if (date && typeof date === 'object' && date.toDate) {
      return date.toDate().toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      })
    }
    
    // If it's a string date
    if (typeof date === 'string') {
      const dateObj = new Date(date)
      if (!isNaN(dateObj.getTime())) {
        return dateObj.toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        })
      }
      return date
    }
    
    return 'N/A'
  }

  return (
    <motion.article
      whileHover={{ y: -8 }}
      className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 h-full flex flex-col"
    >
      <div className="h-48 bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center text-6xl">
        {post.image || post.emoji || '📝'}
      </div>
      
      <div className="p-6 flex-1 flex flex-col">
        <div className="flex items-center space-x-4 mb-3 text-sm text-gray-600">
          <span className="flex items-center space-x-1">
            <FaTag className="text-primary" />
            <span className="font-metropolis">{post.tagline || post.category}</span>
          </span>
        </div>
        
        <h2 className="text-2xl font-enigma text-secondary mb-3">
          {post.heading || post.title}
        </h2>
        
        <p className="text-gray-700 font-metropolis mb-4 flex-1 leading-relaxed">
          {post.content || post.excerpt}
        </p>
        
        <div className="flex items-center justify-between text-sm text-gray-600 pt-4 border-t border-gray-200">
          <span className="flex items-center space-x-1">
            <FaUser className="text-primary" />
            <span className="font-metropolis">{post.name || post.author}</span>
          </span>
          <span className="flex items-center space-x-1">
            <FaCalendarAlt className="text-primary" />
            <span className="font-metropolis">
              {formatDate(post.date)}
            </span>
          </span>
        </div>
      </div>
    </motion.article>
  )
}

export default BlogCard

