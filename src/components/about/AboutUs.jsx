import { motion } from 'framer-motion'
import { FaHeart, FaLeaf, FaUsers } from 'react-icons/fa'

const AboutUs = () => {
  const values = [
    { icon: FaHeart, title: 'Connection', description: 'Building meaningful relationships through shared journeys' },
    { icon: FaLeaf, title: 'Sustainability', description: 'Reducing carbon footprint one ride at a time' },
    { icon: FaUsers, title: 'Community', description: 'Fostering a sense of belonging among students' },
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-white via-white to-primary/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-enigma text-secondary mb-6">
            About Us
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mb-8"></div>
          <h2 className="text-3xl md:text-4xl font-enigma text-secondary mb-6">
            SHADE: Riding Together for a Greener Future
          </h2>
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
  )
}

export default AboutUs

