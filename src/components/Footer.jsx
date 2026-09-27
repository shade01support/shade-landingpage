import { Link } from 'react-router-dom'
import { FaFacebook, FaTwitter, FaInstagram, FaEnvelope, FaArrowRight, FaYoutube } from 'react-icons/fa'
import { motion } from 'framer-motion'
import shadeWordmark from '../assert/shade_wordmark.png'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: FaFacebook, href: 'https://www.facebook.com/share/1CKbJNxqxh/?mibextid=wwXIfr', label: 'Facebook' },
    { icon: FaTwitter, href: 'https://x.com/shade_appindia?s=21', label: 'X (Twitter)' },
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
    <footer className="mt-auto bg-gradient-to-b from-white via-purple-50/20 to-primary/10 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
          {/* Brand + CTA */}
          <div className="lg:col-span-6 space-y-5">
            <div>
              <Link to="/" className="inline-block">
                <img
                  src={shadeWordmark}
                  alt="Shade"
                  className="h-8 md:h-9 w-auto object-contain"
                  style={{
                    filter: 'drop-shadow(0 2px 8px rgba(93,24,236,0.15))',
                  }}
                />
              </Link>
              <p className="text-xs md:text-sm font-semibold text-primary/80 uppercase tracking-wider mt-2 font-metropolis">
                Ride together, spend less.
              </p>
            </div>

            <p className="text-gray-600 font-metropolis text-sm leading-relaxed max-w-md">
              Built for college communities—share the ride, split the cost, make friends, and travel smarter.
            </p>

            <div className="pt-1">
              <a
                href="https://play.google.com/store/apps/details?id=com.shade.app&pcampaignid=web_share"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
              >
                <motion.div
                  whileHover={{ scale: 1.04, x: 2 }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-full bg-primary text-white text-sm font-medium shadow-md shadow-primary/25 hover:bg-[#4a12c0] hover:shadow-lg hover:shadow-primary/35 transition-all duration-300 group cursor-pointer"
                >
                  <span>Get started</span>
                  <FaArrowRight size={13} className="group-hover:translate-x-1 transition-transform duration-200" />
                </motion.div>
              </a>
            </div>

            <div className="flex items-center space-x-3 pt-2">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.12, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="h-10 w-10 rounded-full bg-white border border-primary/15 text-primary flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 shadow-sm hover:shadow-md hover:shadow-primary/20"
                >
                  <social.icon size={16} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="lg:col-span-6 grid grid-cols-2 gap-8 sm:gap-12 lg:justify-end lg:max-w-sm lg:ml-auto">
            <div>
              <h4 className="font-enigma text-lg text-secondary mb-4">Company</h4>
              <ul className="space-y-2.5">
                {footerLinks.company.map((link, index) => (
                  <li key={index}>
                    <Link
                      to={link.path}
                      className="text-gray-600 hover:text-primary transition-colors font-metropolis text-sm inline-block hover:translate-x-1 duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-enigma text-lg text-secondary mb-4">Legal</h4>
              <ul className="space-y-2.5">
                {footerLinks.legal.map((link, index) => (
                  <li key={index}>
                    <Link
                      to={link.path}
                      className="text-gray-600 hover:text-primary transition-colors font-metropolis text-sm inline-block hover:translate-x-1 duration-200"
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

