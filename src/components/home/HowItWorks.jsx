import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  FaArrowRight,
  FaMotorcycle,
  FaUserCheck,
  FaMapMarkerAlt,
  FaUsers,
  FaHandHoldingUsd,
  FaSearchLocation,
  FaRoute,
  FaCheckCircle,
  FaArrowDown
} from 'react-icons/fa'

const HowItWorks = () => {
  const [activeTab, setActiveTab] = useState('all') // 'all', 'rider', 'passenger'

  const riderSteps = [
    {
      number: '01',
      title: "Tell us where you're going",
      description: 'Enter your destination and travel time in seconds.',
      icon: FaMapMarkerAlt,
      tag: 'Set Route',
    },
    {
      number: '02',
      title: 'SHADE finds a match',
      description: 'We connect you with people travelling the exact same way.',
      icon: FaUsers,
      tag: 'Auto Match',
    },
    {
      number: '03',
      title: 'Take them along',
      description: 'Pick up your passenger conveniently along your everyday route.',
      icon: FaMotorcycle,
      tag: 'Shared Ride',
    },
    {
      number: '04',
      title: 'Get paid',
      description: 'Complete the ride and earn money directly into your account.',
      icon: FaHandHoldingUsd,
      tag: 'Instant Payout',
    },
  ]

  const passengerSteps = [
    {
      number: '01',
      title: 'Tell us where you need to go',
      description: 'Enter your destination and when you want to leave.',
      icon: FaSearchLocation,
      tag: 'Enter Pickup',
    },
    {
      number: '02',
      title: 'Find your ride',
      description: 'Match instantly with verified riders traveling your exact path.',
      icon: FaRoute,
      tag: 'Verified Match',
    },
    {
      number: '03',
      title: 'Get picked up',
      description: 'Meet your rider at your designated campus or city spot.',
      icon: FaUserCheck,
      tag: 'Smooth Pickup',
    },
    {
      number: '04',
      title: 'Reach your destination',
      description: 'Arrive safely, comfortably, and at a fraction of standard fares.',
      icon: FaCheckCircle,
      tag: 'Safe Arrival',
    },
  ]

  const scrollToSection = (id) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <section id="how-does-it-work" className="py-20 md:py-28 bg-gradient-to-b from-[#f8f5ff] via-white to-white relative overflow-hidden">
      {/* Background soft ambient elements */}
      <div className="absolute top-1/4 -right-40 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -left-40 w-96 h-96 bg-purple-200/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs sm:text-sm font-semibold tracking-wider uppercase mb-4 border border-primary/20">
            Two Simple Sides
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-enigma text-secondary mb-4 tracking-tight">
            How does that <span className="text-primary">even work?</span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto rounded-full" />
        </motion.div>

        {/* 2-Card Choice: Rider vs Passenger */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 max-w-5xl mx-auto mb-16">
          
          {/* Card 1: RIDER */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            whileHover={{ y: -6, transition: { duration: 0.2 } }}
            onClick={() => {
              setActiveTab('rider')
              scrollToSection('rider-journey')
            }}
            className="group relative cursor-pointer rounded-3xl p-8 sm:p-10 bg-gradient-to-br from-white to-[#faf6ff] border-2 border-primary/20 hover:border-primary shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col justify-between"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-bl-full rounded-tr-3xl transition-transform duration-300 group-hover:scale-110 pointer-events-none" />
            
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider mb-6">
                <FaMotorcycle className="text-sm" />
                <span>Vehicle Owner</span>
              </div>

              <h3 className="text-3xl sm:text-4xl font-enigma text-primary mb-4 tracking-tight group-hover:translate-x-1 transition-transform">
                RIDER
              </h3>

              <p className="text-xl font-enigma text-secondary font-bold mb-3 leading-snug">
                You’re already going there.
              </p>

              <p className="text-gray-600 font-metropolis text-base sm:text-lg leading-relaxed mb-8">
                Take someone along and earn money on your way.
              </p>
            </div>

            <div className="flex items-center text-primary font-enigma text-sm font-semibold tracking-wider group-hover:text-[#4a12c0] pt-4 border-t border-purple-100">
              <span>EXPLORE RIDER FLOW</span>
              <FaArrowRight className="ml-2 transform group-hover:translate-x-2 transition-transform duration-300" />
            </div>
          </motion.div>

          {/* Card 2: PASSENGER */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ y: -6, transition: { duration: 0.2 } }}
            onClick={() => {
              setActiveTab('passenger')
              scrollToSection('passenger-journey')
            }}
            className="group relative cursor-pointer rounded-3xl p-8 sm:p-10 bg-gradient-to-br from-white to-[#f5f7ff] border-2 border-secondary/15 hover:border-secondary shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col justify-between"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/5 rounded-bl-full rounded-tr-3xl transition-transform duration-300 group-hover:scale-110 pointer-events-none" />

            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 text-secondary text-xs font-semibold uppercase tracking-wider mb-6">
                <FaUserCheck className="text-sm" />
                <span>Daily Commuter</span>
              </div>

              <h3 className="text-3xl sm:text-4xl font-enigma text-secondary mb-4 tracking-tight group-hover:translate-x-1 transition-transform">
                PASSENGER
              </h3>

              <p className="text-xl font-enigma text-secondary font-bold mb-3 leading-snug">
                You need to get there.
              </p>

              <p className="text-gray-600 font-metropolis text-base sm:text-lg leading-relaxed mb-8">
                Find a SHADE ride and get picked up and dropped off.
              </p>
            </div>

            <div className="flex items-center text-secondary font-enigma text-sm font-semibold tracking-wider group-hover:text-black pt-4 border-t border-gray-200">
              <span>EXPLORE PASSENGER FLOW</span>
              <FaArrowRight className="ml-2 transform group-hover:translate-x-2 transition-transform duration-300" />
            </div>
          </motion.div>

        </div>

        {/* Tagline Bridge Callout */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center my-12 md:my-16"
        >
          <div className="inline-block bg-white border border-primary/20 shadow-md shadow-primary/5 px-8 sm:px-12 py-5 rounded-2xl md:rounded-full">
            <p className="text-xl sm:text-2xl md:text-3xl font-enigma text-secondary tracking-tight">
              “It’s basically that <span className="text-primary">simple.</span>”
            </p>
          </div>
        </motion.div>

        {/* View Filter Pills */}
        <div className="flex justify-center items-center gap-2 sm:gap-4 mb-16">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-enigma tracking-wider transition-all duration-300 ${
              activeTab === 'all'
                ? 'bg-secondary text-white shadow-md'
                : 'bg-white border border-gray-200 text-gray-700 hover:border-gray-400'
            }`}
          >
            SHOW BOTH
          </button>
          <button
            onClick={() => setActiveTab('rider')}
            className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-enigma tracking-wider transition-all duration-300 ${
              activeTab === 'rider'
                ? 'bg-primary text-white shadow-md'
                : 'bg-white border border-gray-200 text-gray-700 hover:border-primary hover:text-primary'
            }`}
          >
            RIDER JOURNEY
          </button>
          <button
            onClick={() => setActiveTab('passenger')}
            className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-enigma tracking-wider transition-all duration-300 ${
              activeTab === 'passenger'
                ? 'bg-primary text-white shadow-md'
                : 'bg-white border border-gray-200 text-gray-700 hover:border-primary hover:text-primary'
            }`}
          >
            PASSENGER JOURNEY
          </button>
        </div>

        {/* 3. Rider Journey Section */}
        {(activeTab === 'all' || activeTab === 'rider') && (
          <motion.div
            id="rider-journey"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-24 pt-4 scroll-mt-24"
          >
            {/* Sub-header */}
            <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 pb-4 border-b border-gray-200 gap-4">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider mb-2">
                  <FaMotorcycle /> Offer Rides & Earn
                </div>
                <h3 className="text-3xl sm:text-4xl font-enigma text-secondary">
                  Rider <span className="text-primary">Journey</span>
                </h3>
              </div>
              <p className="text-sm sm:text-base text-gray-600 font-metropolis max-w-md">
                Turn empty seats into cash by sharing your routine commute.
              </p>
            </div>

            {/* 4-Step Flow Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
              {riderSteps.map((step, idx) => {
                const Icon = step.icon
                return (
                  <div key={idx} className="relative flex flex-col">
                    <motion.div
                      whileHover={{ y: -5 }}
                      transition={{ duration: 0.2 }}
                      className="bg-white rounded-2xl p-6 sm:p-7 border border-purple-100 shadow-sm hover:shadow-xl transition-all duration-300 flex-1 flex flex-col justify-between"
                    >
                      <div>
                        {/* Step Header */}
                        <div className="flex items-center justify-between mb-6">
                          <span className="text-2xl sm:text-3xl font-enigma font-bold text-primary">
                            {step.number}
                          </span>
                          <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center text-xl">
                            <Icon />
                          </div>
                        </div>

                        <span className="inline-block text-[11px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-md bg-purple-50 text-purple-700 mb-3 font-metropolis">
                          {step.tag}
                        </span>

                        <h4 className="text-lg sm:text-xl font-enigma text-secondary mb-2.5 font-bold">
                          {step.title}
                        </h4>

                        <p className="text-sm font-metropolis text-gray-600 leading-relaxed">
                          {step.description}
                        </p>
                      </div>

                      {/* Directional Arrow on mobile */}
                      {idx < 3 && (
                        <div className="lg:hidden flex justify-center pt-4 text-primary/60">
                          <FaArrowDown className="animate-bounce text-sm" />
                        </div>
                      )}
                    </motion.div>

                    {/* Step Connector Arrow for Desktop */}
                    {idx < 3 && (
                      <div className="hidden lg:flex absolute -right-3 top-1/2 -translate-y-1/2 z-20 w-6 h-6 rounded-full bg-primary text-white items-center justify-center text-[10px] shadow-md pointer-events-none">
                        <FaArrowRight />
                      </div>
                    )}
                  </div>
                )
              })}
            </div>

            {/* Rider CTA Button */}
            <div className="text-center mt-10">
              <a
                href="https://play.google.com/store/apps/details?id=com.shade.app&pcampaignid=web_share"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
              >
                <motion.button
                  whileHover={{ scale: 1.04, boxShadow: '0 10px 30px rgba(93, 24, 236, 0.4)' }}
                  whileTap={{ scale: 0.97 }}
                  className="bg-primary hover:bg-[#4a12c0] text-white px-8 sm:px-10 py-4 rounded-full text-base sm:text-lg font-enigma tracking-wider flex items-center justify-center space-x-3 transition-all duration-300 shadow-lg shadow-primary/25"
                >
                  <span>BECOME A RIDER</span>
                  <FaArrowRight className="inline" />
                </motion.button>
              </a>
            </div>
          </motion.div>
        )}

        {/* 4. Passenger Journey Section */}
        {(activeTab === 'all' || activeTab === 'passenger') && (
          <motion.div
            id="passenger-journey"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12 pt-4 scroll-mt-24"
          >
            {/* Sub-header */}
            <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 pb-4 border-b border-gray-200 gap-4">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 text-secondary text-xs font-semibold uppercase tracking-wider mb-2">
                  <FaUserCheck /> Find Rides & Save
                </div>
                <h3 className="text-3xl sm:text-4xl font-enigma text-secondary">
                  Passenger <span className="text-primary">Journey</span>
                </h3>
              </div>
              <p className="text-sm sm:text-base text-gray-600 font-metropolis max-w-md">
                Get picked up and dropped off comfortably without paying high cab prices.
              </p>
            </div>

            {/* 4-Step Flow Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
              {passengerSteps.map((step, idx) => {
                const Icon = step.icon
                return (
                  <div key={idx} className="relative flex flex-col">
                    <motion.div
                      whileHover={{ y: -5 }}
                      transition={{ duration: 0.2 }}
                      className="bg-white rounded-2xl p-6 sm:p-7 border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 flex-1 flex flex-col justify-between"
                    >
                      <div>
                        {/* Step Header */}
                        <div className="flex items-center justify-between mb-6">
                          <span className="text-2xl sm:text-3xl font-enigma font-bold text-secondary">
                            {step.number}
                          </span>
                          <div className="w-12 h-12 rounded-xl bg-secondary/10 text-secondary flex items-center justify-center text-xl">
                            <Icon />
                          </div>
                        </div>

                        <span className="inline-block text-[11px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-md bg-gray-100 text-gray-700 mb-3 font-metropolis">
                          {step.tag}
                        </span>

                        <h4 className="text-lg sm:text-xl font-enigma text-secondary mb-2.5 font-bold">
                          {step.title}
                        </h4>

                        <p className="text-sm font-metropolis text-gray-600 leading-relaxed">
                          {step.description}
                        </p>
                      </div>

                      {/* Directional Arrow on mobile */}
                      {idx < 3 && (
                        <div className="lg:hidden flex justify-center pt-4 text-secondary/60">
                          <FaArrowDown className="animate-bounce text-sm" />
                        </div>
                      )}
                    </motion.div>

                    {/* Step Connector Arrow for Desktop */}
                    {idx < 3 && (
                      <div className="hidden lg:flex absolute -right-3 top-1/2 -translate-y-1/2 z-20 w-6 h-6 rounded-full bg-secondary text-white items-center justify-center text-[10px] shadow-md pointer-events-none">
                        <FaArrowRight />
                      </div>
                    )}
                  </div>
                )
              })}
            </div>

            {/* Passenger CTA Button */}
            <div className="text-center mt-10">
              <a
                href="https://play.google.com/store/apps/details?id=com.shade.app&pcampaignid=web_share"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
              >
                <motion.button
                  whileHover={{ scale: 1.04, boxShadow: '0 10px 30px rgba(45, 45, 45, 0.3)' }}
                  whileTap={{ scale: 0.97 }}
                  className="bg-secondary hover:bg-black text-white px-8 sm:px-10 py-4 rounded-full text-base sm:text-lg font-enigma tracking-wider flex items-center justify-center space-x-3 transition-all duration-300 shadow-lg"
                >
                  <span>FIND A RIDE</span>
                  <FaArrowRight className="inline" />
                </motion.button>
              </a>
            </div>
          </motion.div>
        )}

      </div>
    </section>
  )
}

export default HowItWorks


