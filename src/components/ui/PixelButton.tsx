import React, { ButtonHTMLAttributes } from 'react';

interface PixelButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'danger';
}

const PixelButton: React.FC<PixelButtonProps> = ({
  children,
  variant = 'primary',
  className = '',
  ...props
}) => {
  const baseClasses = 'pixel-btn relative px-6 py-2 transition-transform active:translate-y-1 font-bold text-center focus:outline-none';
  const variantClasses = {
    primary: 'bg-blue-500 text-white hover:bg-blue-600 shadow-pixel-blue',
    secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300 shadow-pixel-gray',
    danger: 'bg-red-500 text-white hover:bg-red-600 shadow-pixel-red',
  };
  
  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      {...props}
    >
      <span className="pixel-text">{children}</span>
    </button>
  );
};

export default PixelButton;