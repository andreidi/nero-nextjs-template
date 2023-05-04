import { ButtonHTMLAttributes, FC } from 'react';

/**
 * A wrapper for the standard button element
 */
const Button: FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({ className, children, ...props }) => {
  return (
    <button
      className={`bg-stone-700 hover:bg-stone-950 uppercase text-white py-2 px-6 text-lg transition-all duration-300 ease-in-out ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
