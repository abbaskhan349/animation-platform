import React from "react";
import CheckCircleIcon from "./CheckCircleIcon";

interface PricingCardFeatureProps {
  text: string;
}

const PricingCardFeature: React.FC<PricingCardFeatureProps> = ({ text }) => {
  return (
    <div className="flex gap-2 items-center">
      <div>
        <CheckCircleIcon />
      </div>
      <p className="text-sm font-medium tracking-normal text-white text-opacity-80">
        {text}
      </p>
    </div>
  );
};

export default PricingCardFeature;
