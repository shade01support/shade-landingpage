import { useState } from 'react'
import { motion } from 'framer-motion'

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)
  const [errorMessage, setErrorMessage] = useState('')

  const onSubmit = async (event) => {
    event.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)
    setErrorMessage('')

    try {
      const formData = new FormData(event.target)
      formData.append('access_key', '34f66983-e3d1-4af7-a129-ae2c81f5c0c5')
      formData.append('subject', 'New Contact Form Message from SHADE Website')
      formData.append('to', 'theshadeapp@gmail.com')

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      })

      const data = await response.json()

      if (data.success) {
        setSubmitStatus('success')
        event.target.reset()
        setTimeout(() => setSubmitStatus(null), 5000)
      } else {
        setSubmitStatus('error')
        setErrorMessage(data.message || 'Failed to send message. Please try again.')
        setTimeout(() => setSubmitStatus(null), 5000)
      }
    } catch (error) {
      setSubmitStatus('error')
      setErrorMessage('Something went wrong. Please try again later.')
      setTimeout(() => setSubmitStatus(null), 5000)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="bg-white rounded-2xl p-8 shadow-md text-secondary">
      <h2 className="text-3xl font-enigma text-secondary mb-6">Send us a Message</h2>
      
      <form onSubmit={onSubmit} className="contact_right space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
            Your Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full px-4 py-3 bg-white border border-gray-200 text-secondary placeholder:text-gray-500 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all font-metropolis"
            placeholder="Enter Your Name"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
            Your Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full px-4 py-3 bg-white border border-gray-200 text-secondary placeholder:text-gray-500 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all font-metropolis"
            placeholder="Enter Your Email"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
            Enter your Message here
          </label>
          <textarea
            id="message"
            name="message"
            rows="8"
            required
            className="w-full px-4 py-3 bg-white border border-gray-200 text-secondary placeholder:text-gray-500 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all font-metropolis resize-none"
            placeholder="Enter Your Message"
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="contact_submit w-full px-6 py-3 rounded-lg font-medium bg-primary text-white hover:bg-[#4a12c0] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? 'Sending...' : 'Submit Now'}
        </button>

        {submitStatus === 'success' && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-4 bg-green-50 border border-green-200 rounded-lg text-green-800 text-sm"
          >
            Message sent successfully! We'll get back to you soon.
          </motion.div>
        )}

        {submitStatus === 'error' && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-800 text-sm"
          >
            Something went wrong. Please try again later.
            {errorMessage && (
              <span className="block mt-1 text-xs text-red-700">
                {errorMessage}
              </span>
            )}
          </motion.div>
        )}
      </form>
    </div>
  )
}

export default ContactForm

