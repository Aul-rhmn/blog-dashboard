import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Sidebar: React.FC = () => {
  const location = useLocation();

  return (
    <nav className="bg-light sidebar">
      <div className="position-sticky">
        <ul className="nav flex-column">
          <li className="nav-item">
            <Link
              to="/"
              className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
            >
              All Posts
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/add-new"
              className={`nav-link ${location.pathname === '/add-new' ? 'active' : ''}`}
            >
              Add New
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/preview"
              className={`nav-link ${location.pathname === '/preview' ? 'active' : ''}`}
            >
              Preview
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Sidebar;