import type { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
}

function Card({ children, className = '' }: CardProps) {
  return <div className={`rounded-[28px] border border-slate-200/80 bg-white shadow-soft ${className}`}>{children}</div>;
}

export default Card;
