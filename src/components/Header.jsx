import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';
import CatIcon from '/src/assets/cat.svg?react';
import EmptyIcon from '/src/assets/empty.svg?react';

const navClass = ({ isActive }) => (isActive ? styles.active : '');

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className={`${styles.header}`}>
      <div className={`${styles.headerContainer} container`}>
        <div className={styles.logo}>
          <CatIcon />
          <span>Мяу-центр</span>
        </div>

        <button
          className={`${styles.burger} ${isOpen ? styles.burgerActive : ''}`}
          onClick={toggleMenu}
          aria-label="Открыть меню"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div className={`${styles.menu} ${isOpen ? styles.menuOpen : ''}`}>
          <nav className={styles.nav}>
            <NavLink to="/" className={navClass} onClick={() => setIsOpen(false)}>
              Главная
            </NavLink>
            <NavLink to="/pets" className={navClass} onClick={() => setIsOpen(false)}>
              Питомцы
            </NavLink>
            <NavLink to="/help" className={navClass} onClick={() => setIsOpen(false)}>
              Помощь центру
            </NavLink>
          </nav>

          <div className={styles.loc}>
            <div className={styles.location}>
              <span className={styles.country}>Россия, </span>
              <span className={styles.city}>Санкт-Петербург</span>
            </div>
            <div className={styles.icons}>
              <a href="#" className="NotImplemented">
                <EmptyIcon />
              </a>
              <a href="#" className="NotImplemented">
                <EmptyIcon />
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
