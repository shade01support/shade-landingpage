import { motion } from 'framer-motion'
import { FaUserFriends, FaCoins, FaLeaf, FaShieldAlt, FaCompass } from 'react-icons/fa'

const BrandStatement = () => {
  const pillars = [
    {
      icon: FaCoins,
      title: 'Save & Earn Money',
      text: 'Riders offset fuel costs while passengers travel at a fraction of cab prices.',
    },
    {
      icon: FaUserFriends,
      title: 'Real Community',
      text: 'No strangers with surge pricing. Ride with college peers and verified commuters.',
    },
    {
      icon: FaLeaf,
      title: 'Greener Planet',
      text: 'Fewer half-empty vehicles on the road means reduced traffic and zero wasted fuel.',
    },
  ]

  return (
    <section className="py-24 md:py-32 bg-[#0f0c20] text-white relative overflow-hidden">
      {/* Dynamic background glow effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/30 rounded-full blur-[120px] animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/25 rounded-full blur-[140px]" />
      </div>

      {/* Subtle background grid */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23FFFFFF' fill-opacity='0.4'%3E%3Cpath d='M0 0h1v40H0V0zm39 0h1v40h-1V0zM0 0h40v1H0V0zm0 39h40v1H0v-1z'/%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Intro transition tag */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-purple-200 text-xs sm:text-sm font-semibold tracking-widest uppercase mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-primary animate-ping" />
          The SHADE Philosophy
        </motion.div>

        {/* Big emotional question & statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="space-y-4 mb-12"
        >
          <p className="text-xl sm:text-2xl md:text-3xl font-metropolis font-light text-purple-200/90 tracking-wide">
            So,
          </p>
          <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-enigma tracking-tight leading-[1.05]">
            Why ride alone? <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-primary to-indigo-300">
              Just SHADE!
            </span>
          </h2>
        </motion.div>

        {/* Concept description that differentiates from cab clones */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg sm:text-xl md:text-2xl font-metropolis text-gray-300 max-w-3xl mx-auto leading-relaxed mb-16"
        >
          SHADE isn’t another expensive taxi app with dynamic pricing and stranger danger. 
          It’s an intelligent, verified ride-sharing movement that turns everyday empty routes into shared, pocket-friendly journeys.
        </motion.p>

        {/* Three differentiator cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 text-left">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 + idx * 0.1 }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="bg-white/5 backdrop-blur-lg border border-white/10 p-7 sm:p-8 rounded-3xl hover:border-primary/50 hover:bg-white/[0.08] transition-all duration-300 shadow-xl"
              >
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary to-purple-600 flex items-center justify-center text-white text-xl mb-6 shadow-lg shadow-primary/30">
                  <Icon />
                </div>
                <h3 className="text-xl font-enigma text-white mb-3">
                  {pillar.title}
                </h3>
                <p className="text-sm font-metropolis text-gray-300 leading-relaxed">
                  {pillar.text}
                </p>
              </motion.div>
            )
          })}
        </div>

      </div>
    </section>
  )
}

export default BrandStatement
