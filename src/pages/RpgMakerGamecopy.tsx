import '../App.css'; // O un archivo CSS específico si prefieres

const RpgMakerGame = () => {
  return (
    <div className="page-container" style={{ textAlign: 'center', paddingTop: '80px', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h1 style={{ color: 'white', marginBottom: '20px' }}>Y en el entretiempo</h1>

      {/* Contenedor del juego para que el iframe se vea bien */}
      <div style={{
        width: '100%',
        maxWidth: '816px', // Tamaño típico de RPG Maker MV/MZ
        aspectRatio: '816 / 624', // Mantener proporción
        backgroundColor: '#000',
        borderRadius: '8px',
        overflow: 'hidden',
        boxShadow: '0 4px 15px rgba(0,0,0,0.5)',
        margin: '0 auto'
      }}>
        <iframe
          src="/YEnElDescuento/index.html"
          title="Y en el entretiempo"
          width="100%"
          height="100%"
          style={{ border: 'none', display: 'block' }}
          allowFullScreen
        ></iframe>
      </div>

      <p style={{ color: '#ccc', marginTop: '20px', fontSize: '0.9rem' }}>
        Nota: Si el juego no carga, asegúrate de haber subido los archivos del juego a la carpeta <code>public/rpgmakergame</code>.
      </p>
    </div>
  );
};

export default RpgMakerGame;
