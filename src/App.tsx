import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

// Componentes simples para probar
const Home = () => <h2>Bienvenido a Fiter</h2>;
const Juegos = () => <h2>Sección de Juegos 🎮</h2>;
const Apps = () => <h2>Sección de Aplicaciones 📱</h2>;

function App() {
  return (
    <BrowserRouter>
      <nav>
        {/* Usa <Link> en lugar de <a> para que no se recargue la página */}
        <Link style={{marginRight: '10px'}} to="/">Inicio</Link>
        <Link style={{marginRight: '10px'}} to="/juegos">Juegos</Link>
        <Link to="/apps">Apps</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/juegos" element={<Juegos />} />
        <Route path="/apps" element={<Apps />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;