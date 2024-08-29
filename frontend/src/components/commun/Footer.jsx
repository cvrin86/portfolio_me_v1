import React from 'react';
import { Link } from 'react-router-dom'
import github from '/icons/skils/github-icon.png'
import linkedin from '/icons/skils/linkedin-icon.png'
import logo_portfolio from '/logo_portfolio.png'
import { scrollToSection } from "../../utils/functions"

const Footer = () => {

    const currentYear = new Date().getFullYear();
    return (
        <div className="footer">
            <div className="logo-footer">
                <img className='logo' src={logo_portfolio} alt="logo de mon portfolio" />

            </div>
            <footer className='footer-container'>
                <ul className='footer-links' role='list'>
                    <li>
                        <a href="https://github.com/username" target="_blank" rel="noopener noreferrer">
                            <img src={github} alt="GitHub" />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/cristina-vrinceanu-61a0402b6/" target="_blank" rel="noopener noreferrer">
                            <img src={linkedin} alt="LinkedIn" />
                        </a>
                    </li>
                </ul>
                <div className="footer-content">
                    <p className="copyright">© Copyright {currentYear} - Cristina Vr. All rights reserved.</p>
                    <nav className='links-pages' aria-label='footer navigation'>
                        <Link to='/plan-site'>Plan du site</Link> | {' '}
                        <Link to='/legal-notice' onClick={() => scrollToSection('top')}>Mentions légales</Link> | {' '}
                        <Link to='/policy-privacy' onClick={() => scrollToSection('top')}>Politique de confidentialité</Link>
                    </nav>
                </div>
            </footer>
        </div>
    );
}

export default Footer;
