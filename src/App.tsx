import { BrowserRouter, Routes, Route, Link, useLocation, useNavigate } from 'react-router-dom';
import './App.css';
import AppsJuegos from './pages/AppsJuegos';
import ProjectDetail from './pages/ProjectDetail';
import RewindPage from './pages/RewindPage';
import HirePage from './pages/HirePage';
// --- COMPONENTE DEL HEADER INTELIGENTE ---
const FiterHeader = () => {
  const location = useLocation(); // Hook para saber dónde estamos
  const navigate = useNavigate(); // Hook para navegar en el historial (Atrás)
  const isHome = location.pathname === '/'; // ¿Estamos en el inicio?

  return (
    <header className="fiter-header-wrapper">
      {/* 1. LOGO (Siempre visible, lleva al Home) */}
      <Link to="/" className="logo-link">
        <img src="/logo.png" alt="Logo Fiter" className="fiter-header-logo-img" />
      </Link>

      {/* 2. BOTÓN ATRÁS (Solo visible si NO estamos en Home) */}
      {!isHome && (
        <button 
          onClick={() => navigate(-1)} // <--- Acción mágica para volver atrás
          className="fiter-header-back-button"
          // Reseteo básico para que el botón se comporte como un div/link visualmente
          style={{ background: 'transparent', border: 'none', padding: 0, cursor: 'pointer' }}
        >
          <img 
            src="/images/botonVolver.png" 
            alt="Volver" 
            className="fiter-header-btn-img"
            onError={(e) => {
                // Si no hay foto, muestra un botón gris temporal
                e.currentTarget.style.display = 'none';
                const parent = e.currentTarget.parentElement!;
                parent.style.background = '#444';
                parent.innerText = 'Volver'; // Texto más corto para que entre
                parent.style.color = 'white';
                parent.style.display = 'flex';
                parent.style.alignItems = 'center';
                parent.style.justifyContent = 'center';
                // Forzamos dimensiones por si falla la imagen y el CSS no carga
                parent.style.width = '230px'; 
                parent.style.height = '50px';
            }}
          />
        </button>
      )}
    </header>
  );
};

// --- Configuración de botones del Home ---
interface NavButton { id: string; path: string; imageName: string; alt: string; isExternal?: boolean; }

const buttons: NavButton[] = [
  { id: '1', path: '/project', imageName: 'btn-apps.png', alt: 'Apps y Juegos' },
  { id: '2', path: 'https://www.youtube.com/@josephfiter5187', imageName: 'btn-youtube.png', alt: 'YouTube', isExternal: true },
  { id: '3', path: '/mods', imageName: 'btn-mods.png', alt: 'Mods' },
  { id: '4', path: '/rewind', imageName: 'btn-rewind.png', alt: 'Rewind' },
  { id: '5', path: '/contratame', imageName: 'btn-hire.png', alt: 'Contratame' },
  { id: '6', path: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', imageName: 'btn-more.png', alt: 'Más', isExternal: true },
];

// --- Componente Home ---
const Home = () => (
  <div className="home-container">
    <div className="grid-container">
      {buttons.map((btn) => {
        if (btn.isExternal) {
          return (
            <a key={btn.id} href={btn.path} className="nav-button" target="_blank" rel="noopener noreferrer">
              <img src={`/images/${btn.imageName}`} alt={btn.alt} className="button-image" />
            </a>
          );
        } else {
          return (
            <Link key={btn.id} to={btn.path} className="nav-button">
              <img src={`/images/${btn.imageName}`} alt={btn.alt} className="button-image" />
            </Link>
          );
        }
      })}
    </div>
  </div>
);

// Páginas Placeholder
const ModsPage = () => <div className="page-content"><h1>Mods</h1></div>;

// --- APP PRINCIPAL ---
function App() {
  return (
    <BrowserRouter>
      {/* Invocamos nuestro Header Inteligente DENTRO del Router */}
      <FiterHeader />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project" element={<AppsJuegos />} />
        <Route path="/project/:id" element={<ProjectDetail />} />
        <Route path="/mods" element={<ModsPage />} />
        <Route path="/rewind" element={<RewindPage />} />
        <Route path="/contratame" element={<HirePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;