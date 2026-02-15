import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';

// --- Definición de tipos para los botones ---
interface NavButton {
  id: string;
  path: string;
  imageName: string; 
  alt: string;
  isExternal?: boolean; // Nueva propiedad opcional para saber si es un link externo
}

// --- Configuración de los botones ---
const buttons: NavButton[] = [
  { 
    id: '1', 
    path: '/apps-juegos', 
    imageName: 'btn-apps.png', 
    alt: 'Apps y Juegos' 
  },
  { 
    id: '2', 
    path: 'https://www.youtube.com/@josephfiter5187', // <--- CAMBIA ESTO
    imageName: 'btn-youtube.png', 
    alt: 'YouTube',
    isExternal: true // Marcamos que este sale de la página
  },
  { 
    id: '3', 
    path: '/mods', 
    imageName: 'btn-mods.png', 
    alt: 'Mods' 
  },
  { 
    id: '4', 
    path: '/rewind', 
    imageName: 'btn-rewind.png', 
    alt: 'Rewind' 
  },
  { 
    id: '5', 
    path: '/contratame', 
    imageName: 'btn-hire.png', 
    alt: 'Contratame' 
  },
  { 
    id: '6', 
    path: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ&list=RDdQw4w9WgXcQ&start_radio=1', // <--- CAMBIA ESTO
    imageName: 'btn-more.png', 
    alt: 'Más',
    isExternal: true // Marcamos que este sale de la página
  },
];

// --- Componentes Placeholder ---
const Home = () => (
  <div className="home-container">
    <div className="grid-container">
      {buttons.map((btn) => {
        // Lógica: Si es externo usamos <a>, si es interno usamos <Link>
        if (btn.isExternal) {
          return (
            <a 
              key={btn.id} 
              href={btn.path} 
              className="nav-button"
              target="_blank" 
              rel="noopener noreferrer" // Seguridad y performance
            >
              <img 
                src={`/images/${btn.imageName}`} 
                alt={btn.alt} 
                className="button-image" 
              />
            </a>
          );
        } else {
          return (
            <Link key={btn.id} to={btn.path} className="nav-button">
              <img 
                src={`/images/${btn.imageName}`} 
                alt={btn.alt} 
                className="button-image" 
              />
            </Link>
          );
        }
      })}
    </div>
  </div>
);

// Páginas internas
const AppsPage = () => <div className="page-content"><h1>Apps y Juegos</h1></div>;
const ModsPage = () => <div className="page-content"><h1>Mods</h1></div>;
const RewindPage = () => <div className="page-content"><h1>Rewind</h1></div>;
const HirePage = () => <div className="page-content"><h1>Contratame</h1></div>;
// Eliminé YoutubePage y MorePage porque ahora son links externos

function App() {
  return (
    <BrowserRouter>
      {/* Header Fijo */}
      <header className="main-header">
        <Link to="/" className="logo-link">
          <img src="/logo.png" alt="Logo Fiter" className="header-logo" />
        </Link>
      </header>

      {/* Rutas */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/apps-juegos" element={<AppsPage />} />
        <Route path="/mods" element={<ModsPage />} />
        <Route path="/rewind" element={<RewindPage />} />
        <Route path="/contratame" element={<HirePage />} />
        {/* Ya no necesitamos rutas para Youtube ni Más */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;