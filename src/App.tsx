import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';

// --- Definición de tipos para los botones ---
interface NavButton {
  id: string;
  path: string;
  imageName: string; // El nombre del archivo en la carpeta public
  alt: string;
}

// --- Configuración de los botones ---
const buttons: NavButton[] = [
  { id: '1', path: '/apps-juegos', imageName: 'btn-apps.png', alt: 'Apps y Juegos' },
  { id: '2', path: '/youtube',     imageName: 'btn-youtube.png', alt: 'YouTube' },
  { id: '3', path: '/mods',        imageName: 'btn-mods.png',    alt: 'Mods' },
  { id: '4', path: '/rewind',      imageName: 'btn-rewind.png',  alt: 'Rewind' },
  { id: '5', path: '/contratame',  imageName: 'btn-hire.png',    alt: 'Contratame' },
  { id: '6', path: '/mas',         imageName: 'btn-more.png',    alt: 'Más' },
];

// --- Componentes Placeholder (Páginas vacías para que no de error 404) ---
const Home = () => (
  <div className="home-container">
    <div className="grid-container">
      {buttons.map((btn) => (
        <Link key={btn.id} to={btn.path} className="nav-button">
          {/* La imagen llena el botón manteniendo el aspect ratio */}
          <img 
            src={`/images/${btn.imageName}`} 
            alt={btn.alt} 
            className="button-image" 
          />
        </Link>
      ))}
    </div>
  </div>
);

// Puedes personalizar estas páginas después
const AppsPage = () => <div className="page-content"><h1>Apps y Juegos</h1></div>;
const YoutubePage = () => <div className="page-content"><h1>Canal de YouTube</h1></div>;
const ModsPage = () => <div className="page-content"><h1>Mods</h1></div>;
const RewindPage = () => <div className="page-content"><h1>Rewind</h1></div>;
const HirePage = () => <div className="page-content"><h1>Contratame</h1></div>;
const MorePage = () => <div className="page-content"><h1>Más Contenido</h1></div>;

function App() {
  return (
    <BrowserRouter>
      {/* Header Fijo */}
      <header className="main-header">
        <Link to="/" className="logo-link">
          {/* Asegúrate de tener logo.png en la carpeta public */}
          <img src="/logo.png" alt="Logo Fiter" className="header-logo" />
        </Link>
      </header>

      {/* Rutas */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/apps-juegos" element={<AppsPage />} />
        <Route path="/youtube" element={<YoutubePage />} />
        <Route path="/mods" element={<ModsPage />} />
        <Route path="/rewind" element={<RewindPage />} />
        <Route path="/contratame" element={<HirePage />} />
        <Route path="/mas" element={<MorePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;