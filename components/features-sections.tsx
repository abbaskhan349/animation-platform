import { Mouse, Zap, LayoutList, MessageSquare, Shield, Upload } from "lucide-react"

export default function FeaturesSection() {
  return (
    <div className="bg-[#0f0f17] text-white py-16 px-4 md:py-24">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {/* Feature 1 */}
          <div className="flex flex-col items-center text-center">
            <div className="relative mb-6">
              <Mouse className="w-10 h-10 relative z-10" />
              <div className="absolute inset-0 bg-white/10 blur-lg rounded-full w-10 h-10 mx-auto"></div>
            </div>
            <h3 className="text-2xl font-semibold mb-3">Intuitive User Experience</h3>
            <p className="text-[#bebebe] max-w-xs">
              Start a quick with a user-friendly interface designed for maximum easy and efficiency.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="flex flex-col items-center text-center">
            <div className="relative mb-6">
              <Zap className="w-10 h-10 relative z-10" />
              <div className="absolute inset-0 bg-white/10 blur-lg rounded-full w-10 h-10 mx-auto"></div>
            </div>
            <h3 className="text-2xl font-semibold mb-3">Boost Productivity</h3>
            <p className="text-[#bebebe] max-w-xs">Use pre-default transitions to save time and productivity.</p>
          </div>

          {/* Feature 3 */}
          <div className="flex flex-col items-center text-center">
            <div className="relative mb-6">
              <LayoutList className="w-10 h-10 relative z-10" />
              <div className="absolute inset-0 bg-white/10 blur-lg rounded-full w-10 h-10 mx-auto"></div>
            </div>
            <h3 className="text-2xl font-semibold mb-3">Customizable Templates</h3>
            <p className="text-[#bebebe] max-w-xs">Get ready made customizable templates for your projects.</p>
          </div>

          {/* Feature 4 */}
          <div className="flex flex-col items-center text-center">
            <div className="relative mb-6">
              <MessageSquare className="w-10 h-10 relative z-10" />
              <div className="absolute inset-0 bg-white/10 blur-lg rounded-full w-10 h-10 mx-auto"></div>
            </div>
            <h3 className="text-2xl font-semibold mb-3">24/7 Support</h3>
            <p className="text-[#bebebe] max-w-xs">
              Get instant assistance anytime with our intelligent, always available assistant.
            </p>
          </div>

          {/* Feature 5 */}
          <div className="flex flex-col items-center text-center">
            <div className="relative mb-6">
              <Shield className="w-10 h-10 relative z-10" />
              <div className="absolute inset-0 bg-white/10 blur-lg rounded-full w-10 h-10 mx-auto"></div>
            </div>
            <h3 className="text-2xl font-semibold mb-3">Data Security & Compliance</h3>
            <p className="text-[#bebebe] max-w-xs">Safeguard your operations with industry-leading standards.</p>
          </div>

          {/* Feature 6 */}
          <div className="flex flex-col items-center text-center">
            <div className="relative mb-6">
              <Upload className="w-10 h-10 relative z-10" />
              <div className="absolute inset-0 bg-white/10 blur-lg rounded-full w-10 h-10 mx-auto"></div>
            </div>
            <h3 className="text-2xl font-semibold mb-3">High-Quality Export</h3>
            <p className="text-[#bebebe] max-w-xs">
              High-quality export options allow users to download their content in formats
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
