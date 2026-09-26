import { motion } from 'framer-motion'
import HeroSection from '../components/home/HeroSection'
import HowItWorks from '../components/home/HowItWorks'
import BrandStatement from '../components/home/BrandStatement'
import DownloadSection from '../components/home/DownloadSection'

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <HeroSection />
      <HowItWorks />
      <BrandStatement />
      <DownloadSection />
    </motion.div>
  )
}

export default Home

