import styles from './Checkbox.module.css';

export default function Checkbox({ children, checked, onChange, className, ...props }) {
  return (
    <label className={[styles.buttonWrapper, className].filter(Boolean).join(' ')}>
      <span className={styles.label}>{children}</span>

      <input
        type="checkbox"
        className={styles.hiddenInput}
        checked={checked}
        onChange={onChange}
        {...props}
      />

      <div className={styles.box}>
        <svg
          className={styles.checkmark}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
      </div>
    </label>
  );
}