"use client"

import { motion } from "framer-motion"

interface TestimonialCardProps {
  name: string
  role: string
  text: string
  image: string
}

export default function TestimonialCard({ name, role, text, image }: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-[#1a1528] rounded-xl p-6 flex flex-col"
    >
      <div className="flex items-center mb-4">
        <div className="w-16 h-16 rounded-full overflow-hidden bg-gray-700 mr-4">
          <img src={image || "/placeholder.svg"} alt={name} className="w-full h-full object-cover" />
        </div>
        <div>
          <h3 className="text-xl font-semibold text-white">{name}</h3>
          <p className="text-gray-400">{role}</p>
        </div>
      </div>
      <p className="text-gray-300 leading-relaxed">{text}</p>
    </motion.div>
  )
}

