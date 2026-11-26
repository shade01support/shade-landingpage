import { motion } from 'framer-motion'
import { FaArrowLeft, FaEnvelope, FaGlobe } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Terms = () => {
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
          <h1 className="text-4xl font-enigma text-secondary mb-4">Terms &amp; Conditions</h1>
          <p className="text-lg text-gray-600 font-metropolis">NEXSHADE SMART MOBILITY PRIVATE LIMITED</p>
          <p className="text-sm text-gray-500 mt-2">Effective Date: August 4, 2026</p>
        </div>

        {/* Content */}
        <div className="bg-white/80 backdrop-blur-md rounded-2xl p-8 shadow-xl border border-white/50">
          <div className="prose prose-lg max-w-none text-gray-700 font-metropolis leading-relaxed">
            <p className="mb-4">
              Welcome to SHADE (&quot;Platform&quot;, &quot;App&quot;, &quot;we&quot;, &quot;our&quot;, or &quot;us&quot;). These Terms &amp; Conditions govern your use of the SHADE mobile application, website, and related services operated by <strong>NEXSHADE SMART MOBILITY PRIVATE LIMITED</strong>.
            </p>
            <p className="mb-6 font-medium text-secondary">
              By creating an account or using SHADE, you agree to these Terms &amp; Conditions.
            </p>

            <h2 className="text-2xl font-enigma text-secondary mt-8 mb-4">1. About SHADE</h2>
            <p className="mb-6">
              SHADE is a technology platform that enables users to connect with other users for ride-pooling. SHADE is not a transport operator, taxi service, vehicle owner, employer of riders, or transportation company. We facilitate ride discovery and matching between users.
            </p>

            <h2 className="text-2xl font-enigma text-secondary mt-8 mb-4">2. Eligibility</h2>
            <p className="mb-3">To use SHADE, you must:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Be at least 18 years of age.</li>
              <li>Provide accurate information.</li>
              <li>Have a valid mobile number.</li>
              <li>Hold a valid driving licence if offering rides.</li>
              <li>Comply with all applicable laws.</li>
            </ul>
            <p className="mb-6">
              We may suspend or terminate accounts that provide false information.
            </p>

            <h2 className="text-2xl font-enigma text-secondary mt-8 mb-4">3. Registration</h2>
            <p className="mb-3">
              Users agree that all information submitted during registration is accurate and up to date.
            </p>
            <p className="mb-6">
              You are responsible for maintaining the confidentiality of your account.
            </p>

            <h2 className="text-2xl font-enigma text-secondary mt-8 mb-4">4. Identity &amp; Vehicle Verification</h2>
            <p className="mb-3">SHADE may request verification including:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Mobile OTP</li>
              <li>Driving Licence</li>
              <li>Vehicle Registration Certificate (RC)</li>
              <li>Insurance</li>
              <li>Pollution Under Control (PUC) Certificate</li>
              <li>Selfie or identity verification</li>
            </ul>
            <p className="mb-6">
              Failure to provide valid documents may result in account suspension.
            </p>

            <h2 className="text-2xl font-enigma text-secondary mt-8 mb-4">5. Ride Matching</h2>
            <p className="mb-3">
              SHADE only provides a technology platform for connecting users.
            </p>
            <p className="mb-2">SHADE does not guarantee:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Ride availability</li>
              <li>Ride completion</li>
              <li>Route accuracy</li>
              <li>Arrival times</li>
              <li>User behaviour</li>
            </ul>
            <p className="mb-6">
              Users independently decide whether to participate in a ride.
            </p>

            <h2 className="text-2xl font-enigma text-secondary mt-8 mb-4">6. User Responsibilities</h2>
            <p className="mb-3">Users agree to:</p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Follow all traffic laws.</li>
              <li>Treat other users respectfully.</li>
              <li>Not carry prohibited or illegal items.</li>
              <li>Not drive under the influence of alcohol or drugs.</li>
              <li>Wear helmets where legally required.</li>
              <li>Keep vehicle documents valid.</li>
            </ul>

            <h2 className="text-2xl font-enigma text-secondary mt-8 mb-4">7. Safety</h2>
            <p className="mb-3">
              Users must prioritize personal safety.
            </p>
            <p className="mb-3">
              In case of an emergency, users should contact local emergency services immediately.
            </p>
            <p className="mb-6">
              The SOS feature is intended to assist users but does not guarantee emergency response.
            </p>

            <h2 className="text-2xl font-enigma text-secondary mt-8 mb-4">8. Payments</h2>
            <p className="mb-3">
              Where applicable, payments made through SHADE are processed through authorized payment partners.
            </p>
            <p className="mb-3">
              Applicable platform fees or service charges will be displayed before payment.
            </p>
            <p className="mb-6">
              Refunds, if applicable, are subject to our Refund Policy.
            </p>

            <h2 className="text-2xl font-enigma text-secondary mt-8 mb-4">9. Cancellations</h2>
            <p className="mb-3">
              Users should cancel rides only when necessary.
            </p>
            <p className="mb-6">
              Repeated cancellations, fraudulent bookings, or misuse may result in restrictions or suspension.
            </p>

            <h2 className="text-2xl font-enigma text-secondary mt-8 mb-4">10. Prohibited Activities</h2>
            <p className="mb-3">Users shall not:</p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Create fake accounts.</li>
              <li>Misrepresent identity.</li>
              <li>Upload forged documents.</li>
              <li>Harass or threaten others.</li>
              <li>Use SHADE for commercial transport unless permitted by law.</li>
              <li>Attempt to hack, reverse engineer, or disrupt the Platform.</li>
            </ul>

            <h2 className="text-2xl font-enigma text-secondary mt-8 mb-4">11. Privacy</h2>
            <p className="mb-6">
              Our collection and use of personal information is governed by the SHADE Privacy Policy.
            </p>

            <h2 className="text-2xl font-enigma text-secondary mt-8 mb-4">12. Intellectual Property</h2>
            <p className="mb-3">
              All trademarks, logos, software, graphics, and content belong to NEXSHADE SMART MOBILITY PRIVATE LIMITED unless otherwise stated.
            </p>
            <p className="mb-6">
              Users may not copy or reproduce any part of the Platform without written permission.
            </p>

            <h2 className="text-2xl font-enigma text-secondary mt-8 mb-4">13. Limitation of Liability</h2>
            <p className="mb-3">SHADE is a technology platform.</p>
            <p className="mb-2">To the maximum extent permitted by law, SHADE is not responsible for:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Road accidents</li>
              <li>Vehicle damage</li>
              <li>Personal injury</li>
              <li>Theft</li>
              <li>Loss of belongings</li>
              <li>Delays</li>
              <li>Route deviations</li>
              <li>Conduct of users</li>
            </ul>
            <p className="mb-6">
              Users participate in ride-pooling at their own discretion and risk.
            </p>

            <h2 className="text-2xl font-enigma text-secondary mt-8 mb-4">14. Suspension &amp; Termination</h2>
            <p className="mb-3">SHADE may suspend or terminate accounts for:</p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Fraud</li>
              <li>Misuse</li>
              <li>False information</li>
              <li>Illegal activity</li>
              <li>Violation of these Terms</li>
            </ul>

            <h2 className="text-2xl font-enigma text-secondary mt-8 mb-4">15. Governing Law</h2>
            <p className="mb-3">
              These Terms shall be governed by the laws of India.
            </p>
            <p className="mb-6">
              Courts having jurisdiction over the registered office of NEXSHADE SMART MOBILITY PRIVATE LIMITED shall have exclusive jurisdiction over disputes.
            </p>

            <h2 className="text-2xl font-enigma text-secondary mt-8 mb-4">16. Changes</h2>
            <p className="mb-6">
              SHADE may update these Terms from time to time. Continued use of the Platform constitutes acceptance of the updated Terms.
            </p>

            <h2 className="text-2xl font-enigma text-secondary mt-8 mb-4">17. Contact</h2>
            <div className="bg-primary/5 rounded-xl p-6 border border-primary/20">
              <p className="font-semibold text-secondary mb-3">For support or legal queries:</p>
              <div className="space-y-2 text-sm text-gray-700">
                <p className="flex items-center space-x-2">
                  <FaEnvelope className="text-primary" />
                  <span>Email: <a href="mailto:support@theshadeapp.com" className="text-primary hover:underline">support@theshadeapp.com</a></span>
                </p>
                <p className="flex items-center space-x-2">
                  <FaGlobe className="text-primary" />
                  <span>Website: <a href="https://theshadeapp.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">https://theshadeapp.com</a></span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default Terms
