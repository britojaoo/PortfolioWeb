import React, { useState } from 'react';
import './Navbar.css';

interface NavbarProps {
  logo?: string;
  brand?: string;
  menuItems?: Array<{
    label: string;
    href: string;
    isActive?: boolean;
  }>;
  showAuth?: boolean;
}

const Navbar: React.FC<NavbarProps> = ({
  logo,
  brand = "Sua Marca",
  menuItems = [
    { label: "Início", href: "#home", isActive: true },
    { label: "Sobre",  href: "#about" },
    { label: "Serviços", href: "#services" },
    { label: "Contato", href: "#contact" }
  ],
  showAuth = true
  
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
          {logo ? (
            <img src={logo} alt={brand} className="navbar-logo" />
          ) : (
            <span className="navbar-brand-text">{brand}</span>
          )}
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

        {/* Auth Buttons */}
        {showAuth && (
          <div className="navbar-auth">
            <button className="btn-login">Entrar</button>
            <button className="btn-signup">Cadastrar</button>
          </div>
        )}

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
          {showAuth && (
            <li className="navbar-mobile-item navbar-mobile-auth">
              <button className="btn-login mobile" onClick={handleMenuItemClick}>
                Entrar
              </button>
              <button className="btn-signup mobile" onClick={handleMenuItemClick}>
                Cadastrar
              </button>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;