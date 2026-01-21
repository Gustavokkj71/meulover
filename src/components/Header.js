import React from "react";
import { FaSun, FaMoon } from "react-icons/fa";
import "./Header.css";

function Header({ isDarkMode, toggleTheme }) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className={`header ${isDarkMode ? "dark" : "light"}`}>
      <div className="header-container">
        <div className="logo">
          <span className="logo-letter">R</span>
          <span className="logo-text">ayanny</span>
        </div>

        <nav className={`nav ${isMenuOpen ? "open" : ""}`}>
          <a href="#hero" className="nav-link">
            Home
          </a>
          <a href="#about" className="nav-link">
            Sobre
          </a>
          <a href="#skills" className="nav-link">
            Habilidades
          </a>
          <a href="#projects" className="nav-link">
            Projetos
          </a>
          <a href="#contact" className="nav-link">
            Contato
          </a>
        </nav>

        <div className="header-controls">
          <button
            className="theme-toggle"
            onClick={toggleTheme}
            title="Alternar tema"
          >
            {isDarkMode ? <FaSun /> : <FaMoon />}
          </button>

          <button
            className="mobile-menu-btn"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            title="Menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
