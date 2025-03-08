// // src/components/IntegrationCard.tsx

// import * as React from "react";

// const IntegrationCard: React.FC = () => {
//   return (
//     <div
//       style={{
//         position: "absolute",
//         width: "540px",
//         height: "440px",
//         left: "730px",
//         top: "2182px",
//         background:
//           "radial-gradient(43.69% 75.71% at 50% 44.52%, #10141A 0%, #08152B 50%, #0A1017 100%)",
//         borderRadius: "12px",
//       }}
//     >
//       {/* Mask Group */}
//       <div
//         style={{
//           position: "absolute",
//           width: "540px",
//           height: "540px",
//           left: "calc(50% - 540px/2)",
//           top: "calc(50% - 540px/2)",
//         }}
//       >
//         {/* Noise */}
//         <div
//           style={{
//             position: "absolute",
//             width: "540px",
//             height: "540px",
//             left: "0px",
//             top: "-50px",
//           }}
//         ></div>

//         {/* Texture */}
//         <div
//           style={{
//             position: "absolute",
//             left: "0%",
//             right: "0%",
//             top: "0%",
//             bottom: "0%",
//             backgroundImage: "/dropbox.png",
//           }}
//         ></div>
//       </div>

//       {/* Ellipse 41 */}
//       <div
//         style={{
//           position: "absolute",
//           left: "-33.4%",
//           right: "-33.4%",
//           top: "-52.35%",
//           bottom: "-52.35%",
//           background:
//             "radial-gradient(31.35% 31.35% at 50% 50%, rgba(94, 188, 255, 0.3) 0%, rgba(94, 188, 255, 0) 100%)",
//         }}
//       ></div>

//       {/* Ellipse 34 */}
//       <div
//         style={{
//           position: "absolute",
//           width: "240px",
//           height: "240px",
//           left: "47px",
//           top: "12px",
//           background: "rgba(0, 106, 255, 0.28)",
//           filter: "blur(60px)",
//         }}
//       ></div>

//       {/* Ellipse 35 */}
//       <div
//         style={{
//           position: "absolute",
//           width: "240px",
//           height: "240px",
//           left: "246px",
//           top: "104px",
//         //   background: "rgba(112, 80, 255, 0.28)",
//         backgroundColor: 'red'
// ,
//           filter: "blur(60px)",
//         }}
//       ></div>

//       {/* Ellipse 31 */}
//       <div
//         style={{
//           position: "absolute",
//           width: "175px",
//           height: "175px",
//           left: "-13px",
//           top: "-125px",
//           background: "rgba(0, 149, 255, 0.1)",
//           filter: "blur(60px)",
//         }}
//       ></div>

//       {/* Rectangle 37 */}
//       <div
//         style={{
//           position: "absolute",
//           width: "540px",
//           height: "143px",
//           left: "0px",
//           bottom: "0px",
//           background:
//             "linear-gradient(180deg, rgba(16, 19, 29, 0) 0%, rgba(16, 19, 29, 0.064) 80.9%)",
//           backdropFilter: "blur(3px)",
//         }}
//       >
//         {/* Frame 1000009681 */}
//         <div
//           style={{
//             display: "flex",
//             flexDirection: "column",
//             alignItems: "flex-start",
//             padding: "0px",
//             gap: "16px",
//             position: "absolute",
//             width: "380px",
//             height: "103px",
//             left: "20px",
//             top: "20px",
//           }}
//         >
//           {/* Wide Integration Support */}
//           <div
//             style={{
//               width: "380px",
//               height: "24px",
//               fontFamily: "Satoshi",
//               fontStyle: "normal",
//               fontWeight: 700,
//               fontSize: "18px",
//               lineHeight: "24px",
//               letterSpacing: "-0.014em",
//               background:
//                 "linear-gradient(90.33deg, #FFFFFF 0.05%, #FFFFFF 60.14%, #989CA5 104.8%)",
//               WebkitBackgroundClip: "text",
//               WebkitTextFillColor: "transparent",
//               backgroundClip: "text",
//               textFillColor: "transparent",
//             }}
//           >
//             Wide Integration Support
//           </div>

//           {/* Description */}
//           <div
//             style={{
//               width: "390px",
//               height: "38px",
//               fontFamily: "Satoshi",
//               fontStyle: "normal",
//               fontWeight: 400,
//               fontSize: "14px",
//               lineHeight: "19px",
//               letterSpacing: "-0.01em",
//               color: "#BEBEBE",
//             }}
//           >
//             The ability to integrate with third-party apps (e.g., Google Drive,
//             Dropbox, Slack) is essential for users who rely on a suite of tools.
//           </div>

//           {/* Try it now */}
//           <div
//             style={{
//               display: "flex",
//               flexDirection: "row",
//               alignItems: "center",
//               padding: "0px",
//               gap: "11px",
//               width: "88px",
//               height: "19px",
//             }}
//           >
//             <div
//               style={{
//                 width: "65px",
//                 height: "19px",
//                 fontFamily: "Manrope",
//                 fontStyle: "normal",
//                 fontWeight: 700,
//                 fontSize: "14px",
//                 lineHeight: "19px",
//                 textAlign: "center",
//                 color: "#5EBCFF",
//               }}
//             >
//               Try it now
//             </div>

//             {/* Arrow 1 */}
//             <div
//               style={{
//                 width: "12px",
//                 height: "0px",
//                 border: "1px solid #5EBCFF",
//               }}
//             ></div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default IntegrationCard;


// src/components/IntegrationSupportCard.tsx

import * as React from "react";

const IntegrationSupportCard: React.FC = () => {
  return (
    <div className="relative w-full max-w-3xl mx-auto bg-gray-900 rounded-lg p-8">
      {/* Icons */}
      <div className="flex justify-center mb-8">
        {/* Dropbox Icon */}
        <div className="mr-8">
          <img
            src="/dropbox.png"
            alt="Dropbox"
            className="w-20 h-20 rounded-lg"
          />
        </div>
        {/* Custom Logo */}
        <div className="mr-8">
          <img
            src="/dropbox.png"
            alt="Custom Logo"
            className="w-20 h-20 rounded-full"
          />
        </div>
        {/* Slack Icon */}
        <div>
          <img
            src="/dropbox.png"
            alt="Slack"
            className="w-20 h-20 rounded-lg"
          />
        </div>
      </div>

      {/* Text Content */}
      <div className="text-white">
        <h2 className="text-2xl font-bold mb-2">Wide Integration Support</h2>
        <p className="text-gray-400 mb-4">
          The ability to integrate with third-party apps (e.g., Google Drive,
          Dropbox, Slack) is essential for users who rely on a suite of tools.
        </p>
        <button className="text-blue-400 hover:text-blue-500">
          Try it now →
        </button>
      </div>
    </div>
  );
};

export default IntegrationSupportCard;
