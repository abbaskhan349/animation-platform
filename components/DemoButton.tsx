// src/components/DemoButton.tsx

import * as React from "react";

interface DemoButtonProps {
  children: React.ReactNode;
}

const DemoButton: React.FC<DemoButtonProps> = ({ children }) => {
  const buttonStyles = {
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '12px 20px',
    gap: '10px',
    width: '162px',
    height: '46px',
    background: 'linear-gradient(249.49deg, #1F1F1F 8.6%, #191919 19.56%, #0F0F0F 44.25%)',
    borderRadius: '12px',
    border: '2px solid #333333',

    flex: 'none',
    // order: 1,
    flexGrow: 0,
  };

  const textStyles = {
    // width: '122px',
    height: '22px',
    fontStyle: 'normal',
    fontWeight: 600,
    fontSize: '16px',
    lineHeight: '22px', // Equivalent to height for alignment
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

export default DemoButton;
