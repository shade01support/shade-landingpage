import { motion } from 'framer-motion'
import { useState } from 'react'
import { 
  FaRoute, 
  FaMoneyBillWave, 
  FaBrain, 
  FaShieldAlt, 
  FaCheck, 
  FaArrowRight, 
  FaBolt
} from 'react-icons/fa'

const Features = () => {
  const [hoveredIdx, setHoveredIdx] = useState(null)

  const featureList = [
    {
      id: 'share',
      icon: FaRoute,
      badge: 'Community First',
      title: 'Share the Ride',
      subtitle: 'Connect with verified students heading to your destination. Share bike rides, make friends, and cut campus traffic.',
      stat: '70% Cost Cut',
      statLabel: 'vs solo rides',
      bullets: ['Same campus paths', 'Zero strange detours', 'Shared route companion'],
    },
    {
      id: 'split',
      icon: FaMoneyBillWave,
      badge: 'Pocket Friendly',
      title: 'Split the Cost',
      subtitle: 'Divide everyday petrol & travel costs automatically. Riders earn directly, passengers save every single trip.',
      stat: 'Instant Payouts',
      statLabel: 'Direct UPI transfer',
      bullets: ['Automatic cost splitting', 'Transparent student fares', 'No surge multipliers'],
    },
    {
      id: 'smart',
      icon: FaBrain,
      badge: 'AI Matching',
      title: 'Smart Commuting',
      subtitle: 'Intelligent route matching instantly finds who is traveling along your corridor at your exact timing.',
      stat: '< 30s Pairing',
      statLabel: 'Real-time corridor sync',
      bullets: ['Exact pickup points', 'Live route discovery', 'Predictive routine match'],
    },
    {
      id: 'safe',
      icon: FaShieldAlt,
      badge: 'Verified & Safe',
      title: 'Safe Rides',
      subtitle: 'Student ID checks, live ride tracking, and community ratings keep every ride safe, trusted, and verified.',
      stat: '100% ID Verified',
      statLabel: 'College authenticated',
      bullets: ['Mandatory student verification', 'Live emergency assistance', 'Mutual student ratings'],
    },
  ]

  return (
    <section id="features" className="py-20 md:py-28 bg-gradient-to-b from-white via-white to-primary/5 relative overflow-hidden scroll-mt-24">
      {/* Subtle brand ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-6xl h-80 pointer-events-none">
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-primary/8 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs sm:text-sm font-semibold tracking-wider uppercase mb-4">
            <FaBolt className="text-primary text-xs" />
            <span>Smart Mobility Features</span>
          </div>

          <h2 className="text-4xl sm:text-5xl font-enigma text-secondary mb-4 tracking-tight">
            Key <span className="text-primary">Features</span>
          </h2>
          
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto rounded-full mb-6"></div>
          
          <p className="text-base sm:text-lg text-gray-600 font-metropolis max-w-2xl mx-auto">
            Designed specifically for student communities—fast, affordable, and safe travel every day.
          </p>
        </motion.div>

        {/* 4 Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {featureList.map((feature, idx) => {
            const Icon = feature.icon
            const isHovered = hoveredIdx === idx

            return (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                onMouseEnter={() => setHoveredIdx(idx)}
                onMouseLeave={() => setHoveredIdx(null)}
                whileHover={{ y: -6 }}
                className={`relative rounded-2xl bg-white border transition-all duration-300 flex flex-col justify-between p-7 shadow-sm hover:shadow-xl ${
                  isHovered ? 'border-primary/50 ring-1 ring-primary/20' : 'border-gray-100'
                }`}
              >
                <div>
                  {/* Badge & Number Row */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="px-3 py-1 rounded-full text-xs font-semibold tracking-wide font-metropolis bg-primary/10 text-primary">
                      {feature.badge}
                    </span>
                    <span className="text-xs font-enigma font-bold text-gray-400">
                      0{idx + 1}
                    </span>
                  </div>

                  {/* Feature Icon */}
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center text-primary text-2xl mb-5 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    <Icon />
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="text-xl font-enigma text-secondary mb-2.5 font-bold">
                    {feature.title}
                  </h3>

                  <p className="text-sm font-metropolis text-gray-600 leading-relaxed mb-6">
                    {feature.subtitle}
                  </p>

                  {/* Feature Bullets */}
                  <ul className="space-y-2 mb-6 pt-4 border-t border-gray-100">
                    {feature.bullets.map((bullet, bIdx) => (
                      <li key={bIdx} className="flex items-center text-xs font-metropolis text-gray-600 gap-2">
                        <FaCheck className="text-primary text-[10px] flex-shrink-0" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Bottom Highlight Stat Box */}
                <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                  <div>
                    <p className="text-xs font-bold text-secondary font-enigma">
                      {feature.stat}
                    </p>
                    <p className="text-[11px] text-gray-500 font-metropolis">
                      {feature.statLabel}
                    </p>
                  </div>

                  <div className={`w-7 h-7 rounded-full flex items-center justify-center transition-all duration-300 ${
                    isHovered ? 'bg-primary text-white' : 'bg-gray-100 text-gray-500'
                  }`}>
                    <FaArrowRight className="text-[10px]" />
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Features

