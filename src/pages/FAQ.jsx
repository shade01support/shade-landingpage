import { motion } from 'framer-motion'
import FAQAccordion from '../components/faq/FAQAccordion'

const FAQ = () => {
  const faqs = [
    {
      id: 1,
      question: 'What is Shade?',
      answer: 'SHADE is a bike ride-sharing application designed specifically for college communities. It allows students to share their daily rides with others heading to similar destinations, reducing traffic congestion, lowering transportation costs, fostering friendships, and minimizing carbon emissions.',
    },
    {
      id: 2,
      question: 'What is bike pooling?',
      answer: 'Bike pooling is a form of shared transportation where multiple people share a single bike ride to a common or nearby destination. With SHADE, students can either lead a ride (publish their route) or join as a fare payer (request to join someone else\'s ride). This collaborative approach makes commuting more affordable, social, and environmentally friendly.',
    },
    {
      id: 3,
      question: 'How does it work?',
      answer: 'SHADE works in two simple ways: As a LEAD, you can publish your route, pick fare payers, and receive payment. As a FARE PAYER, you can search for available rides, send a request, ride after acceptance, and pay the fare. The app uses smart route matching to connect students heading to similar destinations.',
    },
    {
      id: 4,
      question: 'How secure is the application?',
      answer: 'SHADE prioritizes user safety and security. All users must verify their student status, and we have built-in safety features including user profiles, ride history, and reporting mechanisms. We also encourage users to follow safety guidelines and report any concerns. Your personal information is protected and never shared without consent.',
    },
    {
      id: 5,
      question: 'How do users benefit from Shade?',
      answer: 'Users benefit from SHADE in multiple ways: Cost savings through shared transportation expenses, reduced environmental impact by minimizing vehicles on campus, social connections with fellow students, convenience through easy route matching, and accessibility to campus events and locations that might be difficult to reach otherwise.',
    },
  ]

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-20 min-h-screen bg-gradient-to-b from-white via-white to-primary/10"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-enigma text-secondary mb-6">
            Frequently Asked <span className="text-primary">Questions</span>
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mb-6"></div>
          <p className="text-xl text-gray-700 font-metropolis">
            Everything you need to know about SHADE
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={faq.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <FAQAccordion faq={faq} />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default FAQ

