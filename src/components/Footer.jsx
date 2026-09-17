import { Link } from 'react-router-dom'
import { FaFacebook, FaTwitter, FaInstagram,FaEnvelope, FaArrowRight,FaYoutube } from 'react-icons/fa'
import { motion } from 'framer-motion'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: FaFacebook, href: 'https://www.facebook.com/share/1CKbJNxqxh/?mibextid=wwXIfr', label: 'Facebook' },
    { icon: FaTwitter, href: 'https://x.com/shade_appindia?s=21', label: 'x' },
    { icon: FaInstagram, href: 'https://www.instagram.com/shade.app?igsh=aHNkMHVqNDVoODF0', label: 'Instagram' },
    { icon: FaYoutube, href: 'https://youtube.com/@shade_app?si=AJst4TXdf4zEJTbF', label: 'YouTube' },
  ]

  const footerLinks = {
    company: [
      { label: 'About Us', path: '/about' },
      { label: 'Blog', path: '/blog' },
      { label: 'FAQ', path: '/faq' },
      { label: 'Contact', path: '/contact' },
    ],
    legal: [
      { label: 'Privacy Policy', path: '/privacy' },
      { label: 'Terms of Service', path: '/terms' },
    ],
  }

  return (
    <footer className="mt-auto bg-gradient-to-b from-white via-white to-primary/10 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Brand + CTA */}
          <div className="lg:col-span-1 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="h-12 w-12 rounded-2xl bg-primary/10 flex items-center justify-center">
                <span className="text-2xl font-enigma text-primary">S</span>
              </div>
              <div>
                <p className="text-lg font-enigma text-secondary">SHADE</p>
                <p className="text-sm text-gray-600 font-metropolis">Ride together, spend less.</p>
              </div>
            </div>
            <p className="text-gray-600 font-metropolis text-sm">
              Built for college communities—share the ride, split the cost, make friends.
            </p>
            <a href="https://play.google.com/store/apps/details?id=com.shade.app&pcampaignid=web_share" target="_blank" rel="noopener noreferrer">
              <motion.div whileHover={{ x: 4 }} className="inline-flex items-center space-x-2 text-primary font-semibold cursor-pointer">
                <span>Get started</span>
                <FaArrowRight size={14} />
              </motion.div>
            </a>
            <div className="flex space-x-4 pt-2">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  whileHover={{ scale: 1.15, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="h-10 w-10 rounded-full bg-primary/10 text-primary flex items-center justify-center hover:bg-primary hover:text-white transition-colors shadow-sm"
                >
                  <social.icon size={18} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 gap-8 lg:col-span-2 justify-self-end">
            <div>
              <h4 className="font-enigma text-lg text-secondary mb-4">Company</h4>
              <ul className="space-y-2">
                {footerLinks.company.map((link, index) => (
                  <li key={index}>
                    <Link
                      to={link.path}
                      className="text-gray-600 hover:text-primary transition-colors font-metropolis text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-enigma text-lg text-secondary mb-4">Legal</h4>
              <ul className="space-y-2">
                {footerLinks.legal.map((link, index) => (
                  <li key={index}>
                    <Link
                      to={link.path}
                      className="text-gray-600 hover:text-primary transition-colors font-metropolis text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Newsletter */}
        
        </div>

        <div className="border-t border-gray-200 mt-10 pt-6 flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 text-sm text-gray-600 font-metropolis">
          <p>© {currentYear} NEXSHADE SMART MOBILITY PRIVATE LIMITED — All Rights Reserved</p>
          <a
            href="mailto:theshadeapp@gmail.com"
            className="inline-flex items-center space-x-2 text-primary hover:underline"
          >
            <FaEnvelope size={14} />
            <span>support@theshadeapp.com</span>
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer

