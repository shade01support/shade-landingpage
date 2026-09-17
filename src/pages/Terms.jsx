import { motion } from 'framer-motion'
import { FaArrowLeft } from 'react-icons/fa'
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
          <h1 className="text-4xl font-enigma text-secondary mb-4">Terms and Conditions</h1>
          <p className="text-lg text-gray-600 font-metropolis">SHADE-Share a Ride</p>
          <p className="text-sm text-gray-500 mt-2">Last Updated: 05/04/2024</p>
        </div>

        {/* Content */}
        <div className="bg-white/80 backdrop-blur-md rounded-2xl p-8 shadow-xl border border-white/50">
          <div className="prose prose-lg max-w-none text-gray-700 font-metropolis leading-relaxed">
            <p className="mb-6">
              Welcome to SHADE. SHADE is a peer-to-peer ride-sharing platform that connects bike owners or riders ("Leads") with individuals seeking a ride ("Fare Payers" or "FPs"). By registering, accessing, or using SHADE's mobile application (the "App"), you agree to comply with and be bound by the following Terms and Conditions.
            </p>

            <h2 className="text-2xl font-enigma text-secondary mt-8 mb-4">1. Definitions</h2>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li><strong>App:</strong> The SHADE mobile application and associated services.</li>
              <li><strong>User:</strong> Any person who registers for and uses the SHADE App.</li>
              <li><strong>Lead:</strong> A registered User who owns or has lawful access to a two-wheeler and offers rides through the App.</li>
              <li><strong>Fare Payer (FP):</strong> A registered User who requests, books, and pays for rides through the App.</li>
              <li><strong>Ride:</strong> A shared journey facilitated through SHADE between a Lead and an FP.</li>
              <li><strong>User Content:</strong> Any data, images, text, or information provided by Users on the App.</li>
              <li><strong>Service:</strong> The platform functionality provided by SHADE, including ride posting, booking, payments, and communication tools.</li>
            </ul>

            <h2 className="text-2xl font-enigma text-secondary mt-8 mb-4">2. The SHADE Service</h2>
            <p className="mb-6">
              SHADE is a technology platform that enables Users to arrange and participate in ride-sharing on two-wheelers. SHADE is not a transportation provider; all rides are offered and accepted directly between Users.
            </p>

            <h2 className="text-2xl font-enigma text-secondary mt-8 mb-4">3. User Eligibility and Accounts</h2>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>You must be at least 18 years old to register.</li>
              <li>Registration requires accurate and verifiable information, including:</li>
              <ul className="list-disc pl-8 mt-2 space-y-1">
                <li>Full Name</li>
                <li>Valid Phone Number</li>
                <li>Valid Email Address</li>
                <li>Aadhaar Number</li>
                <li>Profile Picture</li>
                <li>For Leads: Valid Driving License and Vehicle Details</li>
              </ul>
              <li>You are responsible for maintaining the confidentiality of your account credentials.</li>
            </ul>

            <h2 className="text-2xl font-enigma text-secondary mt-8 mb-4">4. Role-Specific Obligations</h2>
            <p className="mb-4"><strong>Leads must:</strong></p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Hold a valid driving license.</li>
              <li>Ensure their vehicle is roadworthy and legally compliant.</li>
              <li>Provide a helmet to the FP.</li>
              <li>Adhere to traffic and safety regulations.</li>
            </ul>
            <p className="mb-4"><strong>Fare Payers must:</strong></p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Arrive on time at pickup points.</li>
              <li>Wear a helmet during rides.</li>
              <li>Behave respectfully towards Leads.</li>
              <li>Make timely payments through the App.</li>
            </ul>

            <h2 className="text-2xl font-enigma text-secondary mt-8 mb-4">5. Ride Posting, Booking, and Pricing</h2>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Leads post rides in the App.</li>
              <li>FPs can book available rides.</li>
              <li>Pricing is displayed transparently within the App and may vary based on distance and demand.</li>
            </ul>

            <h2 className="text-2xl font-enigma text-secondary mt-8 mb-4">6. Safety Features</h2>
            <p className="mb-4">To promote user safety, SHADE provides:</p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Live Ride Tracking</li>
              <li>Location Sharing with Contacts</li>
              <li>Emergency Assistance Features</li>
              <li>In-App User Reporting</li>
            </ul>

            <h2 className="text-2xl font-enigma text-secondary mt-8 mb-4">7. User Conduct</h2>
            <p className="mb-4">You agree to:</p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Treat other Users respectfully.</li>
              <li>Comply with all applicable laws and road regulations.</li>
              <li>Avoid illegal activities, harassment, or abusive conduct on the platform.</li>
            </ul>

            <h2 className="text-2xl font-enigma text-secondary mt-8 mb-4">8. Disclaimers</h2>
            <p className="mb-6">
              SHADE acts solely as a ride-sharing facilitator. We do not own, control, or operate any vehicles. All rides are undertaken at the User's own risk.
            </p>

            <h2 className="text-2xl font-enigma text-secondary mt-8 mb-4">9. Limitation of Liability</h2>
            <p className="mb-4">SHADE is not liable for:</p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Personal injury or property damage resulting from rides.</li>
              <li>Indirect, incidental, or consequential damages.</li>
              <li>Issues arising between Users.</li>
            </ul>

            <h2 className="text-2xl font-enigma text-secondary mt-8 mb-4">10. Indemnification</h2>
            <p className="mb-4">You agree to defend and hold SHADE harmless from claims, damages, or expenses arising out of:</p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Your use of the App.</li>
              <li>Your breach of these Terms.</li>
              <li>Your interactions with other Users.</li>
            </ul>

            <h2 className="text-2xl font-enigma text-secondary mt-8 mb-4">11. Termination</h2>
            <p className="mb-4">SHADE reserves the right to suspend or terminate accounts for:</p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Policy violations</li>
              <li>Fraudulent activity</li>
              <li>Unsafe or inappropriate conduct</li>
            </ul>

            <h2 className="text-2xl font-enigma text-secondary mt-8 mb-4">12. Governing Law and Dispute Resolution</h2>
            <p className="mb-6">
              These Terms are governed by the laws of India. Any disputes will be subject to the jurisdiction of courts in Coimbatore, Tamil Nadu.
            </p>

            <h2 className="text-2xl font-enigma text-secondary mt-8 mb-4">13. Changes to Terms</h2>
            <p className="mb-6">
              SHADE may update these Terms at any time. Updates will be communicated through the App.
            </p>

            <h2 className="text-2xl font-enigma text-secondary mt-8 mb-4">14. Contact Information</h2>
            <div className="bg-primary/5 rounded-lg p-6 border border-primary/20">
              <p className="font-semibold text-secondary mb-2">SHADE – SHare A riDE</p>
              <div className="space-y-1 text-sm text-gray-600">
                <p>📧 Email: theshadeapp@gmail.com</p>
                <p>📞 Phone: +91 9629846693</p>
                <p>🏠 Address: 30-A, Vilankurichi Road, Santhi Nagar, Vilankurichi, Coimbatore North, Coimbatore-  – 641035, Tamil Nadu</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default Terms