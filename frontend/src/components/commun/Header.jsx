import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { scrollToSection } from '../../utils/functions';
import logo_portfolio from '/logo_portfolio.png';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleNavLinkClick = (section) => {
        scrollToSection(section);
        setIsOpen(false); // Ferme le menu après avoir cliqué sur un lien
    };

    return (
        <header className='header'>
            <div className="container-header">
                {/* Ajout de la classe 'hidden' conditionnellement */}
                <div className={`logo-header ${isOpen ? 'hidden' : ''}`}>
                    <img className='logo' src={logo_portfolio} alt="Le logo de mon portfolio" />
                    <p>&lt;Web <strong>Developer/</strong>&gt;</p>
                </div>
                <div className="menu-container">
                    <button onClick={toggleMenu} className='dropdown-btn' aria-label='NavLink dropdown'>
                        {isOpen ? '✖' : '☰'}
                    </button>
                    <nav className={`menu ${isOpen ? 'open' : ''}`}>
                        <ul>
                            <li><NavLink to='/banner' activeClassName="active" onClick={() => handleNavLinkClick('banner')}>Accueil</NavLink></li>
                            <li><NavLink to='/presentation' activeClassName="active" onClick={() => handleNavLinkClick('presentation')}>Présentation</NavLink></li>
                            <li><NavLink to='/skills' activeClassName="active" onClick={() => handleNavLinkClick('skills')}>Compétences</NavLink></li>
                            <li><NavLink to='/projects' activeClassName="active" onClick={() => handleNavLinkClick('projects')}>Projets</NavLink></li>
                            <li><NavLink to='/contact' activeClassName="active" onClick={() => handleNavLinkClick('contact')}>Contact</NavLink></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;
