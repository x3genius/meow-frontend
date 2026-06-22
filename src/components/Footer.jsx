import styles from './Footer.module.css';
import { NavLink } from 'react-router-dom';
import CatIcon from '/src/assets/footer.svg?react';

export default function Footer() {
  return (
    <footer className={`${styles.footer}`}>
      <div className={`${styles.footerContainer} container`}>
        <div className={styles.logo}>
          <CatIcon/>
          <span>Мяу-центр</span>
        </div>
      </div>
    </footer>
  );
}