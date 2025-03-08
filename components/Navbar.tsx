'use client';
import type * as React from 'react';
import { motion } from 'framer-motion';
import NavLink from './Navlink';
import Button from './Button';

const Navbar: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center w-full px-4 py-4">
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="flex gap-10 items-center px-8 py-3.5 text-sm text-white border border-solid border-white border-opacity-10 rounded-[200px] max-md:px-5 max-md:max-w-full backdrop-blur-md bg-black/20"
      >
        <div className="flex flex-wrap gap-10 items-center self-stretch my-auto min-w-60 max-md:max-w-full max-md:justify-between max-md:w-full">
          <motion.img
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            src="https://cdn.builder.io/api/v1/image/assets/8a4a7cd90a3e48bfb588491d983b4510/08153c95a624a12520a12367d420c343aec5a210ffbbf1f425dd221a7643dd09?placeholderIfAbsent=true"
            alt="Logo"
            className="object-contain shrink-0 self-stretch my-auto aspect-[2.61] w-[60px]"
          />
          <div className="flex gap-8 items-center self-stretch my-auto font-medium whitespace-nowrap min-w-60 max-md:hidden">
            {['Home', 'Template', 'Pricing', 'About'].map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                whileHover={{ y: -2 }}
              >
                <NavLink text={item} />
              </motion.div>
            ))}
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="max-md:ml-auto"
          >
            <Button>Try it now</Button>
          </motion.div>
        </div>
      </motion.nav>
    </header>
  );
};

export default Navbar;
