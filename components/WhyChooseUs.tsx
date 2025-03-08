'use client';
import {
  FileText,
  HardDriveUpload,
  MessageSquareMore,
  Mouse,
  ShieldCheck,
  Zap,
} from 'lucide-react';
import { motion } from 'framer-motion';

function WhyChooseUs() {
  const features = [
    {
      icon: <Mouse />,
      title: 'Intuitive User Experience',
      description:
        'Start a quick with a user-friendly interface designed for maximum easy and efficiency.',
    },
    {
      icon: <Zap />,
      title: 'Boost Productivity',
      description: 'Use pre-default transitions to save time and productivity.',
    },
    {
      icon: <FileText />,
      title: 'Customizable Templates',
      description: 'Get ready made customizable templates for your projects.',
    },
    {
      icon: <MessageSquareMore />,
      title: '24/7 Support',
      description:
        'Get instant assistance anytime with our intelligent, always available assistant.',
    },
    {
      icon: <ShieldCheck />,
      title: 'Data Security & Compliance',
      description: 'Safeguard your operations with industry-leading standards.',
    },
    {
      icon: <HardDriveUpload />,
      title: 'High-Quality Export',
      description:
        'High-quality export options allow users to download their content in formats.',
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="h-auto w-auto p-6 md:p-10 bg-gradient-to-r from-[#0c0b13]/90 to-[#0b0f14]/90 rounded-[14px] border border-white/20 backdrop-blur-lg overflow-hidden mx-10"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-7">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="flex flex-col items-center text-center"
          >
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="relative mb-4"
            >
              <div className="relative shadow-[0px_4px_32px_0px_rgba(255,255,255,.4)] bg-[rgba(255,255,255,.1)] p-2 rounded-full">
                {feature.icon}
              </div>
            </motion.div>
            <div className="h-[71px] flex flex-col justify-start items-center gap-3">
              <div className="relative text-center justify-end text-white text-lg font-bold font-['Satoshi']">
                {feature.title}
              </div>
              <div className="relative text-center justify-start text-[#bdbdbd] text-xs font-normal font-['Satoshi'] leading-none">
                {feature.description}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

export default WhyChooseUs;
