import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="main-header">
      <div className="logo">Мяу-центр</div>
      <nav>
        <Link to="/">Главная</Link>
        <Link to="/pets">Питомцы</Link>
        <Link to="/help">Помощь</Link>
      </nav>
    </header>
  );
}