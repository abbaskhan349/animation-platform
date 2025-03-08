import React from "react";

const PricingCardHeader: React.FC = () => {
  return (
    <header className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <div className="flex flex-col gap-3">
          <h2 className="text-xl font-medium tracking-normal text-white">
            Professional
          </h2>
          <p className="text-xl tracking-tight text-white text-opacity-70">
            <span className="text-4xl text-white">$20</span>
            <span className="text-xl text-white text-opacity-70">/monthly</span>
          </p>
        </div>
        <p className="text-sm tracking-normal text-white text-opacity-80">
          Perfect for custom animation and motion graphics.
        </p>
      </div>
      <button
        className="px-4 py-3 h-10 text-sm font-bold text-center text-black bg-white rounded-xl cursor-pointer border-none"
        aria-label="Sign up for Professional plan"
      >
        Sign Up with Professional
      </button>
    </header>
  );
};

export default PricingCardHeader;
