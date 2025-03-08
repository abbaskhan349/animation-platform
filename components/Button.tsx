// src/components/Button.tsx

import * as React from "react";

interface ButtonProps {
  children: React.ReactNode;
  height?: string; // Optional prop for height
}

const Button: React.FC<ButtonProps> = ({ children, height = "35px" }) => {
  const buttonStyles = {
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '8px 12px',
    gap: '10px',
    // width: '88px',
    height: height, // Use the height prop here
    background: '#03263D',
    border: '0.6px solid rgba(224, 242, 255, 0.4)',
    boxShadow: 'inset 0px 0px 8px #0099FF',
    borderRadius: '10px',
    flex: 'none',
    // order: 2,
    flexGrow: 0,
  };

  const textStyles = {
    width: '64px',
    height: '19px',
    fontStyle: 'normal',
    fontWeight: 500,
    fontSize: '14px',
    lineHeight: '19px',
    textAlign: 'center',
    color: '#FFFFFF',
    flex: 'none',
    order: 0,
    flexGrow: 0,
  };

  return (
    <button style={buttonStyles}>
      <span style={textStyles}>{children}</span>
    </button>
  );
};

export default Button;
