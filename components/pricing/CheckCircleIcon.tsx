import React from "react";

const CheckCircleIcon: React.FC = () => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="check-icon"
      style={{ width: "20px", height: "20px" }}
    >
      <path
        d="M6.25008 10.0003L8.75008 12.5003L13.7501 7.50033M18.3334 10.0003C18.3334 14.6027 14.6025 18.3337 10.0001 18.3337C5.39771 18.3337 1.66675 14.6027 1.66675 10.0003C1.66675 5.39795 5.39771 1.66699 10.0001 1.66699C14.6025 1.66699 18.3334 5.39795 18.3334 10.0003Z"
        stroke="url(#paint0_linear)"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <defs>
        <linearGradient
          id="paint0_linear"
          x1="10.0001"
          y1="1.66699"
          x2="10.0001"
          y2="18.3337"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#6D56B8" />
          <stop offset="1" stopColor="#3E3261" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default CheckCircleIcon;
