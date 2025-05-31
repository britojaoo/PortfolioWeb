import React, { useState } from 'react';
import logo from '../../assets/logoiconjoaobrito.svg';
import './Navbar.css';

interface NavbarProps {
  brand?: string;
  menuItems?: Array<{
    label: string;
    href: string;
    isActive?: boolean;
  }>;
  showAuth?: boolean;
}

const Navbar: React.FC<NavbarProps> = ({
  brand = "João Brito | Portfolio",
  menuItems = [
    { label: "Início", href: "#home", isActive: true },
    { label: "Sobre",  href: "#about" },
    { label: "Serviços", href: "#services" },
    { label: "Contato", href: "#contact" }
  ],
  
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMenuItemClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">

        {/* Logo/Brand */}
        <div className="navbar-brand">
          <img src={logo} alt={brand} className="navbar-logo" />
          <span className="navbar-brand-text">{brand}</span>
        </div>

        {/* Desktop Menu */}
        <ul className="navbar-menu">
          {menuItems.map((item, index) => (
            <li key={index} className="navbar-item">
              <a 
                href={item.href} 
                className={`navbar-link ${item.isActive ? 'active' : ''}`}
                onClick={handleMenuItemClick}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button 
          className={`navbar-toggle ${isMenuOpen ? 'active' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`navbar-mobile ${isMenuOpen ? 'active' : ''}`}>
        <ul className="navbar-mobile-menu">
          {menuItems.map((item, index) => (
            <li key={index} className="navbar-mobile-item">
              <a 
                href={item.href} 
                className={`navbar-mobile-link ${item.isActive ? 'active' : ''}`}
                onClick={handleMenuItemClick}
              >
                {item.label}
              </a>
            </li>
          ))}    
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;