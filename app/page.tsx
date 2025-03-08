'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import {
  motion,
  useScroll,
  useTransform,
  useInView,
  useAnimation,
} from 'framer-motion';
import Navbar from '@/components/Navbar';
import ClientsSection from '@/components/ClientsSection';
import PricingCard from '@/components/pricing/PricingCard';
import Button from '@/components/Button';
import DemoButton from '@/components/DemoButton';
import AmazingButton from '@/components/AmazingButton';
import WhyChooseUs from '@/components/WhyChooseUs';
import TestimonialSection from '@/components/testimonial-section';
import FAQSection from '@/components/faq-section';

export default function Home() {
  const controls = useAnimation();
  const heroRef = useRef(null);
  const isHeroInView = useInView(heroRef, { once: true });

  const featuresRef = useRef(null);
  const isFeaturesInView = useInView(featuresRef, { once: true, amount: 0.2 });

  const whyUsRef = useRef(null);
  const isWhyUsInView = useInView(whyUsRef, { once: true, amount: 0.2 });

  const pricingRef = useRef(null);
  const isPricingInView = useInView(pricingRef, { once: true, amount: 0.2 });

  const faqRef = useRef(null);
  const isFaqInView = useInView(faqRef, { once: true, amount: 0.2 });

  const testimonialsRef = useRef(null);
  const isTestimonialsInView = useInView(testimonialsRef, {
    once: true,
    amount: 0.2,
  });

  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.1], [1, 0.8]);

  useEffect(() => {
    if (isHeroInView) {
      controls.start('visible');
    }
  }, [controls, isHeroInView]);

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      {/* Hero Section */}
      <motion.section
        ref={heroRef}
        className="relative pt-32 pb-16 md:py-24 px-6 md:px-12 lg:px-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 to-transparent opacity-30"></div>
        <div className="max-w-4xl mx-auto text-center mb-4 mt-20">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
          >
            Transform Concepts into,
            <br />
            <span className="bg-gradient-to-r from-blue-400 to-blue-600 text-transparent bg-clip-text">
              Dynamic Animations
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-gray-400 mb-8 px-4"
          >
            Unleash your creativity with our intuitive animation tool. Create
            stunning
            <br className="hidden md:block" />
            custom animations that captivate your audience in just a few clicks.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button height="46px">Try it now</Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <DemoButton>Book your demo</DemoButton>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="relative max-w-5xl mx-auto"
        >
          <img
            src="/hero.png"
            alt="hero"
            className="w-full h-full object-cover rounded-lg"
          />
        </motion.div>

        <ClientsSection />
      </motion.section>

      <section
        id="features"
        ref={featuresRef}
        className="py-16 md:py-24 px-6 md:px-12 lg:px-20"
      >
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isFeaturesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="flex justify-center mb-4">
              <AmazingButton>Amazing</AmazingButton>
            </div>

            <h1 className="text-[2.5rem] font-medium mb-2">
              Features and benefits
            </h1>
            <p className="text-gray-400">
              Create, customize, and collaborate effortlessly with our intuitive
              platform.
              <br />
              From simple edits to complex designs, bring your vision to life in
              no time.
            </p>
          </motion.div>
          <div className="flex gap-5">
            {/* Easy-to-Use Interface Card */}
            <div
              className="group relative rounded-xl overflow-hidden p-6 w-[600px] h-[400px]"
              style={{
                backgroundImage: "url('/feature1.png')",
                backgroundSize: '100% 100%', // Stretches the image to fill the div
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                // height: "400px",
              }}
            >
              <div className="">
                <h3 className="text- font-semibold mb-1">
                  Easy-to-Use Interface
                </h3>
                <p className="text-gray-400 mb-4 text-sm w-3/5">
                  Users can quickly start using the platform without needing a
                  steep learning curve.
                </p>
                <p className="text-blue-400 text-sm font-semibold">
                  Try it now -&gt;
                </p>
              </div>
            </div>

            <div
              className="group relative rounded-xl overflow-hidden p-6 w-[480px] h-[400px]"
              style={{
                backgroundImage: "url('/feature2.png')",
                backgroundSize: 'cover',
                backgroundPosition: 'center', // Centers the image
                backgroundRepeat: 'no-repeat', // Prevents the image from repeating
              }}
            >
              <div className="">
                <h3 className="text- font-semibold mb-1">
                  Easy-to-Use Interface
                </h3>
                <p className="text-gray-400 mb-4 text-sm">
                  Explanation: If your product enables collaboration, emphasize
                  the ability for teams to work together in real time.
                </p>
                <p className="text-blue-400 text-sm font-semibold">
                  Try it now -&gt;
                </p>
              </div>
            </div>
          </div>
          <div className="flex gap-5 mt-5">
            <div
              className="group relative rounded-xl overflow-hidden p-6 w-1/2 h-[400px] items-end flex"
              style={{
                backgroundImage: "url('/feature3.png')",
                backgroundSize: 'cover',
                backgroundPosition: 'center', // Centers the image
                backgroundRepeat: 'no-repeat', // Prevents the image from repeating
              }}
            >
              <div className="">
                <h3 className="text- font-semibold mb-1">
                  Security Cloud Storage
                </h3>
                <p className="text-gray-400 mb-4 text-sm">
                  With cloud storage, users’ projects are automatically saved,
                  ensuring their data is never lost.
                </p>
                <p className="text-blue-400 text-sm font-semibold">
                  Try it now -&gt;
                </p>
              </div>
            </div>
            <div
              className="group relative rounded-xl overflow-hidden p-6 w-1/2 h-[400px] flex items-end"
              style={{
                backgroundImage: "url('/feature4.png')",
                backgroundSize: 'cover',
                backgroundPosition: 'center', // Centers the image
                backgroundRepeat: 'no-repeat', // Prevents the image from repeating
              }}
            >
              <div className="">
                <h3 className="text- font-semibold mb-1">
                  Wide Integration Support
                </h3>
                <p className="text-gray-400 mb-4 text-sm">
                  The ability to integrate with third-party apps (e.g., Google
                  Drive, Dropbox, Slack) is essential for users who rely on a
                  suite of tools.
                </p>
                <p className="text-blue-400 text-sm font-semibold">
                  Try it now -&gt;
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section
        id="why-us"
        ref={whyUsRef}
        className="py-16 md:py-24 px-6 md:px-12 lg:px-20"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isWhyUsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why choose us
            </h2>
            <p className="text-gray-400 max-w-lg mx-auto">
              Unlock the full potential of your business with exceptional
              features and unmatched performance.{' '}
            </p>
          </motion.div>

          <div className="">
            <WhyChooseUs />
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section
        id="pricing"
        ref={pricingRef}
        className="py-16 md:py-24 px-6 md:px-12 lg:px-20"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isPricingInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Explore all plans
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isPricingInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ y: -10 }}
            >
              <PricingCard gradient="radial-gradient(circle, #10141A 0%, #0C121C 50%, #0A1017 100%)" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isPricingInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              whileHover={{ y: -10 }}
            >
              <PricingCard
                button="true"
                gradient="radial-gradient(circle, #1B1430 0%, #0F0D16 50%, #1B1430 100%)"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isPricingInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              whileHover={{ y: -10 }}
            >
              <PricingCard gradient="radial-gradient(circle, #10141A 0%,  #0C121C 50%, #0A1017 100%)" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section
        id="faq"
        ref={faqRef}
        className="py-16 md:py-24 px-6 md:px-12 lg:px-20"
      >
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isFaqInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-2xl md:text-4xl font-semibold mb-4">
              Frequently Asked Questions
            </h2>
          </motion.div>

          <FAQSection />
        </div>
      </section>

      {/* Testimonials Section */}
      <section
        id="testimonials"
        ref={testimonialsRef}
        className="py-16 md:py-24 bg-gradient-to-b from-transparent to-blue-950/10"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isTestimonialsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-5"
          >
            <h3 className="text-3xl md:text-4xl font-semibold mb-4">
              Our Customers
            </h3>
            <p className="text-gray-300 max-w-2xl mx-auto">
              What people say about us
            </p>
          </motion.div>

          <TestimonialSection />
        </div>
      </section>

      {/* CTA Section */}
      <motion.section
        className="py-16 md:py-24 px-6 md:px-12 lg:px-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <motion.div
          className="max-w-lg mx-auto text-center"
          initial={{ y: 50 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 0.5, type: 'spring' }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Get Started</h2>
          <p className="text-gray-400 mb-8 text-lg">
            Holds no opinions on what's and how's. Build whatever makes sense to
            you.{' '}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button height="46px">Try it now</Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <DemoButton>Book your demo</DemoButton>
            </motion.div>
          </div>
        </motion.div>
      </motion.section>

      {/* Footer */}
      <footer className="py-12 px-6 md:px-12 lg:px-20 border-t border-blue-900/20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <motion.div
                className="text-2xl font-bold text-white flex items-center mb-4"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <span className="text-blue-500">∞</span>
                <span className="ml-1">Animify</span>
              </motion.div>
              <motion.p
                className="text-gray-400 text-sm mb-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                123 Animation St, Suite 100
                <br />
                San Francisco, CA 94107
                <br />
                United States
              </motion.p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Pages</h4>
              <ul className="space-y-2 text-gray-400">
                {['Home', 'About', 'Features', 'Pricing', 'Blog'].map(
                  (item, index) => (
                    <motion.li
                      key={item}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.1 + index * 0.05 }}
                      viewport={{ once: true }}
                    >
                      <Link href="#" className="hover:text-white transition">
                        {item}
                      </Link>
                    </motion.li>
                  )
                )}
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Other Pages</h4>
              <ul className="space-y-2 text-gray-400">
                {[
                  'Help',
                  'FAQ',
                  'Contact',
                  'Terms & Conditions',
                  'Privacy Policy',
                ].map((item, index) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.2 + index * 0.05 }}
                    viewport={{ once: true }}
                  >
                    <Link href="#" className="hover:text-white transition">
                      {item}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">My Work</h4>
              <ul className="space-y-2 text-gray-400">
                {['Projects', 'Animations', 'Templates', 'Resources'].map(
                  (item, index) => (
                    <motion.li
                      key={item}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.3 + index * 0.05 }}
                      viewport={{ once: true }}
                    >
                      <Link href="#" className="hover:text-white transition">
                        {item}
                      </Link>
                    </motion.li>
                  )
                )}
              </ul>
            </div>
          </div>
          <motion.div
            className="border-t border-blue-900/20 mt-12 pt-6 text-center text-gray-500 text-sm"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
          >
            © {new Date().getFullYear()} Animify. All rights reserved.
          </motion.div>
        </div>
      </footer>
    </div>
  );
}
