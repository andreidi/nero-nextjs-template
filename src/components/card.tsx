import { ReactNode } from 'react';

export interface ICardProps {
  className?: string;
  children?: ReactNode;
}

const Card = ({ className = '', children }: ICardProps) => {
  return (
    <div className={`bg-stone-900 text-gray-50 p-8 ${className}`}>
      {children}
    </div>
  );
};

export default Card;
