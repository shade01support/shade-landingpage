import { motion } from 'framer-motion'

const Media = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white via-white to-primary/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-enigma text-secondary mb-6">
            Media
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-md mx-auto"
        >
          <div className="glass-card rounded-2xl shadow-2xl overflow-hidden border border-white/60 bg-white">
            <div className="bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center p-3 sm:p-4">
              {/* Instagram Reel Embed */}
              <iframe
                className="w-full max-w-[380px] h-[540px] sm:h-[580px] rounded-xl border-0 shadow-sm"
                src="https://www.instagram.com/reel/DSclpTmE3wq/embed"
                title="Ride-share brings people together"
                frameBorder="0"
                scrolling="no"
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                allowFullScreen={true}
              ></iframe>
            </div>
            <div className="p-6 text-secondary text-center">
              <h3 className="text-xl font-enigma text-secondary mb-2">
                Ride-share brings people together
              </h3>
              <p className="text-gray-700 font-metropolis text-sm">
                Watch how SHADE is transforming college transportation and bringing students together through shared rides.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Media

