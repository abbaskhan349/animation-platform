// src/components/AmazingButton.tsx

import * as React from "react";

interface AmazingButtonProps {
  children: React.ReactNode;
}

const AmazingButton: React.FC<AmazingButtonProps> = ({ children }) => {
  const buttonStyles = {
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '8px 14px',
    gap: '4px',
    width: '83px',
    border: '1px solid #6B49FF',
    height: '35px',
    background:
      'radial-gradient(77.66% 77.66% at 50% 50%, #181620 15.9%, #1E1930 50.9%, #332C4F 100%)',
      boxShadow: '0px 16px 32px rgba(0, 0, 0, 0.2), inset 0px -2px 8px rgba(107, 73, 255, 0.8)',
      borderRadius: '200px',
    flex: 'none',
    order: 0,
    flexGrow: 0,
  };

  const textStyles = {
    width: '55px',
    height: '19px',
    fontFamily: 'Satoshi',
    fontStyle: 'normal',
    fontWeight: 500,
    fontSize: '14px',
    lineHeight: '19px', // Equivalent to height for alignment
    textAlign: 'center',
    letterSpacing: '-0.0041em',
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

export default AmazingButton;
