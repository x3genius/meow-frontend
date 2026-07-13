import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';
import CatIcon from '/src/assets/cat.svg?react';
import VkIcon from '/src/assets/vk.svg?react';
import TgIcon from '/src/assets/tg.svg?react';
import { HashLink } from 'react-router-hash-link';
import { URL_TG, URL_VK } from '/src/vars.jsx';

const navClass = ({ isActive }) => (isActive ? styles.active : '');

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className={`${styles.header}`}>
      <div className={`${styles.headerContainer} container`}>
        <NavLink to="/">
          <div className={styles.logo}>
            <CatIcon />
            <span>Мяу-Центр</span>
          </div>
        </NavLink>

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
              <HashLink to={URL_VK} target="_blank" rel="noopener noreferrer">
                <VkIcon />
              </HashLink>
              <HashLink to={URL_TG} target="_blank" rel="noopener noreferrer">
                <TgIcon />
              </HashLink>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
