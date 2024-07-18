import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const NAVLINKS = [
  { name: 'Inicio', path: '/', icon: 'home' },
  { name: 'Sobre mí', path: '/about', icon: 'person' },
  { name: 'Proyectos', path: '/projects', icon: 'work' },
  { name: 'Contáctame', path: '/contact', icon: 'mail' },
];

const Navegationbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className='p-4 w-full bg-gray-800'>
      <div className="max-w-7xl mx-auto flex justify-between items-center relative">
        {/* Logo */}
        <Link to="/" className="text-white text-2xl font-bold">
          Mi Portafolio
        </Link>

        {/* Icono de menú en dispositivos pequeños */}
        <div className="block lg:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none focus:bg-gray-400 px-3 py-2 rounded"
          >
            {isMenuOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Menú desplegable en dispositivos pequeños */}
        <div className={`lg:hidden absolute top-full left-0 w-full bg-gray-800 text-white ${isMenuOpen ? 'block' : 'hidden'}`}>
          <div className="p-4">
            {NAVLINKS.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`block py-2 px-4 text-center ${location.pathname === item.path ? 'bg-white text-black' : ''}`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Navegación en dispositivos grandes */}
        <ul className="hidden lg:flex lg:space-x-4">
          {NAVLINKS.map((item) => (
            <li key={item.name}>
              <Link
                to={item.path}
                className={`rounded-xl py-2 px-4 block ${location.pathname === item.path ? 'bg-white text-black' : 'text-white'}`}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navegationbar;
