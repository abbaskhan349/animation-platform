'use client';
import { motion } from 'framer-motion';

function ClientsSection() {
  return (
    <motion.section
      className="mt-20 md:mt-36 max-w-full w-full md:w-[1100px] mx-auto px-4 max-md:mt-10"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <h2 className="text-xl font-medium tracking-tight leading-tight text-center text-stone-300 max-md:max-w-full">
        Our Clients
      </h2>
      <div className="flex flex-wrap gap-6 md:gap-10 justify-center items-center mt-7 w-full max-md:flex-wrap max-md:max-w-full">
        <motion.img
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.1 }}
          src="https://cdn.builder.io/api/v1/image/assets/8a4a7cd90a3e48bfb588491d983b4510/2d70ccb1c06ffae0366362b2a33fab698b266d06e722f6f20172ed15d236d9ae?placeholderIfAbsent=true"
          alt="Client logo"
          className="object-contain shrink-0 self-stretch my-auto w-44 aspect-[4.41]"
        />
        <motion.img
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.1 }}
          src="https://cdn.builder.io/api/v1/image/assets/8a4a7cd90a3e48bfb588491d983b4510/a5afe2c6fc1c18fd8ccdfea3892e5cd6fefd012825085b0ed25db66162f00711?placeholderIfAbsent=true"
          alt="Client logo"
          className="object-contain shrink-0 self-stretch my-auto w-10 aspect-square"
        />
        <motion.img
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.1 }}
          src="https://cdn.builder.io/api/v1/image/assets/8a4a7cd90a3e48bfb588491d983b4510/7770b1532233be2b6ce59ad04dfb8852a2b046cd78f5b1b772a0b46c2209b831?placeholderIfAbsent=true"
          alt="Client logo"
          className="object-contain shrink-0 self-stretch my-auto aspect-[5.05] w-[202px]"
        />
        <motion.img
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.1 }}
          src="https://cdn.builder.io/api/v1/image/assets/8a4a7cd90a3e48bfb588491d983b4510/af41fbc626973a29df20020ce11fe98b0457c08cecfeff7b4386b98ec493d4a9?placeholderIfAbsent=true"
          alt="Client logo"
          className="object-contain shrink-0 self-stretch my-auto w-10 aspect-square"
        />
        <motion.img
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.1 }}
          src="https://cdn.builder.io/api/v1/image/assets/8a4a7cd90a3e48bfb588491d983b4510/df92fb066d6c240bad715b307a50adf893d59a32275ab259b4f9e823e110ad08?placeholderIfAbsent=true"
          alt="Client logo"
          className="object-contain shrink-0 self-stretch my-auto aspect-[2.6] w-[104px]"
        />
        <motion.img
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.1 }}
          src="https://cdn.builder.io/api/v1/image/assets/8a4a7cd90a3e48bfb588491d983b4510/50c05029a65afdef8e233ebe3055eff9deaaf63f5311c47dadbf8dd825016dfb?placeholderIfAbsent=true"
          alt="Client logo"
          className="object-contain shrink-0 self-stretch my-auto aspect-[1.18] w-[52px]"
        />
      </div>
    </motion.section>
  );
}

export default ClientsSection;
