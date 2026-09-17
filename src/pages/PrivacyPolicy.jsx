import { motion } from 'framer-motion'
import { FaShieldAlt, FaLock, FaUserShield, FaInfoCircle } from 'react-icons/fa'

const PrivacyPolicy = () => {
  const sections = [
    {
      title: 'SHADE – SHare A riDE: Terms and Conditions',
      lastUpdated: 'Last Updated: 05/04/2024',
      content: [
        {
          heading: 'Welcome to SHADE',
          text: 'SHADE provides an online platform that connects bike owners/riders ("Leads") with individuals seeking a ride ("Fare Payers" or "FPs")…',
        },
        {
          heading: '1. Definitions',
          items: [
            'App: The SHADE mobile application.',
            'User: Anyone who registers for and uses the SHADE App…',
            'Lead: A registered User who owns or has legal access to a two-wheeler…',
            'Fare Payer (FP): A registered User who requests, books, and pays…',
            'Ride: The shared journey…',
            'User Content: Any information, text, graphics, photos…',
            'Service: The platform services provided by SHADE…',
          ],
        },
        {
          heading: '2. The SHADE Service',
          text: 'SHADE provides a platform to facilitate peer-to-peer ride-sharing on two-wheelers…',
        },
        {
          heading: '3. User Eligibility and Accounts',
          text: 'You must be at least 18 years old…',
          subItems: [
            'Full Name',
            'Valid Phone number',
            'Valid Email Address',
            'Aadhar Number…',
            'Profile Picture',
            'For Leads: Driving License, Vehicle Details',
          ],
        },
        {
          heading: '4. Role-Specific Obligations',
          items: [
            'Lead Obligations: Valid license, safety, helmet, legality, etc.',
            'Fare Payer Obligations: Timeliness, helmet, behavior, payment, etc.',
          ],
        },
        {
          heading: '5. Ride Posting, Booking, and Pricing',
          text: 'Rides are posted by Leads, booked by FPs. Pricing shown in-app…',
        },
        {
          heading: '6. Safety Features',
          items: [
            'Live Tracking',
            'Share Location',
            'Emergency Assistance',
            'Report User',
          ],
        },
        {
          heading: '7. User Conduct',
          text: 'Respect others, follow the law, no harassment or illegal activity…',
        },
        {
          heading: '8. Disclaimers',
          text: 'SHADE is a platform, not a transport provider. All rides are at users\' risk…',
        },
        {
          heading: '9. Limitation of Liability',
          text: 'SHADE is not liable for indirect, incidental, or consequential damages…',
        },
        {
          heading: '10. Indemnification',
          text: 'You agree to hold SHADE harmless for any claims or damages…',
        },
        {
          heading: '11. Termination',
          text: 'SHADE may terminate your account at its discretion…',
        },
        {
          heading: '12. Governing Law and Dispute Resolution',
          text: 'Subject to laws of India. Jurisdiction: Coimbatore, Tamil Nadu…',
        },
        {
          heading: '13. Changes to Terms',
          text: 'We may update these terms and notify users accordingly…',
        },
      ],
    },
    {
      title: 'SHADE – SHare A riDE: Privacy Policy',
      lastUpdated: 'Last Updated: 05/04/2024',
      content: [
        {
          heading: '1. Information We Collect',
          items: [
            'Personal Identification (Name, Phone, Email, Aadhar, etc.)',
            'Lead Info (License, Vehicle details)',
            'Real-Time Location',
            'Usage & Device Info',
            'Emergency Contacts',
          ],
        },
        {
          heading: '2. How We Use Your Information',
          items: [
            'Service delivery',
            'Verification',
            'Safety and Legal compliance',
            'Personalization and communication',
          ],
        },
        {
          heading: '3. How We Share Your Information',
          items: [
            'Between Leads & FPs',
            'With emergency contacts',
            'For verification with trusted providers',
            'Legal requests or business transfers',
          ],
        },
        {
          heading: '4. Data Security',
          text: 'We use reasonable encryption and security protocols to protect your data.',
        },
        {
          heading: '5. Data Retention',
          text: 'We retain necessary data for legal, safety, and business reasons.',
        },
        {
          heading: '6. Your Rights and Choices',
          items: [
            'View/edit profile info',
            'Request account deletion',
            'Control location access',
          ],
        },
        {
          heading: '7. Children\'s Privacy',
          text: 'Not for users under 18. We do not knowingly collect data from minors.',
        },
        {
          heading: '8. Changes to this Policy',
          text: 'We may update the policy and notify users through the App.',
        },
      ],
    },
  ]

  const contactInfo = {
    email: 'theshadeapp@gmail.com',
    phone: '9629846693',
    address: '30-A, Vilankurichi Road, Santhi Nagar, Vilankurichi, Coimbatore North, Coimbatore- – 641035, Tamil Nadu',
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-20 min-h-screen bg-gradient-to-b from-white via-white to-primary/10"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center mb-6">
            <FaShieldAlt className="text-primary text-5xl mr-4" />
            <h1 className="text-4xl md:text-5xl font-enigma text-secondary">
              Privacy Policy
            </h1>
          </div>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto"></div>
          <p className="text-lg text-gray-600 font-metropolis mt-6">
            Seamlessly connect with your tools and streamline workflows to enhance efficiency and performance.
          </p>
        </motion.div>

        {/* Content Sections */}
        {sections.map((section, sectionIndex) => (
          <motion.div
            key={sectionIndex}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: sectionIndex * 0.2 }}
            className="bg-white rounded-2xl p-8 md:p-10 shadow-md mb-8"
          >
            <div className="mb-6 pb-4 border-b border-gray-200">
              <h2 className="text-3xl font-enigma text-secondary mb-2">
                {section.title}
              </h2>
              <p className="text-sm text-gray-500 font-metropolis">
                {section.lastUpdated}
              </p>
            </div>

            <div className="space-y-8">
              {section.content.map((item, index) => (
                <div key={index} className="border-l-4 border-primary/30 pl-6">
                  <h3 className="text-xl font-enigma text-secondary mb-3 flex items-center">
                    <FaInfoCircle className="text-primary mr-2" />
                    {item.heading}
                  </h3>
                  {item.text && (
                    <p className="text-gray-700 font-metropolis leading-relaxed mb-3">
                      {item.text}
                    </p>
                  )}
                  {item.items && (
                    <ul className="space-y-2">
                      {item.items.map((listItem, itemIndex) => (
                        <li
                          key={itemIndex}
                          className="text-gray-700 font-metropolis flex items-start"
                        >
                          <span className="text-primary mr-2">•</span>
                          <span>{listItem}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                  {item.subItems && (
                    <ul className="space-y-2 mt-3 ml-4">
                      {item.subItems.map((subItem, subIndex) => (
                        <li
                          key={subIndex}
                          className="text-gray-600 font-metropolis flex items-start"
                        >
                          <span className="text-primary mr-2">-</span>
                          <span>{subItem}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        ))}

        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-white rounded-2xl p-8 shadow-md"
        >
          <div className="flex items-center mb-6">
            <FaLock className="text-primary text-3xl mr-3" />
            <h2 className="text-2xl font-enigma text-secondary">
              Contact Information
            </h2>
          </div>
          <div className="space-y-4">
            <div className="flex items-start">
              <FaUserShield className="text-primary mr-3 mt-1 flex-shrink-0" />
              <div>
                <p className="text-sm text-gray-500 font-metropolis mb-1">Email</p>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="text-gray-700 font-metropolis hover:text-primary transition-colors"
                >
                  {contactInfo.email}
                </a>
              </div>
            </div>
            <div className="flex items-start">
              <FaUserShield className="text-primary mr-3 mt-1 flex-shrink-0" />
              <div>
                <p className="text-sm text-gray-500 font-metropolis mb-1">Phone</p>
                <a
                  href={`tel:${contactInfo.phone}`}
                  className="text-gray-700 font-metropolis hover:text-primary transition-colors"
                >
                  {contactInfo.phone}
                </a>
              </div>
            </div>
            <div className="flex items-start">
              <FaUserShield className="text-primary mr-3 mt-1 flex-shrink-0" />
              <div>
                <p className="text-sm text-gray-500 font-metropolis mb-1">Address</p>
                <p className="text-gray-700 font-metropolis">
                  {contactInfo.address}
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default PrivacyPolicy

