import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import './App.css';
import AppsJuegos from './pages/AppsJuegos';
import ProjectDetail from './pages/ProjectDetail';

// --- COMPONENTE DEL HEADER INTELIGENTE ---
// Lo creamos aquí mismo para que sea fácil de editar
const FiterHeader = () => {
  const location = useLocation(); // Hook para saber dónde estamos
  const isHome = location.pathname === '/'; // ¿Estamos en el inicio?

  return (
    <header className="fiter-header-wrapper">
      {/* 1. LOGO (Siempre visible, lleva al Home) */}
      <Link to="/" className="logo-link">
        <img src="/logo.png" alt="Logo Fiter" className="fiter-header-logo-img" />
      </Link>

      {/* 2. BOTÓN ATRÁS (Solo visible si NO estamos en Home) */}
      {!isHome && (
        <Link to="/" className="fiter-header-back-button">
          {/* Pone tu foto en public/images/btn-header-back.png */}
          <img 
            src="/images/botonVolver.png" 
            alt="Volver" 
            className="fiter-header-btn-img"
            onError={(e) => {
                // Si no hay foto, muestra un botón gris temporal
                e.currentTarget.style.display = 'none';
                e.currentTarget.parentElement!.style.background = '#444';
                e.currentTarget.parentElement!.innerText = 'Volver al Inicio';
                e.currentTarget.parentElement!.style.color = 'white';
                e.currentTarget.parentElement!.style.display = 'flex';
                e.currentTarget.parentElement!.style.alignItems = 'center';
                e.currentTarget.parentElement!.style.justifyContent = 'center';
            }}
          />
        </Link>
      )}
    </header>
  );
};

// --- Configuración de botones del Home ---
interface NavButton { id: string; path: string; imageName: string; alt: string; isExternal?: boolean; }

const buttons: NavButton[] = [
  { id: '1', path: '/apps-juegos', imageName: 'btn-apps.png', alt: 'Apps y Juegos' },
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
const RewindPage = () => <div className="page-content"><h1>Rewind</h1></div>;
const HirePage = () => <div className="page-content"><h1>Contratame</h1></div>;

// --- APP PRINCIPAL ---
function App() {
  return (
    <BrowserRouter>
      {/* Invocamos nuestro Header Inteligente DENTRO del Router */}
      <FiterHeader />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/apps-juegos" element={<AppsJuegos />} />
        <Route path="/project/:id" element={<ProjectDetail />} />
        <Route path="/mods" element={<ModsPage />} />
        <Route path="/rewind" element={<RewindPage />} />
        <Route path="/contratame" element={<HirePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;