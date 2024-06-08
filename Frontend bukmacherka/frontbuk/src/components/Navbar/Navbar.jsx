import './Navbar.css';
import { useState } from 'react';
import { FaPlus, FaUserCircle } from 'react-icons/fa';
import reactLogo from '../../assets/logo.jpg';

export default function NavbarMain() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <nav className="navbar">
      <a href="/" className="navbar-brand">
        <img src={reactLogo} alt="Logo" className="navbar-logo" id='logo-buk' />
        <span id='buk-name'>Fortuitous Bet</span>
      </a>

      <a href="/about" className="navbar-brand" style={{margin:0}}>O nas</a>
      <div className="navbar-collapse">
        <form className="navbar-form">
          <button type="button" className="btn btn-outline-success">
            <FaPlus />
          </button>
          <input id='token-input' type="text" readOnly={true} placeholder="Dodaj tokeny" />
        </form>
        <div className="navbar-dropdown">
          <button className="navbar-dropdown-toggle" onClick={toggleDropdown}>
            <FaUserCircle size={24} />
          </button>
          <ul className={`navbar-dropdown-menu ${dropdownOpen ? 'show' : ''}`}>
            <li><a href="#/action-1" className="navbar-dropdown-item">Profil</a></li>
            <li><a href="#/action-2" className="navbar-dropdown-item">Ustawienia</a></li>
            <li><a href="#/action-3" className="navbar-dropdown-item">Wyloguj</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
