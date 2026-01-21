import React, { useState } from "react";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaLinkedin,
  FaGithub,
  FaTwitter,
} from "react-icons/fa";
import "./Contact.css";

function Contact({ isDarkMode }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você pode adicionar lógica para enviar o email
    console.log("Formulário enviado:", formData);
    setSubmitted(true);
    setFormData({ name: "", email: "", subject: "", message: "" });
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section
      id="contact"
      className={`contact ${isDarkMode ? "dark" : "light"}`}
    >
      <div className="contact-container">
        <div className="section-header">
          <h2 className="section-title">Entre em Contato</h2>
          <p className="section-subtitle">
            Vamos conversar sobre oportunidades!
          </p>
        </div>

        <div className="contact-content">
          <div className="contact-info slide-in-left">
            <h3>Informações de Contato</h3>

            <div className="info-item">
              <FaEnvelope className="info-icon" />
              <div>
                <p className="info-label">Email</p>
                <a href="mailto:rayanewalker768@gmail.com">
                  rayanewalker768@gmail.com
                </a>
              </div>
            </div>

            <div className="info-item">
              <FaPhone className="info-icon" />
              <div>
                <p className="info-label">Telefone</p>
                <a href="wa.me/+5584992315088">(84) 99231-5088</a>
              </div>
            </div>

            <div className="info-item">
              <FaMapMarkerAlt className="info-icon" />
              <div>
                <p className="info-label">Localização</p>
                <p>Palhoça, RS - Brasil</p>
              </div>
            </div>

            <div className="social-links">
              <h4>Conecte-se comigo</h4>
              <div className="socials">
                <button
                  type="button"
                  title="LinkedIn"
                  className="social-link"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin />
                </button>
                <button
                  type="button"
                  title="GitHub"
                  className="social-link"
                  aria-label="GitHub"
                >
                  <FaGithub />
                </button>
                <button
                  type="button"
                  title="Twitter"
                  className="social-link"
                  aria-label="Twitter"
                >
                  <FaTwitter />
                </button>
              </div>
            </div>
          </div>

          <form className="contact-form slide-in-right" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Nome</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Seu nome"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Seu email"
              />
            </div>

            <div className="form-group">
              <label htmlFor="subject">Assunto</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                placeholder="Assunto da mensagem"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Mensagem</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Sua mensagem..."
                rows="5"
              ></textarea>
            </div>

            <button type="submit" className="submit-btn">
              Enviar Mensagem
            </button>

            {submitted && (
              <div className="success-message">
                ✓ Mensagem enviada com sucesso!
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
