import { useEffect, useState } from 'react';

import Home from './pages/Home';

import './styles/app.css';

function App() {

  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {

    if (darkMode) {
      document.body.style.backgroundColor = '#121212';
    } else {
      document.body.style.backgroundColor = '#f5f5f5';
    }

  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (

    <div className={darkMode ? 'dark' : 'light'}>

      <button
        className="dark-mode-btn"
        onClick={toggleDarkMode}
      >
        {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
      </button>

      <Home darkMode={darkMode} />

    </div>
  );
}

export default App;