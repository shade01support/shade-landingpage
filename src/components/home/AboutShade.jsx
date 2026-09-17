import { motion } from 'framer-motion'
import { useState, useRef, useEffect, useCallback } from 'react'
import { FaUsers, FaDollarSign, FaLeaf, FaHandshake, FaCheckCircle, FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import ChromaGrid from '../ChromaGrid/ChromaGrid'

const AboutShade = () => {
  const scrollContainerRef = useRef(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const checkScrollButtons = useCallback(() => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current
      setCanScrollLeft(scrollLeft > 0)
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10)
    }
  }, [])

  useEffect(() => {
    const checkButtons = () => {
      setTimeout(checkScrollButtons, 100)
    }
    checkButtons()
    window.addEventListener('resize', checkButtons)
    return () => window.removeEventListener('resize', checkButtons)
  }, [checkScrollButtons])

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -340,
        behavior: 'smooth'
      })
      setTimeout(checkScrollButtons, 300)
    }
  }

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 340,
        behavior: 'smooth'
      })
      setTimeout(checkScrollButtons, 300)
    }
  }
  const benefits = [
    {
      icon: <FaCheckCircle className="text-5xl" />,
      title: 'Instant bookings!',
      subtitle: 'No requests or approvals',
      borderColor: '#A855F7',
      gradient: 'linear-gradient(135deg, #A855F7 0%, #8B5CF6 50%, #5D18EC 100%)',
    },
    {
      icon: <FaUsers className="text-5xl" />,
      title: 'Fosters friendships',
      subtitle: 'Building connections through shared journeys',
      borderColor: '#A855F7',
      gradient: 'linear-gradient(135deg, #A855F7 0%, #8B5CF6 50%, #5D18EC 100%)',
    },
    {
      icon: <FaDollarSign className="text-5xl" />,
      title: 'Lowers transportation costs',
      subtitle: 'Split expenses and save money',
      borderColor: '#A855F7',
      gradient: 'linear-gradient(135deg, #A855F7 0%, #A855F7 50%, #A855F7 100%)',
    },
    {
      icon: <FaLeaf className="text-5xl" />,
      title: 'Minimizes carbon emissions',
      subtitle: 'Eco-friendly transportation solution',
      borderColor: '#A855F7',
      gradient: 'linear-gradient(135deg, #A855F7 0%, #A855F7 50%, #A855F7 100%)',
    },
    {
      icon: <FaHandshake className="text-5xl" />,
      title: 'Reduces traffic congestion',
      subtitle: 'Fewer vehicles on campus roads',
      borderColor: '#A855F7',
      gradient: 'linear-gradient(135deg, #A855F7 0%, #A855F7 50%, #1D4ED8 100%)',
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
            About <span className="text-primary">SHADE</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mb-8"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto rounded-2xl p-8 md:p-10 bg-white shadow-md"
        >
          <p className="text-lg md:text-xl text-gray-800 font-metropolis leading-relaxed mb-8 text-center">
            Shade is a bike ride-sharing app designed specifically for college communities, allowing students to share their daily rides with others heading to similar destinations.
          </p>
          <p className="text-base md:text-lg text-gray-700 font-metropolis leading-relaxed text-center">
            The app reduces traffic congestion, lowers transportation costs, fosters friendships, and minimizes carbon emissions.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 min-h-[400px] relative"
        >
          {/* Scrollable Container */}
          <div
            ref={scrollContainerRef}
            onScroll={checkScrollButtons}
            className="overflow-x-auto scrollbar-hide scroll-smooth pb-4"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
            }}
          >
            <ChromaGrid
              items={benefits}
              columns={5}
              rows={1}
              radius={300}
              damping={0.5}
              fadeOut={0.7}
            />
          </div>

          {/* Arrow Navigation */}
          <div className="flex items-center justify-center gap-4 mt-6">
            <button
              onClick={scrollLeft}
              disabled={!canScrollLeft}
              className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 shadow-md ${
                canScrollLeft
                  ? 'bg-primary/20 hover:bg-primary/30 text-primary hover:shadow-lg cursor-pointer'
                  : 'bg-gray-200 text-gray-400 cursor-not-allowed'
              }`}
              aria-label="Scroll left"
            >
              <FaChevronLeft className="text-xl" />
            </button>

            <button
              onClick={scrollRight}
              disabled={!canScrollRight}
              className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 shadow-md ${
                canScrollRight
                  ? 'bg-primary/20 hover:bg-primary/30 text-primary hover:shadow-lg cursor-pointer'
                  : 'bg-gray-200 text-gray-400 cursor-not-allowed'
              }`}
              aria-label="Scroll right"
            >
              <FaChevronRight className="text-xl" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default AboutShade

