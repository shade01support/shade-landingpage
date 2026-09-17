import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa'
import { motion } from 'framer-motion'
import logoImage from '../assert/shade logo.png'

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false)
  const scrolled = false
  const location = useLocation()

  const navLinks = [
    { path: '/', label: 'HOME' },
    { path: '/about', label: 'ABOUT' },
    { path: '/blog', label: 'BLOG' },
    { path: '/faq', label: 'FAQ' },
    { path: '/contact', label: 'CONTACT' },
  ]

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 w-full z-50 transition-all duration-300"
      style={{
        background:
          'linear-gradient(to bottom, rgba(255,255,255,0.95), rgba(255,255,255,0.9))',
        backdropFilter: 'blur(20px) saturate(180%)',
        WebkitBackdropFilter: 'blur(20px) saturate(180%)',
        boxShadow: '0 6px 28px rgba(0,0,0,0.08), 0 2px 8px rgba(93,24,236,0.05)',
      }}
    >
      {/* Shaded bottom line */}
      <div
        className="absolute bottom-0 left-0 right-0 h-[2px]"
        style={{
          background: 'linear-gradient(to right, transparent 0%, rgba(93,24,236,0.15) 15%, rgba(93,24,236,0.35) 50%, rgba(93,24,236,0.15) 85%, transparent 100%)',
          boxShadow: '0 2px 8px rgba(93,24,236,0.2)',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center space-x-3 group">
            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
              className="relative flex items-center justify-center h-12 w-12"
            >
              <img
                src={logoImage}
                alt="Shade logo"
                className="h-full w-full object-contain"
                style={{
                  filter: 'drop-shadow(0 2px 4px rgba(93, 24, 236, 0.3))',
                }}
              />
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="text-3xl font-enigma text-primary tracking-tight"
              style={{
                textShadow: '0 2px 8px rgba(93,24,236,0.2)',
                lineHeight: '1',
                display: 'flex',
                alignItems: 'center',
              }}
            >
              SHADE
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="relative group"
              >
                <span
                  className={`relative z-10 font-metropolis font-medium text-sm uppercase tracking-wider transition-all duration-300 ${
                    location.pathname === link.path
                      ? 'text-primary font-semibold'
                      : 'text-secondary/80 hover:text-primary'
                  }`}
                >
                  {link.label}
                </span>
                {location.pathname === link.path && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute -bottom-2 left-0 right-0 h-[3px] rounded-full"
                    style={{
                      background: 'linear-gradient(to right, transparent, #5D18EC, transparent)',
                      boxShadow: '0 2px 8px rgba(93,24,236,0.4)',
                    }}
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                <div
                  className={`absolute -bottom-2 left-0 right-0 h-[2px] rounded-full transition-all duration-300 ${
                    location.pathname === link.path
                      ? 'opacity-0'
                      : 'opacity-0 group-hover:opacity-100 bg-primary/30'
                  }`}
                />
              </Link>
            ))}
            <a href="https://play.google.com/store/apps/details?id=com.shade.app&pcampaignid=web_share" target="_blank" rel="noopener noreferrer">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 8px 24px rgba(93,24,236,0.4)' }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-2.5 rounded-full font-medium bg-primary text-white shadow-lg hover:bg-[#4a12c0] transition-all duration-300 relative overflow-hidden group"
                style={{
                  boxShadow: '0 4px 16px rgba(93,24,236,0.3)',
                }}
              >
                <span className="relative z-10">Get Started</span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
              </motion.button>
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-secondary hover:text-primary focus:outline-none transition-colors p-2 rounded-lg hover:bg-white/50"
            aria-label="Toggle menu"
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <motion.div
        initial={false}
        animate={isOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="md:hidden overflow-hidden border-t"
        style={{
          background: 'linear-gradient(to bottom, rgba(255,255,255,0.9), rgba(255,255,255,0.85))',
          backdropFilter: 'blur(20px) saturate(180%)',
          WebkitBackdropFilter: 'blur(20px) saturate(180%)',
          borderTopColor: 'rgba(93,24,236,0.1)',
          boxShadow: '0 -4px 24px rgba(0,0,0,0.05)',
        }}
      >
        <div className="px-4 pt-3 pb-5 space-y-1">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={`block py-3 px-4 rounded-xl transition-all duration-300 font-medium ${
                location.pathname === link.path
                  ? 'bg-primary/10 text-primary shadow-sm'
                  : 'text-secondary hover:bg-white/60 hover:text-primary'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <a href="https://play.google.com/store/apps/details?id=com.shade.app&pcampaignid=web_share" target="_blank" rel="noopener noreferrer">
            <motion.button
              whileTap={{ scale: 0.95 }}
              className="w-full mt-4 px-6 py-3 rounded-full font-medium bg-primary text-white shadow-lg hover:bg-[#4a12c0] transition-all duration-300"
              style={{
                boxShadow: '0 4px 16px rgba(93,24,236,0.3)',
              }}
            >
              Get Started
            </motion.button>
          </a>
        </div>
      </motion.div>
    </motion.nav>
  )
}

export default Navbar

