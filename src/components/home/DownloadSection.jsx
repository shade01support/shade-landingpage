import { motion } from 'framer-motion'
import { FaArrowRight, FaQrcode } from 'react-icons/fa'
import qr from '../../assert/QR.jpeg'

const DownloadSection = () => {
  const playStoreUrl = 'https://play.google.com/store/apps/details?id=com.shade.app&pcampaignid=web_share'

  return (
    <section id="download" className="py-20 md:py-28 bg-gradient-to-br from-[#f6f2ff] via-white to-[#ede8ff] relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 -left-32 w-80 h-80 bg-primary/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -right-32 w-96 h-96 bg-purple-400/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-white rounded-3xl sm:rounded-[2.5rem] border border-purple-100 shadow-2xl p-8 sm:p-12 lg:p-16 overflow-hidden relative">
          
          {/* Subtle decorative background gradient */}
          <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-2xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Column: CTA & Store buttons */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-7 space-y-8 text-left"
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs sm:text-sm font-semibold uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                Live on Mobile
              </div>

              <div className="space-y-4">
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-enigma text-secondary tracking-tight">
                  Ready to go?
                </h2>
                <p className="text-lg sm:text-xl text-gray-600 font-metropolis leading-relaxed max-w-xl">
                  Stop overpaying for solo rides or driving with empty seats. Join the SHADE community today and commute smarter.
                </p>
              </div>

              {/* Main Forced CTA Button */}
              <div>
                <a
                  href={playStoreUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block w-full sm:w-auto"
                >
                  <motion.button
                    whileHover={{ scale: 1.04, boxShadow: '0 14px 36px rgba(93, 24, 236, 0.45)' }}
                    whileTap={{ scale: 0.97 }}
                    className="w-full sm:w-auto bg-primary hover:bg-[#4a12c0] text-white px-10 py-5 rounded-full text-lg sm:text-xl font-enigma tracking-wider flex items-center justify-center space-x-3 transition-all duration-300 shadow-xl shadow-primary/30 group cursor-pointer"
                  >
                    <span>DOWNLOAD SHADE</span>
                    <FaArrowRight className="transform group-hover:translate-x-1.5 transition-transform duration-300" />
                  </motion.button>
                </a>
              </div>
            </motion.div>

            {/* Right Column: QR Code Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-5 flex justify-center"
            >
              <div className="bg-gradient-to-br from-[#f8f5ff] to-white p-6 sm:p-8 rounded-3xl border-2 border-primary/20 shadow-xl max-w-sm w-full text-center relative group">
                
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider mb-4">
                  <FaQrcode /> Scan & Ride
                </div>

                <div className="relative mx-auto w-52 h-52 sm:w-60 sm:h-60 bg-white rounded-2xl p-3 border-2 border-primary/30 shadow-inner flex items-center justify-center overflow-hidden mb-5">
                  <img
                    src={qr}
                    alt="SHADE App QR Code"
                    className="w-full h-full object-contain rounded-xl transform group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Decorative corner borders */}
                  <div className="absolute top-2 left-2 w-6 h-6 border-t-2 border-l-2 border-primary rounded-tl-md pointer-events-none" />
                  <div className="absolute top-2 right-2 w-6 h-6 border-t-2 border-r-2 border-primary rounded-tr-md pointer-events-none" />
                  <div className="absolute bottom-2 left-2 w-6 h-6 border-b-2 border-l-2 border-primary rounded-bl-md pointer-events-none" />
                  <div className="absolute bottom-2 right-2 w-6 h-6 border-b-2 border-r-2 border-primary rounded-br-md pointer-events-none" />
                </div>

                <h3 className="text-lg font-enigma text-secondary font-bold mb-1">
                  Scan to Install Instantly
                </h3>
                <p className="text-xs sm:text-sm text-gray-500 font-metropolis">
                  Point your phone camera to open directly in the App or Play Store
                </p>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default DownloadSection
