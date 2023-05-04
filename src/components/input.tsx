import { FC, InputHTMLAttributes } from 'react';

/**
 * A wrapper for the standard input element
 */
const Input: FC<InputHTMLAttributes<HTMLInputElement>> = ({ className, ...props }) => {
  return (
    <input
      className={`mt-2 block w-full px-2 transition-all duration-100 ease-in-out border-gray-300 focus:border-yellow-700 focus:ring focus:ring-yellow-600 focus:ring-opacity-50 ${className}`}
      {...props}
    />
  );
};

export default Input;
