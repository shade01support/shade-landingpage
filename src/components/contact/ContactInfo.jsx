import { motion } from 'framer-motion'
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaFacebook, FaTwitter, FaInstagram,FaYoutube } from 'react-icons/fa'

const ContactInfo = () => {
  const contactMethods = [
    {
      icon: FaEnvelope,
      label: 'Email',
      value: 'support@theshadeapp.com',
      href: 'mailto:support@theshadeapp.com',
      
    },
    {
      icon: FaPhone,
      label: 'Phone',
      value: '+91 96298 46693',
      href: 'tel:+91 96298 46693',
    },
    {
      icon: FaMapMarkerAlt,
      label: 'Address',
      value: '30-A, Vilankurichi Road, Santhi Nagar, Vilankurichi, Coimbatore North, Coimbatore- 641035, Tamil Nadu',
      href: 'https://www.google.com/maps/dir//0-A,+Vilankurichi+Road,+Santhi+Nagar,+Vilankurichi,+Coimbatore+North,+Coimbatore-+641035,+Tamil+Nadu/@13.0475255,80.2086732,11z?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D',
    },
  ]

  const socialLinks = [
    { icon: FaFacebook, href: 'https://www.facebook.com/share/1CKbJNxqxh/?mibextid=wwXIfr', label: 'Facebook' },
    { icon: FaTwitter, href: 'https://x.com/shade_appindia?s=21', label: 'Twitter' },
    { icon: FaInstagram, href: 'https://www.instagram.com/shade.app?igsh=aHNkMHVqNDVoODF0', label: 'Instagram' },
    { icon: FaYoutube, href: 'https://youtube.com/@shade_app?si=AJst4TXdf4zEJTbF', label: 'YouTube' },
  ]

  return (
    <div className="bg-white rounded-2xl p-8 h-full shadow-md text-secondary">
      <h2 className="text-3xl font-enigma text-secondary mb-6">Contact Information</h2>
      
      <div className="space-y-6 mb-8">
        {contactMethods.map((method, index) => (
          <motion.a
            key={index}
            href={method.href}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ x: 5 }}
            className="flex items-start space-x-4 p-4 rounded-lg hover:bg-gray-50 transition-colors group"
          >
            <div className="w-12 h-12 bg-gradient-to-br from-primary to-[#4a12c0] rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform shadow-lg">
              <method.icon className="text-white text-xl" />
            </div>
            <div>
              <p className="text-sm text-gray-500 font-metropolis mb-1">{method.label}</p>
              <p className="text-lg text-secondary font-metropolis font-medium">{method.value}</p>
            </div>
          </motion.a>
        ))}
      </div>

      <div>
        <h3 className="text-xl font-enigma text-secondary mb-4">Follow Us</h3>
        <div className="flex space-x-4">
          {socialLinks.map((social, index) => (
            <motion.a
              key={index}
              href={social.href}
              aria-label={social.label}
              whileHover={{ scale: 1.2, y: -5 }}
              whileTap={{ scale: 0.9 }}
              className="w-12 h-12 bg-gradient-to-br from-primary to-[#4a12c0] rounded-lg flex items-center justify-center text-white hover:shadow-lg transition-shadow shadow-lg"
            >
              <social.icon size={20} />
            </motion.a>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ContactInfo

