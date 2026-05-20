import Link from 'next/link';

interface ButtonProps {
  variant?: 'primary' | 'ghost';
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
  type?: 'button' | 'submit';
}

const base =
  'inline-block text-[13px] font-bold uppercase tracking-[0.06em] px-6 py-3 rounded-[6px] cursor-pointer';

const variants = {
  primary:
    'btn-primary text-[var(--navy)] border-0',
  ghost:
    'bg-transparent text-[var(--teal)] border border-[var(--teal)] hover:bg-[rgba(21,234,173,0.08)] transition-colors duration-200',
};

export default function Button({
  variant = 'primary',
  href,
  onClick,
  children,
  className = '',
  type = 'button',
}: ButtonProps) {
  const cls = `${base} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={cls}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={cls}>
      {children}
    </button>
  );
}
