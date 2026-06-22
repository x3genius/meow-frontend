import { HashLink } from 'react-router-hash-link';
import styles from './Button.module.css';

export default function Button({
  children,
  variant = 'primary',
  size = 'normal',
  href,
  ...props
}) {
  const buttonClasses = [styles.btn, styles[variant], styles[size]].join(' ');

  const scrollWithOffset = (el) => {
    setTimeout(() => {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
  };

  if (href) {
    return (
      <HashLink to={href} scroll={scrollWithOffset} className={buttonClasses} {...props}>
        {children}
      </HashLink>
    );
  }

  return (
    <button className={buttonClasses} {...props}>
      {children}
    </button>
  );
}
