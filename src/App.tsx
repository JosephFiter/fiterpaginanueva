import { BrowserRouter, Routes, Route, Link, useLocation, useNavigate } from 'react-router-dom';
import './App.css';

// --- IMPORTS DE TUS PÁGINAS ---
import AppsJuegos from './pages/AppsJuegos';
import ProjectDetail from './pages/ProjectDetail';
import RewindPage from './pages/RewindPage';
import HirePage from './pages/HirePage';
import ModsPage from './pages/ModsPage';
import ModDetail from './pages/ModDetail';

// --- COMPONENTE DEL HEADER INTELIGENTE ---
const FiterHeader = () => {
  const location = useLocation(); 
  const navigate = useNavigate(); 
  const isHome = location.pathname === '/'; 

  return (
    <header className="fiter-header-wrapper">
      {/* 1. LOGO (Siempre visible, lleva al Home) */}
      <Link to="/" className="logo-link">
        <img src="/logo.png" alt="Logo Fiter" className="fiter-header-logo-img" />
      </Link>

      {/* 2. BOTÓN ATRÁS (Solo visible si NO estamos en Home) */}
      {!isHome && (
        <button 
          onClick={() => navigate(-1)} 
          className="fiter-header-back-button"
          style={{ background: 'transparent', border: 'none', padding: 0, cursor: 'pointer' }}
        >
          <img 
            src="/images/botonVolver.png" 
            alt="Volver" 
            className="fiter-header-btn-img"
            onError={(e) => {
                e.currentTarget.style.display = 'none';
                const parent = e.currentTarget.parentElement!;
                parent.style.background = '#444';
                parent.innerText = 'Volver'; 
                parent.style.color = 'white';
                parent.style.display = 'flex';
                parent.style.alignItems = 'center';
                parent.style.justifyContent = 'center';
                parent.style.width = '230px'; 
                parent.style.height = '50px';
            }}
          />
        </button>
      )}
    </header>
  );
};

// --- CONFIGURACIÓN DE BOTONES DEL HOME ---
interface NavButton { id: string; path: string; imageName: string; alt: string; isExternal?: boolean; }

const buttons: NavButton[] = [
  { id: '1', path: '/apps-juegos', imageName: 'btn-apps.png', alt: 'Apps y Juegos' }, // Ruta corregida a /apps-juegos
  { id: '2', path: 'https://www.youtube.com/@josephfiter5187', imageName: 'btn-youtube.png', alt: 'YouTube', isExternal: true },
  { id: '3', path: '/mods', imageName: 'btn-mods.png', alt: 'Mods' },
  { id: '4', path: '/rewind', imageName: 'btn-rewind.png', alt: 'Rewind' },
  { id: '5', path: '/contratame', imageName: 'btn-hire.png', alt: 'Contratame' },
  { id: '6', path: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', imageName: 'btn-more.png', alt: 'Más', isExternal: true },
];

// --- COMPONENTE HOME ---
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

// --- APP PRINCIPAL ---
function App() {
  return (
    <BrowserRouter>
      {/* Header fijo */}
      <FiterHeader />

      {/* Rutas */}
      <Routes>
        {/* Home */}
        <Route path="/" element={<Home />} />

        {/* Sección Apps y Juegos */}
        <Route path="/apps-juegos" element={<AppsJuegos />} />
        <Route path="/project/:id" element={<ProjectDetail />} />

        {/* Sección Mods (Corregida) */}
        <Route path="/mods" element={<ModsPage />} />       {/* Menú de Mods */}
        <Route path="/mod/:id" element={<ModDetail />} />   {/* Detalle de un Mod */}

        {/* Otras Secciones */}
        <Route path="/rewind" element={<RewindPage />} />
        <Route path="/contratame" element={<HirePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;