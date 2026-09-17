import { motion } from 'framer-motion'

const StatsSection = () => {
  const stats = [
    {
      number: '250+',
      label: 'Vehicles Registered'
    },
    {
      number: '10K',
      label: 'Rides Completed'
    },
    {
      number: '2000',
      label: 'Km Travelled'
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-white via-white to-primary/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-enigma text-secondary mb-6">
            Redefining <span className="text-primary">Commute</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mb-8"></div>
          <p className="text-lg md:text-xl text-gray-800 font-metropolis max-w-3xl mx-auto leading-relaxed">
            We're not just another ride-hailing app. <span className="font-semibold">SHADE is a movement</span> to change the way India commutes.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          {/* First two stats side by side */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {stats.slice(0, 2).map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="text-center"
              >
                <div className="text-5xl md:text-6xl font-enigma font-bold text-secondary mb-3">
                  {stat.number}
                </div>
                <div className="text-base md:text-lg font-metropolis text-gray-700">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Third stat centered below */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-center"
          >
            <div className="text-5xl md:text-6xl font-enigma font-bold text-secondary mb-3">
              {stats[2].number}
            </div>
            <div className="text-base md:text-lg font-metropolis text-gray-700">
              {stats[2].label}
            </div>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Smooth purple gradient shade at bottom - flows into next section */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-b from-transparent via-primary/5 to-primary/10 pointer-events-none"></div>
    </section>
  )
}

export default StatsSection
