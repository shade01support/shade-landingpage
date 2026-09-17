import { motion } from 'framer-motion'
import { FaRoute, FaGlobe, FaGraduationCap } from 'react-icons/fa'

const Vision = () => {
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
  )
}

export default Vision

