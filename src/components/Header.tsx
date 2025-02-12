import React from 'react';
import { useTheme } from '../contexts/ThemeContext.tsx';

const Header: React.FC = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <header className="bg-primary text-white p-3">
      <div className="d-flex justify-content-between align-items-center">
        <h1 className="h4 mb-0">Blog Dashboard</h1>
        <button
          className={`btn ${isDarkMode ? 'btn-light' : 'btn-dark'}`}
          onClick={toggleTheme}
        >
          {isDarkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
      </div>
    </header>
  );
};

export default Header;