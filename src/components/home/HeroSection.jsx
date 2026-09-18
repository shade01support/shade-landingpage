import { motion } from 'framer-motion'
import { FaArrowRight, FaMapMarkerAlt, FaGraduationCap, FaBriefcase, FaCompass } from 'react-icons/fa'
import heroVisual from '../../assert/hero_visual.jpg'

const HeroSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 25, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  }

  const handleScrollToHow = () => {
    const section = document.getElementById('how-does-it-work')
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#f8f5ff] via-white to-[#f0ebff] py-12 md:py-20">
      {/* Background glowing gradient blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -left-20 top-10 w-96 h-96 bg-primary/15 blur-3xl rounded-full animate-pulse" />
        <div className="absolute right-0 top-1/4 w-[32rem] h-[32rem] bg-primary/10 blur-3xl rounded-full animate-[pulse_6s_ease-in-out_infinite]" />
        <div className="absolute left-1/3 bottom-0 w-80 h-80 bg-purple-300/20 blur-3xl rounded-full" />
      </div>

      {/* Subtle Grid / Route pattern */}
      <div className="absolute inset-0 opacity-25 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%235D18EC' fill-opacity='0.2'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headline & Action */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 text-left space-y-6 md:space-y-8"
          >
            {/* Pill badge */}
            <motion.div variants={itemVariants} className="inline-flex items-center">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs sm:text-sm font-semibold tracking-wide uppercase shadow-sm">
                <span className="w-2 h-2 rounded-full bg-primary animate-ping" />
                Next-Gen Commute for Everyone
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.div variants={itemVariants} className="space-y-2">
              <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-enigma text-secondary leading-[1.08] tracking-tight">
                WHERE DO YOU <br className="hidden sm:inline" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-purple-600 to-indigo-600">
                  WANT TO GO?
                </span>
              </h1>
            </motion.div>

            {/* Destination Pills */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center gap-2.5 sm:gap-3 text-sm font-metropolis font-medium"
            >
              <div className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-white/90 border border-purple-100 shadow-sm text-gray-800">
                <FaGraduationCap className="text-primary text-base" />
                <span>College</span>
              </div>
              <span className="text-gray-400">•</span>
              <div className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-white/90 border border-purple-100 shadow-sm text-gray-800">
                <FaBriefcase className="text-purple-600 text-sm" />
                <span>Office</span>
              </div>
              <span className="text-gray-400">•</span>
              <div className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-white/90 border border-purple-100 shadow-sm text-gray-800">
                <FaCompass className="text-indigo-600 text-sm" />
                <span>Somewhere you need to be?</span>
              </div>
            </motion.div>

            {/* Subheading / Value Proposition */}
            <motion.div variants={itemVariants} className="space-y-2">
              <p className="text-lg sm:text-xl md:text-2xl text-gray-700 font-metropolis leading-relaxed">
                <span className="font-semibold text-secondary">SHADE</span> can{' '}
                <span className="text-primary font-semibold">pay you to go there</span>. Or{' '}
                <span className="text-secondary font-semibold">pick you up and drop you there</span>.
              </p>
            </motion.div>

            {/* CTA Button */}
            <motion.div variants={itemVariants} className="pt-2 flex flex-wrap items-center gap-4">
              <motion.button
                onClick={handleScrollToHow}
                whileHover={{ scale: 1.04, boxShadow: '0 12px 32px rgba(93, 24, 236, 0.4)' }}
                whileTap={{ scale: 0.97 }}
                className="bg-primary hover:bg-[#4a12c0] text-white px-8 sm:px-10 py-4 sm:py-4.5 rounded-full text-base sm:text-lg font-enigma tracking-wider flex items-center justify-center space-x-3 transition-all duration-300 shadow-xl shadow-primary/25 group cursor-pointer"
              >
                <span>I WANT TO KNOW HOW</span>
                <FaArrowRight className="inline-block transform group-hover:translate-x-1 transition-transform duration-300 text-sm sm:text-base" />
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right Column: Hero Visual Illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
            className="lg:col-span-5 relative"
          >
            {/* Glowing backdrop card */}
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Outer decorative glow */}
              <div className="absolute -inset-2 bg-gradient-to-r from-primary/30 to-purple-400/30 rounded-3xl blur-xl opacity-70 animate-pulse-slow" />

              {/* Main Visual Image Card */}
              <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden bg-white shadow-2xl border border-white/60">
                <img
                  src={heroVisual}
                  alt="Leaving home with SHADE app route illustration"
                  className="w-full h-auto object-cover transform hover:scale-102 transition-transform duration-700"
                />

                {/* Glass overlay badge on bottom of visual */}
                <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 bg-white/85 backdrop-blur-md p-3 sm:p-4 rounded-xl sm:rounded-2xl border border-white/50 shadow-lg flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                      <FaMapMarkerAlt className="text-base sm:text-lg animate-bounce" />
                    </div>
                    <div>
                      <p className="text-xs sm:text-sm font-bold text-secondary font-enigma">
                        Live Route Match
                      </p>
                      <p className="text-[11px] sm:text-xs text-gray-500 font-metropolis">
                        Earn as Rider • Save as Passenger
                      </p>
                    </div>
                  </div>
                  <span className="px-2.5 py-1 rounded-full text-[10px] sm:text-xs font-semibold bg-emerald-100 text-emerald-700">
                    Instant Match
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection


