import { Link, useParams, Navigate } from 'react-router-dom';
import { projectsData } from '../data/projects';
import '../App.css'; 

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projectsData.find((p) => p.id === id);

  // Si el proyecto no existe, vuelve al menú
  if (!project) {
    return <Navigate to="/apps-juegos" replace />;
  }

  return (
    <div className="project-detail-container" style={{ minHeight: '100vh', background: '#1a1a1a' }}>
      
      {/* --- HERO SECTION (Fondo + Logo) --- */}
      <div style={{ 
        position: 'relative',
        width: '100%', 
        height: '500px', // Altura del banner
        overflow: 'hidden',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        
        {/* Imagen de Fondo (Con efecto oscuro para que resalte el logo) */}
        <div style={{
          position: 'absolute',
          top: 0, left: 0, width: '100%', height: '100%',
          backgroundImage: `url(/images/${project.imageFondos})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'brightness(0.4) blur(2px)', // Oscurece y desenfoca un poco el fondo
          zIndex: 1
        }}></div>

        {/* Botón de Volver (Flotante arriba a la izquierda) */}
        <Link to="/apps-juegos" style={{
          position: 'absolute',
          top: '20px', left: '20px',
          zIndex: 10,
          color: 'white',
          textDecoration: 'none',
          background: 'rgba(0,0,0,0.5)',
          padding: '10px 20px',
          borderRadius: '30px',
          backdropFilter: 'blur(5px)',
          border: '1px solid rgba(255,255,255,0.2)'
        }}>
          ← Volver
        </Link>

        {/* LOGO (Centrado) */}
        <img 
          src={`/images/${project.logo}`} 
          alt={`${project.title} Logo`}
          style={{
            position: 'relative',
            zIndex: 2,
            maxWidth: '80%',
            maxHeight: '300px',
            objectFit: 'contain',
            filter: 'drop-shadow(0 10px 20px rgba(0,0,0,0.5))'
          }}
        />
      </div>

      {/* --- CONTENIDO PRINCIPAL --- */}
      <div className="content-wrapper" style={{ 
        maxWidth: '1000px', 
        margin: '-50px auto 0', // Sube un poco sobre el banner
        padding: '0 20px 50px',
        position: 'relative',
        zIndex: 5
      }}>
        
        {/* Tarjeta de Descripción */}
        <div style={{
          background: '#252525',
          borderRadius: '20px',
          padding: '40px',
          boxShadow: '0 20px 50px rgba(0,0,0,0.5)',
          textAlign: 'center'
        }}>
          <h1 style={{ marginBottom: '20px', fontSize: '2.5rem' }}>{project.title}</h1>
          
          <p style={{ 
            fontSize: '1.2rem', 
            lineHeight: '1.6', 
            color: '#ccc', 
            marginBottom: '40px',
            whiteSpace: 'pre-line' // Respeta los saltos de línea
          }}>
            {project.shortDescription}
          </p>

          {/* --- BOTONES DE DESCARGA --- */}
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px' }}>
            
            {/* Botón Windows */}
            {project.links?.windows && (
              <a href={project.links.windows} target="_blank" rel="noopener noreferrer" className="download-btn windows">
                <span style={{ fontSize: '1.5rem', marginRight: '10px' }}>💻</span> 
                Descargar para PC
              </a>
            )}

            {/* Botón Android */}
            {project.links?.android && (
              <a href={project.links.android} target="_blank" rel="noopener noreferrer" className="download-btn android">
                <span style={{ fontSize: '1.5rem', marginRight: '10px' }}>🤖</span> 
                Descargar APK
              </a>
            )}

            {/* Botón Web */}
            {project.links?.web && (
              <a href={project.links.web} target="_blank" rel="noopener noreferrer" className="download-btn web">
                <span style={{ fontSize: '1.5rem', marginRight: '10px' }}>🌐</span> 
                Jugar Online
              </a>
            )}
            
          </div>
        </div>

        {/* --- GALERÍA --- */}
        {project.gallery && project.gallery.length > 0 && (
          <div style={{ marginTop: '50px' }}>
            <h2 style={{ textAlign: 'center', marginBottom: '30px', fontSize: '2rem' }}>Galería</h2>
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
              gap: '20px' 
            }}>
              {project.gallery.map((img, index) => (
                <div key={index} style={{ 
                  borderRadius: '12px', 
                  overflow: 'hidden', 
                  boxShadow: '0 5px 15px rgba(0,0,0,0.3)',
                  height: '200px'
                }}>
                  <img 
                    src={`/images/${img}`} 
                    alt={`Screenshot ${index + 1}`} 
                    style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.3s' }}
                    onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                    onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
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