import type { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'danger';
  className?: string;
}

function Button({ children, onClick, variant = 'primary', className = '' }: ButtonProps) {
  const base = 'rounded-2xl px-4 py-2.5 font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-soft';
  const variants = {
    primary: 'bg-violet-600 text-white hover:bg-violet-700',
    secondary: 'bg-slate-100 text-slate-700 hover:bg-slate-200',
    danger: 'bg-rose-500 text-white hover:bg-rose-600',
  };

  return (
    <button type="button" onClick={onClick} className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </button>
  );
}

export default Button;
