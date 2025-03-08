"use client"

import { useState, useRef, useEffect } from "react"
import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"

// Testimonial data
const testimonials = [
  {
    id: 1,
    name: "John M.",
    role: "Operations Lead",
    image: "/placeholder.svg?height=80&width=80",
    text: "This tool has completely transformed the way we work! It's intuitive, fast, and so easy to integrate with our current processes. Highly recommended!",
  },
  {
    id: 2,
    name: "Mike T.",
    role: "Product Designer",
    image: "/placeholder.svg?height=80&width=80",
    text: "I've tried a lot of similar tools, but this one stands out. The features are top-notch, and the customer support is fantastic.",
  },
  {
    id: 3,
    name: "David R.",
    role: "Product Manager",
    image: "/placeholder.svg?height=80&width=80",
    text: "I've tried a lot of similar tools, but this one stands out. The features are top-notch, and the customer support is fantastic.",
  },
  {
    id: 4,
    name: "Kevin B.",
    role: "Freelancer",
    image: "/placeholder.svg?height=80&width=80",
    text: "I can't imagine going back to the old way of doing things. This product has made everything smoother and more efficient. It's a game changer!",
  },
  {
    id: 5,
    name: "Robert S.",
    role: "Project Manager",
    image: "/placeholder.svg?height=80&width=80",
    text: "Incredible tool! I was able to automate so many tasks that used to take hours. It's a real time-saver!",
  },
]

export default function TestimonialCarousel() {
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)
  const [visibleTestimonials, setVisibleTestimonials] = useState<typeof testimonials>([])
  const containerRef = useRef<HTMLDivElement>(null)

  // Calculate how many testimonials to show based on screen width
  useEffect(() => {
    const updateVisibleTestimonials = () => {
      let itemsPerPage = 1

      if (window.innerWidth >= 1280) {
        itemsPerPage = 3
      } else if (window.innerWidth >= 768) {
        itemsPerPage = 2
      }

      const newTotalPages = Math.ceil(testimonials.length / itemsPerPage)
      setTotalPages(newTotalPages)

      // Ensure current page is valid
      const validCurrentPage = Math.min(currentPage, newTotalPages)
      if (validCurrentPage !== currentPage) {
        setCurrentPage(validCurrentPage)
      }

      // Calculate visible testimonials
      const startIdx = (validCurrentPage - 1) * itemsPerPage
      const endIdx = Math.min(startIdx + itemsPerPage, testimonials.length)
      setVisibleTestimonials(testimonials.slice(startIdx, endIdx))
    }

    updateVisibleTestimonials()
    window.addEventListener("resize", updateVisibleTestimonials)

    return () => {
      window.removeEventListener("resize", updateVisibleTestimonials)
    }
  }, [currentPage])

  const goToPage = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page)
    }
  }

  return (
    <div className="relative">
      <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {visibleTestimonials.map((testimonial) => (
          <motion.div
            key={testimonial.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="bg-[#1a1528] rounded-xl p-6 flex flex-col"
          >
            <div className="flex items-center mb-4">
              <div className="w-16 h-16 rounded-full overflow-hidden bg-gray-700 mr-4">
                <img
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white">{testimonial.name}</h3>
                <p className="text-gray-400">{testimonial.role}</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed">{testimonial.text}</p>
          </motion.div>
        ))}
      </div>

      {/* Navigation controls */}
      <div className="flex items-center justify-center mt-8 gap-4">
        <button
          onClick={() => goToPage(currentPage - 1)}
          disabled={currentPage === 1}
          className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed"
          aria-label="Previous page"
        >
          <ChevronLeft className="w-5 h-5 text-white" />
        </button>

        <div className="text-gray-400 text-sm">
          {currentPage} / {totalPages}
        </div>

        <button
          onClick={() => goToPage(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed"
          aria-label="Next page"
        >
          <ChevronRight className="w-5 h-5 text-white" />
        </button>
      </div>
    </div>
  )
}

