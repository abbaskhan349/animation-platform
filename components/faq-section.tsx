'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PlusIcon, MinusIcon } from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  toggleOpen: () => void;
  gradient: string;
}

const FAQItem = ({
  question,
  answer,
  isOpen,
  toggleOpen,
  gradient,
}: FAQItemProps) => {
  return (
    <motion.div
      style={{ background: gradient }}
      className="border border-blue-900/30 rounded-xl overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <button
        className="flex justify-between items-center w-full p-4 text-left"
        onClick={toggleOpen}
      >
        <span className="font-medium">{question}</span>
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          {isOpen ? (
            <MinusIcon className="h-5 w-5 text-blue-500" />
          ) : (
            <PlusIcon className="h-5 w-5 text-blue-500" />
          )}
        </motion.div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="p-4 pt-0 text-gray-400">{answer}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default function FAQSection() {
  const faqs = [
    {
      question: 'Can I use Animify for free?',
      answer:
        'Yes, Animify offers a free tier with basic features. You can create animations, access a limited library of templates, and export with watermarks. For more advanced features, consider our premium plans.',
      gradient:
        'radial-gradient(circle, #10141A 0%, #0C121C 50%, #0A1017 100%)',
    },
    {
      question: 'Why should I upgrade to the Premium plan?',
      answer:
        "The Premium plan offers unlimited projects, no watermarks, HD exports in 4K at 120fps, team libraries, and priority support. It's ideal for professionals and teams who need advanced features and higher quality outputs.",
      gradient:
        'radial-gradient(circle, #13101A 0%, #0F0c18 50%, #0D0A17 100%)',
    },
    {
      question: 'How does collaborative editing work?',
      answer:
        "Collaborative editing allows multiple team members to work on the same project simultaneously. Changes are synced in real-time, and you can see who's working on what. This feature is available on our Team and Enterprise plans.",
      gradient:
        'radial-gradient(circle, #10141A 0%, #0C121C 50%, #0A1017 100%)',
    },
    {
      question: 'How do I cancel my subscription?',
      answer:
        "You can cancel your subscription at any time from your account settings. Navigate to Billing > Subscription and click 'Cancel Subscription'. Your plan will remain active  Navigate to Billing > Subscription and click 'Cancel Subscription'. Your plan will remain active until the end of your current billing period.",
      gradient:
        'radial-gradient(circle, #13101A 0%, #0F0c18 50%, #0D0A17 100%)',
    },
    {
      question: 'What is your refund policy?',
      answer:
        "We offer a 14-day money-back guarantee for all new subscriptions. If you're not satisfied with our service, contact our support team within 14 days of your purchase for a full refund.",
      gradient:
        'radial-gradient(circle, #10141A 0%, #0C121C 50%, #0A1017 100%)',
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-4 w-full max-w-3xl mx-auto">
      {faqs.map((faq, index) => (
        <FAQItem
          key={index}
          question={faq.question}
          answer={faq.answer}
          isOpen={openIndex === index}
          toggleOpen={() => toggleFAQ(index)}
          gradient={faq.gradient}
        />
      ))}
    </div>
  );
}
