import React from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import "./Projects.css";

function Projects({ isDarkMode }) {
  const projects = [
    {
      title: "Conformidade IFRS - Multinacional",
      description:
        "Implementação completa de IFRS para empresa multinacional. Adequação de políticas contábeis, reconciliação de saldos e treinamento de equipe.",
      tags: ["IFRS", "Contabilidade", "Conformidade"],
      link: "#",
      github: "#",
    },
    {
      title: "Dashboard Financeiro - Power BI",
      description:
        "Desenvolvimento de dashboard executivo com indicadores de performance, análise de variações e projeções. Integrado com sistemas ERP.",
      tags: ["Power BI", "SQL", "Análise Financeira"],
      link: "#",
      github: "#",
    },
    {
      title: "Auditoria Interna - Processos Críticos",
      description:
        "Realização de auditoria interna abrangente com foco em controles de processos críticos, compliance e eficiência operacional.",
      tags: ["Auditoria", "Compliance", "SOX"],
      link: "#",
      github: "#",
    },
    {
      title: "Otimização de Processos Contábeis",
      description:
        "Mapeamento e otimização de processos contábeis, redução de manual 60%, implementação de RPA e workflow automático.",
      tags: ["Processos", "RPA", "Eficiência"],
      link: "#",
      github: "#",
    },
    {
      title: "Análise de Feasibilidade Financeira",
      description:
        "Análise detalhada de viabilidade financeira para investimento em nova unidade. Projeções, VPL e análise de sensibilidade.",
      tags: ["Valuation", "Excel", "Modelagem"],
      link: "#",
      github: "#",
    },
    {
      title: "Planejamento Tributário Estratégico",
      description:
        "Estruturação de planejamento tributário estratégico resultando em economia de 15% em carga tributária anual.",
      tags: ["Tributária", "Planejamento", "Estratégia"],
      link: "#",
      github: "#",
    },
  ];

  return (
    <section
      id="projects"
      className={`projects ${isDarkMode ? "dark" : "light"}`}
    >
      <div className="projects-container">
        <div className="section-header">
          <h2 className="section-title">Projetos</h2>
          <p className="section-subtitle">
            Trabalhos desenvolvidos e experiências práticas
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div
              key={index}
              className="project-card fade-in"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="project-header">
                <h3>{project.title}</h3>
                <div className="project-links">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Visualizar"
                  >
                    <FaExternalLinkAlt />
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="GitHub"
                  >
                    <FaGithub />
                  </a>
                </div>
              </div>

              <p className="project-description">{project.description}</p>

              <div className="project-tags">
                {project.tags.map((tag, idx) => (
                  <span key={idx} className="tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
