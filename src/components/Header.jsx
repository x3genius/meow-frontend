import styles from './Header.module.css';
import { NavLink } from 'react-router-dom';
import CatIcon from '/src/assets/cat.svg?react';
import EmptyIcon from '/src/assets/empty.svg?react';

const navClass = ({ isActive }) => isActive ? styles.active : '';

export default function Header() {
  return (
    <header className={`${styles.header}`}>
      <div className={styles.warning}>ВНИМАНИЕ! Согласуйте верстку под мобильные экраны! ВНИМАНИЕ!</div>
      <div className={`${styles.headerContainer} container`}>
        <div className={styles.logo}>
          <CatIcon/>
          <span>Мяу-центр</span>
        </div>

        <nav className={styles.nav}>
          <NavLink to="/" className={navClass}>Главная</NavLink> 
          <NavLink to="/pets" className={navClass}>Питомцы</NavLink> 
          <NavLink to="/help" className={navClass}>Помощь центру</NavLink>
        </nav>

        <div className={styles.loc}>
          <div className={styles.location}>
            <span className={styles.country}>Россия, </span>
            <span className={styles.city}>Санкт-Петербург</span>
          </div>
          <div className={styles.icons}>
            <EmptyIcon/>
            <EmptyIcon/>
          </div>
        </div>
      </div>
    </header>
  );
}