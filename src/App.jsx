import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Pets from './pages/Pets';
import Help from './pages/Help';
import Pet from './pages/Pet';
import './App.css';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Header />
      <main className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pets" element={<Pets />} />
          <Route path="/help" element={<Help />} />
          <Route path="/pet/:id" element={<Pet />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
