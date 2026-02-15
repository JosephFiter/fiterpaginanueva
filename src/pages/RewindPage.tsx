import { useState } from 'react';
import CryptoJS from 'crypto-js';
import '../App.css'; 

const RewindPage = () => {
  const [password, setPassword] = useState('');
  const [secretContent, setSecretContent] = useState('');
  const [error, setError] = useState('');

  // ---------------------------------------------------------
  // PEGA AQUÍ EL CÓDIGO LARGO QUE COPIASTE EN EL PASO 1
  // (Asegúrate de que esté entre comillas)
  const ENCRYPTED_DATA = "U2FsdGVkX1+vCLFiiEfz4eT9DBZ+9tsIvp0iwQFeHwVw+62dazd2YpJCfdqwbPPuh+RbNRvYWE0Lni1uKArdQLOQ0Ax0XQfYmfSiZ7BjoFb/GEjt0VoL30wKdZu24nAYWpUC4WUWpFCrgJVUpwUQzQ=="; 
  // ---------------------------------------------------------

  const handleUnlock = () => {
    try {
      // Intentamos desencriptar
      const bytes = CryptoJS.AES.decrypt(ENCRYPTED_DATA, password);
      const originalText = bytes.toString(CryptoJS.enc.Utf8);

      if (originalText) {
        setSecretContent(originalText); // Si funcionó, guardamos el link
        setError('');
      } else {
        setError('Contraseña incorrecta.'); // Si sale vacío, la pass estaba mal
        setSecretContent('');
      }
    } catch (e) {
      setError('Contraseña incorrecta.');
      setSecretContent('');
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') handleUnlock();
  };

  // --- VISTA DESBLOQUEADA ---
  if (secretContent) {
    return (
      <div className="fiter-rewind-container unlocked">
        <div className="fiter-rewind-content-box">
          <h1>🔓 Archivo Desbloqueado</h1>
          <p>El enlace secreto es:</p>
          
          <div className="fiter-rewind-secret-link-container">
            <a href={secretContent} target="_blank" rel="noopener noreferrer" style={{ color: '#00ff88', textDecoration: 'none', fontSize: '1.2rem' }}>
              {secretContent}
            </a>
          </div>

          <button onClick={() => { setSecretContent(''); setPassword(''); }} className="fiter-rewind-btn secondary">
            Bloquear de nuevo
          </button>
        </div>
      </div>
    );
  }

  // --- VISTA BLOQUEADA ---
  return (
    <div className="fiter-rewind-container locked">
      <div className="fiter-rewind-login-box">
        <div className="fiter-rewind-lock-icon">🔒</div>
        <h3 className="fiter-rewind-subtitle">Top Secret</h3>
        
        <input 
          type="password" 
          className="fiter-rewind-input"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          onKeyDown={handleKeyPress}
          placeholder="Ingresa la llave..."
        />
        
        <button onClick={handleUnlock} className="fiter-rewind-btn">
          Desencriptar
        </button>

        {error && <div className="fiter-rewind-error">{error}</div>}
      </div>
    </div>
  );
};

export default RewindPage;