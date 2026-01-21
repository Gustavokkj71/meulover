import React from "react";
import {
  FaCalculator,
  FaChartLine,
  FaDatabase,
  FaFileAlt,
  FaExcelAlt,
  FaPython,
} from "react-icons/fa";
import "./Skills.css";

function Skills({ isDarkMode }) {
  const skillCategories = [
    {
      title: "Contabilidade",
      icon: <FaCalculator />,
      skills: [
        "Contabilidade Geral",
        "Auditoria",
        "Custos",
        "Análise de Balanços",
      ],
    },
    {
      title: "Análise Financeira",
      icon: <FaChartLine />,
      skills: [
        "Análise de Índices",
        "Fluxo de Caixa",
        "Planejamento Financeiro",
        "Avaliação de Empresas",
      ],
    },
    {
      title: "Ferramentas & Tecnologia",
      icon: <FaDatabase />,
      skills: ["Excel Avançado", "Google Sheets", "Power BI", "SQL Básico"],
    },
    {
      title: "Comunicação",
      icon: <FaFileAlt />,
      skills: [
        "Relatórios Profissionais",
        "Apresentações",
        "Análise de Dados",
        "Consultoria",
      ],
    },
  ];

  return (
    <section id="skills" className={`skills ${isDarkMode ? "dark" : "light"}`}>
      <div className="skills-container">
        <div className="section-header">
          <h2 className="section-title">Habilidades</h2>
          <p className="section-subtitle">
            Competências e ferramentas que domino
          </p>
        </div>

        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="skill-category fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="skill-icon">{category.icon}</div>
              <h3>{category.title}</h3>
              <ul className="skill-list">
                {category.skills.map((skill, idx) => (
                  <li key={idx}>{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="proficiency-section">
          <h3 className="proficiency-title">Proficiência em Ferramentas</h3>
          <div className="proficiency-list">
            {[
              { name: "Excel", level: 95 },
              { name: "Power BI", level: 85 },
              { name: "SQL", level: 75 },
              { name: "Python", level: 70 },
              { name: "Google Sheets", level: 90 },
              { name: "Contabilidade", level: 85 },
            ].map((item, index) => (
              <div key={index} className="proficiency-item">
                <div className="proficiency-header">
                  <span className="proficiency-name">{item.name}</span>
                  <span className="proficiency-percentage">{item.level}%</span>
                </div>
                <div className="proficiency-bar">
                  <div
                    className="proficiency-fill"
                    style={{ width: `${item.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
