import { useState } from 'react';
import styles from './FAQ.module.css';

export default function FAQ({ items }) {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  if (!items || items.length === 0) return null;

  return (
    <div className={styles.faqContainer}>
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div key={index} className={styles.faqWrapper}>
            <div className={styles.faqHeader} onClick={() => toggleFAQ(index)}>
              <span className={styles.faqQuestion}>{item.question}</span>
              <button
                className={`${styles.faqButton} ${isOpen ? styles.faqActive : ''}`}
                aria-label="Открыть ответ"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className={`${styles.faqIcon} ${isOpen ? styles.faqButtonOpen : ''}`}
                >
                  <path
                    d="M12 5V19M5 12H19"
                    stroke="currentColor"
                    strokeWidth="1"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
            </div>

            <div
              className={`${styles.faqCollapse} ${isOpen ? styles.faqCollapseOpen : ''}`}
            >
              <p className={styles.faqAnswer}>{item.answer}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
