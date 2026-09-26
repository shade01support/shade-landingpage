import { motion } from 'framer-motion'
import { FaHeart, FaLeaf, FaUsers, FaRoute, FaGlobe, FaGraduationCap } from 'react-icons/fa'

const AboutShade = () => {
  const values = [
    { icon: FaHeart, title: 'Connection', description: 'Building meaningful relationships through shared journeys' },
    { icon: FaLeaf, title: 'Sustainability', description: 'Reducing carbon footprint one ride at a time' },
    { icon: FaUsers, title: 'Community', description: 'Fostering a sense of belonging among students' },
  ]

  const visionPoints = [
    {
      icon: FaRoute,
      title: 'Ride, Connect, and Explore',
      description: 'Creating seamless connections between students for shared transportation experiences.',
    },
    {
      icon: FaGlobe,
      title: 'Mission to reduce vehicles and emissions',
      description: 'Committed to reducing the number of vehicles on campus and minimizing carbon emissions.',
    },
    {
      icon: FaGraduationCap,
      title: 'Sustainable, student-first transport',
      description: 'Prioritizing student needs while building a sustainable transportation ecosystem.',
    },
  ]

  return (
    <div id="about" className="scroll-mt-24">
      {/* About Us Section */}
      <section className="py-20 bg-gradient-to-b from-white via-white to-primary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-enigma text-secondary mb-6">
              About <span className="text-primary">Us</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mb-8"></div>
            <p className="text-2xl md:text-3xl font-enigma text-secondary mb-6">
              SHADE: Riding Together for a Greener Future
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-4xl mx-auto mb-16 rounded-2xl p-8 md:p-10 bg-white shadow-md text-secondary"
          >
            <p className="text-lg md:text-xl text-gray-800 font-metropolis leading-relaxed text-center">
              At SHADE, we believe commuting is more than travel—it's connection, sustainability, and community. 
              We're dedicated to transforming how college students move around campus and the city, making transportation 
              more affordable, environmentally friendly, and socially enriching.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                whileHover={{ y: -8 }}
                className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 text-center text-secondary"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-[#4a12c0] rounded-xl flex items-center justify-center mx-auto mb-6">
                  <value.icon className="text-white text-2xl" />
                </div>
                <h3 className="text-xl font-enigma text-secondary mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 font-metropolis">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 bg-gradient-to-b from-white via-white to-primary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-enigma text-secondary mb-6">
              Our <span className="text-primary">Vision</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto"></div>
          </motion.div>

          <div className="space-y-8">
            {visionPoints.map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ scale: 1.02, x: index % 2 === 0 ? -10 : 10 }}
                className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8 bg-white p-8 rounded-2xl shadow-md`}
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 10 }}
                  className="flex-shrink-0"
                >
                  <div className="w-24 h-24 bg-gradient-to-br from-primary to-[#4a12c0] rounded-2xl flex items-center justify-center shadow-lg">
                    <point.icon className="text-white text-4xl" />
                  </div>
                </motion.div>
                <div className="flex-1 text-center md:text-left text-secondary">
                  <h3 className="text-2xl font-enigma text-secondary mb-3">
                    {point.title}
                  </h3>
                  <p className="text-lg text-gray-800 font-metropolis">
                    {point.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Media Section */}
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
    </div>
  )
}

export default AboutShade

