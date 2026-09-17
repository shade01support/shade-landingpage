import { motion } from 'framer-motion'
import AboutUs from '../components/about/AboutUs'
import Vision from '../components/about/Vision'
import Media from '../components/about/Media'

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-20"
    >
      <AboutUs />
      <Vision />
      <Media />
    </motion.div>
  )
}

export default About

