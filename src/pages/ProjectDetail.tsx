import { useParams, Navigate } from 'react-router-dom';
import { projectsData } from '../data/projects';
import '../App.css'; 

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projectsData.find((p) => p.id === id);

  // Si no existe el proyecto, volver al menú
  if (!project) {
    return <Navigate to="/apps-juegos" replace />;
  }

  return (
    <div className="fiter-detail-main-container">
      
      {/* --- 1. FONDO FIJO (Background) --- */}
      {/* Se queda quieto mientras bajas (position: fixed) */}
      <div 
        className="fiter-detail-background"
        style={{ backgroundImage: `url(/images/${project.imageFondos})` }}
      />

      {/* --- 2. CONTENIDO SCROLLEABLE --- */}
      <div className="fiter-detail-content-wrapper">
        
        {/* LOGO GIGANTE */}
        {/* Lo mostramos grande arriba de todo */}
        <img 
          src={`/images/${project.logo}`} 
          alt={`${project.title} Logo`}
          className="fiter-detail-hero-logo"
        />

        {/* TARJETA DE INFORMACIÓN (Glassmorphism) */}
        <div className="fiter-detail-info-card">
          <h1 className="fiter-detail-title">{project.title}</h1>
          
          <p className="fiter-detail-description">
            {project.shortDescription}
          </p>

          {/* BOTONES DE DESCARGA */}
          <div className="fiter-detail-actions">
            {project.links?.windows && (
              <a href={project.links.windows} target="_blank" rel="noopener noreferrer" className="download-btn windows">
                <span style={{ fontSize: '1.5rem', marginRight: '10px' }}>💻</span> 
                Descargar para PC
              </a>
            )}

            {project.links?.android && (
              <a href={project.links.android} target="_blank" rel="noopener noreferrer" className="download-btn android">
                <span style={{ fontSize: '1.5rem', marginRight: '10px' }}>🤖</span> 
                Descargar APK
              </a>
            )}

            {project.links?.web && (
              <a href={project.links.web} target="_blank" rel="noopener noreferrer" className="download-btn web">
                <span style={{ fontSize: '1.5rem', marginRight: '10px' }}>🌐</span> 
                Jugar Online
              </a>
            )}
          </div>
        </div>

        {/* GALERÍA */}
        {project.gallery && project.gallery.length > 0 && (
          <div className="fiter-detail-gallery-section">
            <h2 style={{ textAlign: 'center', marginBottom: '30px', fontSize: '2rem', textShadow: '0 2px 10px black' }}>Galería</h2>
            <div className="fiter-detail-gallery-grid">
              {project.gallery.map((img, index) => (
                <div key={index} className="fiter-detail-gallery-item">
                  <img 
                    src={`/images/${img}`} 
                    alt={`Screenshot ${index + 1}`} 
                    className="fiter-detail-gallery-img"
                  />
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

export default ProjectDetail;