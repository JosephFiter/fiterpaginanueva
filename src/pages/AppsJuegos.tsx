import { Link } from 'react-router-dom';
import { projectsData } from '../data/projects'; // Importamos la "base de datos"

const AppsPage = () => {
  return (
    <div className="home-container">
      <div className="grid-container">
        
        {/* Mapeamos los datos reales */}
        {projectsData.map((project) => (
          <Link key={project.id} to={`/project/${project.id}`} className="nav-button2">
            <img 
              src={`/images/${project.imageButton}`} 
              alt={project.title} 
              className="button-image2"
              onError={(e) => {
                e.currentTarget.style.display = 'none'; 
                e.currentTarget.parentElement!.style.backgroundColor = '#444';
              }} 
            />
          </Link>
        ))}

      </div>
      
      
    </div>
  );
};

export default AppsPage;