import React from "react";
import "./About.css";

function About({ isDarkMode }) {
  return (
    <section id="about" className={`about ${isDarkMode ? "dark" : "light"}`}>
      <div className="about-container">
        <div className="section-header">
          <h2 className="section-title">Sobre Mim</h2>
          <p className="section-subtitle">Conhecendo minha história</p>
        </div>

        <div className="about-content">
          <div className="about-text slide-in-left">
            <h3>Quem é Rayanny?</h3>
            <p>
              Sou analista contábil e financeira com mais de 3 anos de
              experiência em empresas de médio e grande porte. Formada em
              Contabilidade, combino conhecimento técnico sólido com prática
              profissional em áreas de contabilidade gerencial, auditoria e
              consultoria.
            </p>

            <h3>Minha Experiência</h3>
            <p>
              Possuo experiência em contabilidade geral, análise de
              demonstrações financeiras, implementação de ERP, conformidade
              fiscal e auditoria interna. Trabalhei com PMEs e multinacionais,
              desenvolvendo soluções de análise financeira e otimização de
              processos que geraram economia significativa.
            </p>

            <h3>Minha Missão</h3>
            <p>
              Agregar valor às organizações através de análises financeiras
              precisas, relatórios estratégicos e soluções de conformidade.
              Acredito que a contabilidade é ferramenta de inteligência de
              negócio e contribuo para decisões mais assertivas e sustentáveis.
            </p>
          </div>

          <div className="about-stats slide-in-right">
            <div className="stat-card">
              <h4 className="stat-number">+3</h4>
              <p className="stat-label">Anos Experiência</p>
            </div>
            <div className="stat-card">
              <h4 className="stat-number">50+</h4>
              <p className="stat-label">Projetos Concluídos</p>
            </div>
            <div className="stat-card">
              <h4 className="stat-number">15+</h4>
              <p className="stat-label">Empresas Atendidas</p>
            </div>
            <div className="stat-card">
              <h4 className="stat-number">Expert</h4>
              <p className="stat-label">Contabilidade</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
