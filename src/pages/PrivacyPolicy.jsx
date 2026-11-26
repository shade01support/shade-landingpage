import { motion } from 'framer-motion'
import { FaArrowLeft, FaShieldAlt, FaEnvelope } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const PrivacyPolicy = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gradient-to-br from-white via-primary/5 to-primary/10 py-12"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <Link
          to="/"
          className="inline-flex items-center space-x-2 text-primary hover:text-secondary transition-colors mb-8"
        >
          <FaArrowLeft size={16} />
          <span>Back to Home</span>
        </Link>

        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <FaShieldAlt className="text-primary text-4xl mr-3" />
            <h1 className="text-4xl font-enigma text-secondary">Privacy Policy</h1>
          </div>
          <p className="text-lg text-gray-600 font-metropolis">NEXSHADE SMART MOBILITY PRIVATE LIMITED</p>
          <p className="text-sm text-gray-500 mt-2">Effective Date: August 4, 2026</p>
        </div>

        {/* Content */}
        <div className="bg-white/80 backdrop-blur-md rounded-2xl p-8 md:p-10 shadow-xl border border-white/50">
          <div className="prose prose-lg max-w-none text-gray-700 font-metropolis leading-relaxed">
            <p className="mb-6">
              <strong>NEXSHADE SMART MOBILITY PRIVATE LIMITED</strong> (&quot;SHADE&quot;, &quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) respects your privacy and is committed to protecting your personal data in accordance with applicable Indian laws, including the <em>Digital Personal Data Protection Act, 2023</em>.
            </p>

            <h2 className="text-2xl font-enigma text-secondary mt-8 mb-4">1. Information We Collect</h2>
            <p className="mb-4">We may collect:</p>

            <h3 className="text-xl font-enigma text-secondary mt-6 mb-2">Personal Information</h3>
            <ul className="list-disc pl-6 mb-4 space-y-1">
              <li>Name</li>
              <li>Mobile number</li>
              <li>Email address (if provided)</li>
              <li>Profile photo</li>
              <li>Gender (if provided)</li>
              <li>Date of birth (if provided)</li>
            </ul>

            <h3 className="text-xl font-enigma text-secondary mt-6 mb-2">Identity Verification</h3>
            <p className="mb-2 text-sm text-gray-600">Where applicable:</p>
            <ul className="list-disc pl-6 mb-4 space-y-1">
              <li>Driving Licence</li>
              <li>Vehicle Registration Certificate (RC)</li>
              <li>Vehicle Insurance</li>
              <li>PUC Certificate</li>
              <li>Identity verification documents</li>
            </ul>

            <h3 className="text-xl font-enigma text-secondary mt-6 mb-2">Location Information</h3>
            <ul className="list-disc pl-6 mb-4 space-y-1">
              <li>Live GPS location</li>
              <li>Pickup and destination locations</li>
              <li>Ride route</li>
              <li>Ride history</li>
            </ul>

            <h3 className="text-xl font-enigma text-secondary mt-6 mb-2">Device Information</h3>
            <ul className="list-disc pl-6 mb-6 space-y-1">
              <li>Device model</li>
              <li>Operating system</li>
              <li>App version</li>
              <li>IP address</li>
              <li>Device identifiers</li>
              <li>Crash reports</li>
              <li>Diagnostic information</li>
            </ul>

            <h2 className="text-2xl font-enigma text-secondary mt-8 mb-4">2. Why We Collect Information</h2>
            <p className="mb-3">We use your information to:</p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Create and manage your account.</li>
              <li>Verify identity and eligibility.</li>
              <li>Match riders and ride providers.</li>
              <li>Provide navigation and ride tracking.</li>
              <li>Improve platform safety.</li>
              <li>Detect fraud and abuse.</li>
              <li>Process payments.</li>
              <li>Provide customer support.</li>
              <li>Improve our services.</li>
              <li>Comply with legal obligations.</li>
            </ul>

            <h2 className="text-2xl font-enigma text-secondary mt-8 mb-4">3. Location Data</h2>
            <p className="mb-3">
              Location access is essential for ride matching, navigation, safety features, and live ride updates.
            </p>
            <p className="mb-6">
              Location information may be collected while a ride is active and, where necessary, immediately before and after the ride to support these features.
            </p>

            <h2 className="text-2xl font-enigma text-secondary mt-8 mb-4">4. Sharing of Information</h2>
            <p className="mb-3">We may share information with:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Other matched users as necessary to facilitate a ride.</li>
              <li>Payment service providers.</li>
              <li>Cloud service providers.</li>
              <li>SMS and OTP providers.</li>
              <li>Mapping and navigation providers.</li>
              <li>Government authorities where required by law.</li>
            </ul>
            <p className="mb-6 font-semibold text-secondary">
              We do not sell your personal information.
            </p>

            <h2 className="text-2xl font-enigma text-secondary mt-8 mb-4">5. Third-Party Services</h2>
            <p className="mb-3">SHADE may use services including:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Firebase</li>
              <li>Google Maps Platform</li>
              <li>Razorpay</li>
              <li>MSG91</li>
              <li>Analytics and cloud infrastructure providers</li>
            </ul>
            <p className="mb-6 text-sm text-gray-600">
              Your use of these integrated services may also be subject to their respective privacy policies.
            </p>

            <h2 className="text-2xl font-enigma text-secondary mt-8 mb-4">6. Data Security</h2>
            <p className="mb-3">
              We implement reasonable administrative, technical, and organizational safeguards to protect personal information from unauthorized access, disclosure, alteration, or destruction.
            </p>
            <p className="mb-6">
              No internet-based system can be guaranteed to be completely secure.
            </p>

            <h2 className="text-2xl font-enigma text-secondary mt-8 mb-4">7. Data Retention</h2>
            <p className="mb-6">
              We retain personal information only for as long as reasonably necessary to provide our services, comply with legal obligations, resolve disputes, and enforce our agreements.
            </p>

            <h2 className="text-2xl font-enigma text-secondary mt-8 mb-4">8. Your Rights</h2>
            <p className="mb-3">Subject to applicable law, you may:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Access your personal information.</li>
              <li>Request correction of inaccurate information.</li>
              <li>Request deletion of your account and eligible personal data.</li>
              <li>Withdraw consent for certain processing activities where permitted.</li>
              <li>Contact us regarding your privacy concerns.</li>
            </ul>
            <p className="mb-6 text-sm text-gray-600">
              Certain information may be retained where required by law or for legitimate business purposes.
            </p>

            <h2 className="text-2xl font-enigma text-secondary mt-8 mb-4">9. Cookies and Analytics</h2>
            <p className="mb-6">
              Our website may use cookies and similar technologies to improve user experience, maintain security, and understand website usage.
            </p>

            <h2 className="text-2xl font-enigma text-secondary mt-8 mb-4">10. Children&apos;s Privacy</h2>
            <p className="mb-6">
              SHADE is intended only for individuals aged 18 years or older. We do not knowingly collect personal information from children.
            </p>

            <h2 className="text-2xl font-enigma text-secondary mt-8 mb-4">11. Changes to This Policy</h2>
            <p className="mb-6">
              We may update this Privacy Policy from time to time. Material changes will be communicated through the Platform or our website where appropriate.
            </p>

            <h2 className="text-2xl font-enigma text-secondary mt-8 mb-4">12. Contact &amp; Grievance</h2>
            <div className="bg-primary/5 rounded-xl p-6 border border-primary/20">
              <p className="font-semibold text-secondary mb-3">For privacy requests, complaints, or questions:</p>
              <div className="space-y-3 text-sm text-gray-700">
                <p className="flex items-center space-x-2">
                  <FaEnvelope className="text-primary" />
                  <span>Email: <a href="mailto:support@theshadeapp.com" className="text-primary hover:underline font-medium">support@theshadeapp.com</a></span>
                </p>
                <p className="text-gray-600">
                  We aim to acknowledge privacy-related requests within a reasonable period and handle them in accordance with applicable law.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default PrivacyPolicy
