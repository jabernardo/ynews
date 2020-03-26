import Link from 'next/link'

export default function({
  className,
  children,
  isPrimary,
  link,
  type,
  ...props
}) {
  className = className || "button ";
  className += isPrimary ? "button-primary" : "";

  if (link) {
    return (
      <Link href={link} {...props}>
        <button className={className}>{children}</button>
      </Link>
    );
  }

  return (
    <button className={className} {...props}>
      {children}
    </button>
  );
}