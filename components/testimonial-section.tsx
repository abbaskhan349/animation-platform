'use client';
import { useRef, useEffect } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';

export default function TestimonialSection() {
  const testimonials = [
    {
      name: 'John M.',
      role: 'Operations Lead',
      text: "This tool has completely transformed the way we work! It's intuitive, fast, and so easy to integrate with our current processes. Highly recommended!",
    },
    {
      name: 'Sarah K.',
      role: 'Product Manager',
      text: "The efficiency gains we've seen since implementing this solution are remarkable. Our team productivity has increased by 40% in just two months.",
    },
    {
      name: 'Michael P.',
      role: 'CTO',
      text: 'After evaluating several options, this was clearly the superior choice. The support team is responsive and the product is constantly improving.',
    },
    {
      name: 'Emily R.',
      role: 'Marketing Director',
      text: "We've been able to streamline our entire workflow thanks to this platform. The analytics features have been particularly valuable for our team.",
    },
    {
      name: 'David L.',
      role: 'Software Engineer',
      text: 'The API is well-documented and integration was seamless. I was impressed by how quickly we were able to get everything up and running.',
    },
    {
      name: 'Jessica T.',
      role: 'Customer Success',
      text: "Our clients love the results we're able to deliver with this tool. It's made our customer satisfaction ratings soar to new heights.",
    },
  ];

  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [controls, isInView]);

  return (
    <motion.div
      ref={ref}
      className="w-full py-12 px-4 bg-[#080510] text-white overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="relative overflow-hidden px-0 mx-auto">
        <div className="relative">
          {/* Gradient Fade Effect - Left */}
          <div className="absolute top-0 left-0 w-32 h-full z-20 pointer-events-none">
            <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent"></div>
          </div>

          <motion.div
            className="flex mb-6 relative overflow-x-auto pb-4 pr-4 hide-scrollbar"
            style={{
              marginLeft: '-340px',
              scrollbarWidth: 'none', // For Firefox
              msOverflowStyle: 'none', // For IE & Edge
            }}
            initial={{ x: -50, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <div
              className="flex hide-scrollbar"
              style={{
                width: 'calc(100% + 480px/2)',
                overflowX: 'auto',
                WebkitOverflowScrolling: 'touch', // Smooth scrolling
              }}
            >
              {testimonials.slice(0, 4).map((testimonial, index) => (
                <motion.div
                  key={index}
                  className="w-[480px] px-4 flex-shrink-0 relative"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="max-w-md rounded-2xl p-px bg-gradient-to-b from-gray-800 to-transparent">
                    <div className="rounded-[calc(1rem-1px)] p-6 bg-gradient-to-b from-[#0F0C18] via-[#0D0A17] to-[#110828]">
                      <div className="flex flex-row items-center gap-3 mb-5">
                        <div
                          className="w-[45px] h-[45px] bg-gray-400 bg-cover bg-center rounded-full"
                          style={{ backgroundImage: 'url(/test1.png)' }}
                        ></div>
                        <div className="flex flex-col gap-1">
                          <p className="text-white font-medium text-[16px] leading-[22px]">
                            {testimonial.name}
                          </p>
                          <p className="text-[#868392] font-medium text-[14px] leading-[19px]">
                            {testimonial.role}
                          </p>
                        </div>
                      </div>
                      <p className="text-[#ACA7BD] font-medium text-sm leading-[22px]">
                        {testimonial.text}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Gradient Fade Effect - Right */}
          <div className="absolute top-0 right-0 w-32 h-full z-20 pointer-events-none">
            <div className="absolute inset-0 bg-gradient-to-l from-black to-transparent"></div>
          </div>
        </div>
        <div className="relative">
          {/* Gradient Fade Effect - Left */}
          <div className="absolute top-0 left-0 w-32 h-full z-20 pointer-events-none">
            <div className="absolute inset-0 bg-gradient-to-r from-black  to-transparent"></div>
          </div>

          <motion.div
            className="flex mb-6 relative overflow-x-auto pb-4 pr-4 hide-scrollbar"
            style={{
              marginLeft: '-340px',
              scrollbarWidth: 'none', // For Firefox
              msOverflowStyle: 'none', // For IE & Edge
            }}
            initial={{ x: -50, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <div
              className="flex hide-scrollbar"
              style={{
                width: 'calc(100% + 480px/2)',
                overflowX: 'auto',
                WebkitOverflowScrolling: 'touch', // Smooth scrolling
              }}
            >
              {testimonials.slice(0, 4).map((testimonial, index) => (
                <motion.div
                  key={index}
                  className="w-[480px] px-4 flex-shrink-0 relative"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="max-w-md rounded-2xl p-px bg-gradient-to-b from-gray-800 to-transparent">
                    <div className="rounded-[calc(1rem-1px)] p-6 bg-gradient-to-b from-[#0F0C18] via-[#0D0A17] to-[#110828]">
                      <div className="flex flex-row items-center gap-3 mb-5">
                        <div
                          className="w-[45px] h-[45px] bg-gray-400 bg-cover bg-center rounded-full"
                          style={{ backgroundImage: 'url(/test1.png)' }}
                        ></div>
                        <div className="flex flex-col gap-1">
                          <p className="text-white font-medium text-[16px] leading-[22px]">
                            {testimonial.name}
                          </p>
                          <p className="text-[#868392] font-medium text-[14px] leading-[19px]">
                            {testimonial.role}
                          </p>
                        </div>
                      </div>
                      <p className="text-[#ACA7BD] font-medium text-sm leading-[22px]">
                        {testimonial.text}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Gradient Fade Effect - Right */}
          <div className="absolute top-0 right-0 w-32 h-full z-20 pointer-events-none">
            <div className="absolute inset-0 bg-gradient-to-l from-black  to-transparent"></div>
          </div>
        </div>

        <style jsx global>{`
          /* Hide scrollbar for WebKit browsers */
          .hide-scrollbar::-webkit-scrollbar {
            display: none;
          }

          /* Hide scrollbar for Firefox */
          .hide-scrollbar {
            scrollbar-width: none; /* Firefox */
            -ms-overflow-style: none; /* IE & Edge */
          }
        `}</style>
      </div>
    </motion.div>
  );
}
