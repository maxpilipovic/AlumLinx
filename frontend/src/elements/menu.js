import React, { useState } from 'react';
import './menu.css'; 

export function Menu() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  return (
    <div className="menu-container">
      <nav className="menu-bar">
        <ul className="menu-list">
          <li
            className="menu-item"
            onMouseEnter={() => handleMouseEnter(0)}
            onMouseLeave={handleMouseLeave}
          >
            <a href="#">Home</a>
            {hoveredIndex === 0 && (
              <div className="submenu">
                <p>Home Information</p>
              </div>
            )}
          </li>
          <li
            className="menu-item"
            onMouseEnter={() => handleMouseEnter(1)}
            onMouseLeave={handleMouseLeave}
          >
            <a href="#">About</a>
            {hoveredIndex === 1 && (
              <div className="submenu">
                <p>About Information</p>
              </div>
            )}
          </li>
          <li
            className="menu-item"
            onMouseEnter={() => handleMouseEnter(2)}
            onMouseLeave={handleMouseLeave}
          >
            <a href="#">Services</a>
            {hoveredIndex === 2 && (
              <div className="submenu">
                <p>Our Services</p>
              </div>
            )}
          </li>
          <li
            className="menu-item"
            onMouseEnter={() => handleMouseEnter(3)}
            onMouseLeave={handleMouseLeave}
          >
            <a href="#">Contact</a>
            {hoveredIndex === 3 && (
              <div className="submenu">
                <p>Contact Information</p>
              </div>
            )}
          </li>
        </ul>
      </nav>
    </div>
  );
}