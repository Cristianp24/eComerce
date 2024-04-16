import React, { useState } from 'react';
import './Navbar.css'; // Estilos CSS para la barra de navegación

function Navbar() {
  const [showMenu, setShowMenu] = useState(false); // Estado para controlar la visibilidad del menú

  // Función para alternar la visibilidad del menú
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div>
      <nav className="navbar">
        <div className="navbar-container">
          {/* Enlaces a la izquierda */}
          <div className="left-links">
            <a href="/home">Home</a>
            <a href="/login">Login</a>
            <a href="/">Landing!</a>
          </div>

          {/* Input de búsqueda y botón en el centro */}
          <div className="search-box">
            <input type="text" placeholder="Buscar" />
            <button><i className="fa fa-search"></i></button>
          </div>

          {/* Botón de hamburguesa */}
          <div className="hamburger-menu" onClick={toggleMenu}>
            <div className={showMenu ? "line line1 open" : "line line1"}></div>
            <div className={showMenu ? "line line2 open" : "line line2"}></div>
            <div className={showMenu ? "line line3 open" : "line line3"}></div>
          </div>
        </div>
      </nav>

      {/* Menú de hamburguesa */}
      {showMenu && (
        <div className="mobile-menu">
          <a href="/home">Home</a>
          <a href="/login">Login</a>
          <a href="/">Landing!</a>
        </div>
      )}
    </div>
  );
}

export default Navbar;
