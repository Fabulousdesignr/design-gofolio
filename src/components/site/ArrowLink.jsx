import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ArrowLink({
  to,
  href,
  children,
  className = '',
  icon = true,
  onClick,
}) {
  const classes = `inline-flex items-center gap-2 text-sm font-medium text-text-primary transition-colors hover:text-signal ${className}`;
  const content = (
    <>
      <span>{children}</span>
      {icon ? <ArrowUpRight size={15} aria-hidden="true" /> : null}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={classes} onClick={onClick}>
        {content}
      </Link>
    );
  }

  return (
    <a
      href={href}
      target={href?.startsWith('http') ? '_blank' : undefined}
      rel={href?.startsWith('http') ? 'noopener noreferrer' : undefined}
      className={classes}
      onClick={onClick}
    >
      {content}
    </a>
  );
}
