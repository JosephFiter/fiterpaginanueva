import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const HirePage = () => {
  const [copied, setCopied] = useState(false);
  
  // --- CAMBIA ESTO POR TU EMAIL REAL ---
  const CONTACT_EMAIL = "roguenine6@gmail.com"; 

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(CONTACT_EMAIL);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // Resetea el mensaje a los 2 seg
  };

  return (
    <div className="fiter-hire-container">
      
      {/* --- HERO SECTION --- */}
      <div className="fiter-hire-header">
        <h1 className="fiter-hire-title">Hagamos realidad tu idea.</h1>
        <p className="fiter-hire-subtitle">
          Desarrollo de software a medida con enfoque en calidad, rendimiento y experiencia de usuario.
        </p>
      </div>

      {/* --- SERVICIOS GRID --- */}
      <div className="fiter-services-grid">
        
        {/* Card 1: Web */}
        <div className="fiter-service-card">
          <div className="service-icon">💻</div>
          <h3>Desarrollo Web</h3>
          <p>
            Desde Landing Pages de alto impacto hasta aplicaciones web complejas. 
            Soluciones modernas.
          </p>
        </div>

        {/* Card 2: Videojuegos */}
        <div className="fiter-service-card">
          <div className="service-icon">🎮</div>
          <h3>Videojuegos</h3>
          <p>
            Diseño y programación de mecánicas de juego, prototipado rápido y 
            desarrollo de experiencias interactivas en Unity.
          </p>
        </div>

        {/* Card 3: Apps Android */}
        <div className="fiter-service-card">
          <div className="service-icon">📱</div>
          <h3>Apps Android</h3>
          <p>
            Aplicaciones nativas o híbridas (React Native) para el ecosistema Android. 
            Interfaces intuitivas y funcionalidad robusta.
          </p>
        </div>
      </div>

      {/* --- PORTFOLIO LINK (Lo que pediste) --- */}
      <div className="fiter-portfolio-cta">
        <p>¿Quieres ver lo que soy capaz de hacer?</p>
        <Link to="/project" className="fiter-cta-button">
          Ver Mis Proyectos Anteriores →
        </Link>
      </div>

      {/* --- CONTACTO --- */}
      <div className="fiter-contact-section">
        <h2>Contáctame</h2>
        <p>Estoy disponible para proyectos freelance y colaboraciones.</p>
        
        <div className="email-box">
          <a href={`mailto:${CONTACT_EMAIL}`} className="email-link">
            {CONTACT_EMAIL}
          </a>
          <button onClick={handleCopyEmail} className="copy-btn" title="Copiar al portapapeles">
            {copied ? "¡Copiado! ✅" : "Copiar 📋"}
          </button>
        </div>
      </div>

    </div>
  );
};

export default HirePage;