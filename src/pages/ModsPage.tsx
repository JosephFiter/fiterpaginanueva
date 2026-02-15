import { Link } from 'react-router-dom';
import { modsData } from '../data/mods';
import '../App.css';

const ModsPage = () => {
  return (
    <div className="fiter-mods-main-container">
      <div className="fiter-mods-grid">
        
        {modsData.map((mod) => (
          <Link key={mod.id} to={`/mod/${mod.id}`} className="fiter-mods-button">
            <img 
              src={`/images/${mod.imageButton}`} 
              alt={mod.name} 
              className="fiter-mods-btn-img"
              onError={(e) => {
                e.currentTarget.style.display = 'none'; 
                const parent = e.currentTarget.parentElement!;
                parent.style.backgroundColor = '#222';
                parent.style.color = 'white';
                parent.innerText = mod.name; // Si falla la imagen, muestra el nombre
                parent.style.display = 'flex';
                parent.style.alignItems = 'center';
                parent.style.justifyContent = 'center';
                parent.style.textAlign = 'center';
                parent.style.fontSize = '0.9rem';
              }} 
            />
          </Link>
        ))}

      </div>
      
      <Link to="/" className="fiter-mods-back-btn">
        ← Volver al Inicio
      </Link>
    </div>
  );
};

export default ModsPage;