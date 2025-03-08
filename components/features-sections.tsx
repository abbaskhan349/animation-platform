'use client';
import {
  Mouse,
  Zap,
  LayoutList,
  MessageSquare,
  Shield,
  Upload,
} from 'lucide-react';
import { motion } from 'framer-motion';

export default function FeaturesSection() {
  const features = [
    {
      icon: <Mouse className="w-10 h-10 relative z-10" />,
      title: 'Intuitive User Experience',
      description:
        'Start a quick with a user-friendly interface designed for maximum easy and efficiency.',
    },
    {
      icon: <Zap className="w-10 h-10 relative z-10" />,
      title: 'Boost Productivity',
      description: 'Use pre-default transitions to save time and productivity.',
    },
    {
      icon: <LayoutList className="w-10 h-10 relative z-10" />,
      title: 'Customizable Templates',
      description: 'Get ready made customizable templates for your projects.',
    },
    {
      icon: <MessageSquare className="w-10 h-10 relative z-10" />,
      title: '24/7 Support',
      description:
        'Get instant assistance anytime with our intelligent, always available assistant.',
    },
    {
      icon: <Shield className="w-10 h-10 relative z-10" />,
      title: 'Data Security & Compliance',
      description: 'Safeguard your operations with industry-leading standards.',
    },
    {
      icon: <Upload className="w-10 h-10 relative z-10" />,
      title: 'High-Quality Export',
      description:
        'High-quality export options allow users to download their content in formats.',
    },
  ];

  return (
    <div className="bg-[#0f0f17] text-white py-16 px-4 md:py-24">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16"
        >
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
                className="relative mb-6"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                {feature.icon}
                <div className="absolute inset-0 bg-white/10 blur-lg rounded-full w-10 h-10 mx-auto"></div>
              </motion.div>
              <h3 className="text-2xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-[#bebebe] max-w-xs">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
