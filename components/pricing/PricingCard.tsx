// "use client";

// import React from "react";
// import PricingCardHeader from "./PricingCardHeader";
// import PricingCardFeatureList from "./PricingCardFeatureList";
// import PricingCardBadge from "./PricingCardBadge";

// interface Props {
//   button?: string;
//   gradient?: string;
// }

// const PricingCard: React.FC<Props> = ({button=false, gradient}) => {
//   return (
// <article
//   className="relative rounded-lg overflow-hidden"
//   style={{
//     background: gradient || 'radial-gradient(43.69% 75.71% at 50% 44.52%, #10141A 0%, #0C121C 50%, #0A1017 100%)', // Default gradient if none is provided
//     borderRadius: '8px',
//   }}
// >      <section className="flex flex-col gap-6 p-6 max-sm:p-5">
//         <PricingCardHeader />
//         <PricingCardFeatureList />
//       </section>
//       {button &&<PricingCardBadge />}
//     </article>
//   );
// };

// export default PricingCard;



// src/components/PricingCard.tsx

import React from "react";
import PricingCardHeader from "./PricingCardHeader"; // Assuming this is defined elsewhere
import PricingCardFeatureList from "./PricingCardFeatureList"; // Assuming this is defined elsewhere
import PricingCardBadge from "./PricingCardBadge"; // Assuming this is defined elsewhere

interface Props {
  button?: string;
  gradient?: string; // Add a gradient prop to customize the background
}

const PricingCard: React.FC<Props> = ({ button = false, gradient }) => {
  return (
    <article
      className="relative rounded-lg overflow-hidden"
      style={{
        background: gradient || 'radial-gradient(circle, #10141A 0%, #0C121C 50%, #0A1017 100%)', // Simplified default gradient
        borderRadius: '8px',
        width: '360px', // Ensure explicit width
        height: '435px', // Ensure explicit height
      }}
    >
      <section className="flex flex-col gap-6 p-6 max-sm:p-5">
        <PricingCardHeader />
        <PricingCardFeatureList />
      </section>
      {button && <PricingCardBadge />}
    </article>
  );
};

export default PricingCard;
