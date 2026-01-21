import React from "react";
import "./Footer.css";

function Footer({ isDarkMode }) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={`footer ${isDarkMode ? "dark" : "light"}`}>
      <div className="footer-content">
        <div className="footer-section">
          <h4>Rayanny</h4>
          <p>Estudante de Contabilidade com paixão por análise financeira</p>
        </div>

        <div className="footer-section">
          <h4>Links Rápidos</h4>
          <ul>
            <li>
              <a href="#hero">Home</a>
            </li>
            <li>
              <a href="#about">Sobre</a>
            </li>
            <li>
              <a href="#skills">Habilidades</a>
            </li>
            <li>
              <a href="#projects">Projetos</a>
            </li>
            <li>
              <a href="#contact">Contato</a>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Informações</h4>
          <ul>
            <li>
              <a href="mailto:rayanny@example.com">Email</a>
            </li>
            <li>
              <a href="tel:+5511999999999">Telefone</a>
            </li>
            <li>
              <a href="javascript:void(0)" role="button">Política de Privacidade</a>
            </li>
            <li>
              <a href="javascript:void(0)" role="button">Termos de Uso</a>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Redes Sociais</h4>
          <ul>
            <li>
              <a href="javascript:void(0)" target="_blank" rel="noopener noreferrer" role="button">
                LinkedIn
              </a>
            </li>
            <li>
              <a href="javascript:void(0)" target="_blank" rel="noopener noreferrer" role="button">
                GitHub
              </a>
            </li>
            <li>
              <a href="javascript:void(0)" target="_blank" rel="noopener noreferrer" role="button">
                Twitter
              </a>
            </li>
            <li>
              <a href="javascript:void(0)" target="_blank" rel="noopener noreferrer" role="button">
                Instagram
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {currentYear} Rayanny. Todos os direitos reservados.</p>
        <p>
          Desenvolvido com <span className="heart">❤️</span> em São Paulo
        </p>
      </div>
    </footer>
  );
}

export default Footer;
