import { useParams, Navigate } from 'react-router-dom';
import { modsData } from '../data/mods';
import '../App.css';

const ModDetail = () => {
  const { id } = useParams();
  const mod = modsData.find((m) => m.id === id);

  if (!mod) return <Navigate to="/mods" replace />;

  return (
    <div className="fiter-mod-detail-container">
      
      {/* Caja Principal */}
      <div className="fiter-mod-content-box">
        
        <h1 className="fiter-mod-title">{mod.name}</h1>

        {/* Sección de Instrucciones */}
        <div className="fiter-mod-instructions-box">
          <h3>📜 Instructivo de Instalación</h3>
          <pre className="fiter-mod-instructions-text">
            {mod.instructions}
          </pre>
        </div>

        {/* Botón de Descarga */}
        <a 
          href={mod.downloadLink} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="fiter-mod-download-btn"
        >
          ⬇️ DESCARGAR MOD
        </a>

        {/* Galería (Solo se muestra si existe) */}
        {mod.gallery && mod.gallery.length > 0 && (
          <div className="fiter-mod-gallery">
            <h3>Galería</h3>
            <div className="fiter-mod-gallery-grid">
              {mod.gallery.map((img, i) => (
                <img key={i} src={`/images/${img}`} alt={`Mod Preview ${i}`} className="fiter-mod-gallery-img" />
              ))}
            </div>
          </div>
        )}

        
      </div>
    </div>
  );
};

export default ModDetail;