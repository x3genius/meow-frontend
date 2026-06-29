import { useState, useRef, useEffect } from 'react';
import styles from './Select.module.css';

export default function Select({
  options = [],
  value,
  onChange,
  placeholder = 'Не выбран',
  className,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [menuPosition, setMenuPosition] = useState({});
  const dropdownRef = useRef(null);
  const menuRef = useRef(null);

  const selectedOption = options.find((opt) => opt.value === value);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    if (isOpen && menuRef.current) {
      const rect = menuRef.current.getBoundingClientRect();
      if (rect.right > window.innerWidth) {
        setMenuPosition({ left: 'auto', right: 0 });
      } else {
        setMenuPosition({ left: 0, right: 'auto' });
      }
    }
  }, [isOpen]);

  const handleSelect = (selectedValue) => {
    onChange(selectedValue);
    setIsOpen(false);
  };

  return (
    <div
      className={[styles.container, className].filter(Boolean).join(' ')}
      ref={dropdownRef}
    >
      <button type="button" className={styles.trigger} onClick={() => setIsOpen(!isOpen)}>
        <span className={!selectedOption ? styles.textMain : ''}>
          {selectedOption ? selectedOption.label : placeholder}
        </span>

        <svg
          className={`${styles.icon} ${isOpen ? styles.iconOpen : ''}`}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </button>

      {isOpen && (
        <ul className={styles.menu} ref={menuRef} style={menuPosition}>
          <li
            className={`
              ${styles.menuItem} 
              ${!selectedOption ? styles.menuItemActive : ''} 
              ${styles.textMain}
            `}
            onClick={() => handleSelect('')}
          >
            {placeholder}
          </li>

          {options.map((opt) => (
            <li
              key={opt.value}
              className={`${styles.menuItem} ${value === opt.value ? styles.menuItemActive : ''}`}
              onClick={() => handleSelect(opt.value)}
            >
              {opt.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
