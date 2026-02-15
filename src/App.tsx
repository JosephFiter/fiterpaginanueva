import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import AppsJuegos from './pages/AppsJuegos';
import ProjectDetail from './pages/ProjectDetail'; // <--- IMPORTANTE: Faltaba esto

// --- Definición de tipos para los botones ---
interface NavButton {
  id: string;
  path: string;
  imageName: string; 
  alt: string;
  isExternal?: boolean;
}

// --- Configuración de los botones ---
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

const ModsPage = () => <div className="page-content"><h1>Mods</h1></div>;
const RewindPage = () => <div className="page-content"><h1>Rewind</h1></div>;
const HirePage = () => <div className="page-content"><h1>Contratame</h1></div>;

function App() {
  return (
    <BrowserRouter>
      <header className="main-header">
        <Link to="/" className="logo-link">
          <img src="/logo.png" alt="Logo Fiter" className="header-logo" />
        </Link>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        
        {/* Ruta del menú de juegos */}
        <Route path="/apps-juegos" element={<AppsJuegos />} />

        {/* --- RUTA QUE FALTABA --- */}
        {/* Sin esto, el clic en el juego no lleva a ningún lado o da error */}
        <Route path="/project/:id" element={<ProjectDetail />} />
        
        <Route path="/mods" element={<ModsPage />} />
        <Route path="/rewind" element={<RewindPage />} />
        <Route path="/contratame" element={<HirePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;