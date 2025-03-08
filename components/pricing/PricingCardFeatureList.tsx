import React from "react";
import PricingCardFeature from "./PricingCardFeature";

const features = [
  "Everything in Free",
  "Unlimited folders",
  "No watermark",
  "HD export in 4K, 120fps",
  "Team libraries",
];

const PricingCardFeatureList: React.FC = () => {
  return (
    <section className="flex flex-col gap-5">
      {features.map((feature, index) => (
        <PricingCardFeature key={index} text={feature} />
      ))}
    </section>
  );
};

export default PricingCardFeatureList;
