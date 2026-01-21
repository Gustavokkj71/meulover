import React from "react";
import { FaArrowRight } from "react-icons/fa";
import "./Hero.css";

function Hero({ isDarkMode }) {
  return (
    <section id="hero" className={`hero ${isDarkMode ? "dark" : "light"}`}>
      <div className="hero-container">
        <div className="hero-content fade-in">
          <h1 className="hero-title">
            Olá! Eu sou <span className="gradient-text">Rayanny</span>
          </h1>
          <p className="hero-subtitle">
            Analista Contábil & Financeira | +3 Anos de Experiência
          </p>
          <p className="hero-description">
            Profissional especializada em contabilidade gerencial, análise
            financeira e otimização de processos. Com experiência comprovada em
            conformidade regulatória, auditoria interna e consultoria
            empresarial.
          </p>
          <div className="hero-buttons">
            <a href="#contact" className="btn btn-primary">
              Entre em Contato <FaArrowRight />
            </a>
            <a href="#projects" className="btn btn-secondary">
              Ver Projetos
            </a>
          </div>
        </div>
        <div className="hero-visual">
          <div className="profile-card float">
            <div className="profile-circle">
              <img
                src="/images/profile.jpg"
                alt="Rayanny"
                className="profile-image"
                onError={(e) => {
                  e.target.style.display = "none";
                  e.target.nextSibling.style.display = "flex";
                }}
              />
              <span className="icon">👩‍💼</span>
            </div>
            <div className="profile-info">
              <h3>Rayanny</h3>
              <p>Analista Contábil & Financeira</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
