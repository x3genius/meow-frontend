import styles from './Footer.module.css';
import CatIcon from '/src/assets/footer.svg?react';
import VkIcon from '/src/assets/vk.svg?react';
import TgIcon from '/src/assets/tg.svg?react';
import { HashLink } from 'react-router-hash-link';

export default function Footer() {
  return (
    <footer className={`${styles.footer}`}>
      <div className={`${styles.footerContainer} container`}>
        <div className={styles.leftSide}>
          <div className={styles.logo}>
            <CatIcon />
            <span>Мяу-центр</span>
          </div>
          <div className={styles.copyright}>© 2026 - 2026 БФ "Мяу-Центр"</div>
        </div>

        <div className={styles.rightSide}>
          <div className={styles.location}>
            <span className={styles.country}>Россия, </span>
            <span className={styles.city}>Санкт-Петербург</span>
          </div>
          <div className={styles.icons}>
            {/* <HashLink to="#" target="_blank" rel="noopener noreferrer">
              <VkIcon />
            </HashLink> */}
            <HashLink
              to="https://t.me/meowcenterr"
              target="_blank"
              rel="noopener noreferrer"
            >
              <TgIcon />
            </HashLink>
          </div>
        </div>
      </div>
    </footer>
  );
}
