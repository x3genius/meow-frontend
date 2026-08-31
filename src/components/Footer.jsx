import styles from './Footer.module.css';
import CatIcon from '/src/assets/footer.svg?react';
import VkIcon from '/src/assets/vk.svg?react';
import TgIcon from '/src/assets/tg.svg?react';
import MaxIcon from '/src/assets/max.svg?react';
import { HashLink } from 'react-router-hash-link';
import { URL_TG, URL_VK } from '/src/vars.jsx';
import { URL_MAX } from '../vars';

export default function Footer() {
  return (
    <footer className={`${styles.footer}`}>
      <div className={`${styles.footerContainer} container`}>
        <div className={styles.leftSide}>
          <div className={styles.logo}>
            <CatIcon />
            <span>Мяу-Центр</span>
          </div>
          <div className={styles.copyright}>© 2026 - 2026 БФ &quot;Мяу-Центр&quot;</div>
        </div>

        <div className={styles.rightSide}>
          <div className={styles.location}>
            <span className={styles.country}>Россия, </span>
            <span className={styles.city}>Санкт-Петербург</span>
          </div>
          <div className={styles.icons}>
            <HashLink to={URL_VK} target="_blank" rel="noopener noreferrer">
              <VkIcon />
            </HashLink>
            <HashLink to={URL_TG} target="_blank" rel="noopener noreferrer">
              <TgIcon />
            </HashLink>
            <HashLink to={URL_MAX} target="_blank" rel="noopener noreferrer">
              <MaxIcon width={32}
                height={32} />
            </HashLink>
          </div>
        </div>
      </div>
    </footer>
  );
}
