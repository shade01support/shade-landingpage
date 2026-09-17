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
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div className="glass-card rounded-2xl shadow-2xl overflow-hidden border border-white/60 bg-white">
            <div className="aspect-video bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center relative">
              {/* YouTube Video Embed Placeholder */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="w-full h-full flex items-center justify-center"
              >
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                  title="Ride-share brings people together"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen={true}
                ></iframe>
              </motion.div>
            </div>
            <div className="p-6 text-secondary">
              <h3 className="text-xl font-enigma text-secondary mb-2">
                Ride-share brings people together
              </h3>
              <p className="text-gray-700 font-metropolis">
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

