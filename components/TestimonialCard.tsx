import React from "react";

const TestimonialCard: React.FC = () => {
  return (
    <div
      className="absolut flex flex-col items-start p-6 gap-6 w-[480p h-[183px] left-[calc(50%-480px/2-310px)] bg-gradient-to-b from-[#0F0C18] via-[#0D0A17] to-[#110828] backdrop-blur-[8px] rounded-[14px] isolate"
      style={{
        // backdropFilter: "blur(8px)", // Fallback for browsers with minimal support
      }}
    >
      {/* Profile Section */}
      <div className="flex flex-row items-center gap-3 ">
        {/* Profile Image */}
        <div
          className="w-[45px] h-[45px] bg-gray-400 bg-cover bg-center rounded-full"
          style={{ backgroundImage: "url(.jpg)" }}
        ></div>

        {/* Name and Role */}
        <div className="flex flex-col gap-1">
          <p className="text-white font-satoshi font-medium text-[16px] leading-[22px] tracking-[-0.0041em]">
            John M.
          </p>
          <p className="text-[#868392] font-satoshi font-medium text-[14px] leading-[19px] tracking-[-0.0041em]">
            Operations Lead
          </p>
        </div>
      </div>

      {/* Testimonial Text */}
      <p className="text-[#ACA7BD] font-satoshi font-medium text-sm leading-[22p tracking-[-0.0041em]  self-tretch z1">
        This tool has completely transformed the way we work! It's intuitive,
        fast, and so easy to integrate with our current processes. Highly
        recommended!
      </p>

      {/* Mask Group */}

    </div>
  );
};

export default TestimonialCard;
