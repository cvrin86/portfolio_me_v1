import React from 'react';
import { Link } from 'react-router-dom'
import { scrollToSection } from '../../utils/functions';
import TypingEffect from './TyppingEffect';

const Banner = () => {
    return (
        <section className='banner' id='banner'>
            <div className="banner-container">
                <div className="banner-content">

                    <TypingEffect text="Bienvenue sur mon portfolio ! Découvrez mes projets et réalisations ." speed={150} pause={2000} />
                    <h1>Cristina Vrinceanu</h1>
                    <p>Développeuse web Fullstack</p>
                    <button className='project-btn' onClick={() => scrollToSection('projects')}>
                        Mes projets
                    </button>
                </div>
                {/* <div className="banner-image">
                    <img src={profile} alt="Profile with a laptop working" />
                </div> */}
            </div>
        </section>
    );
}

export default Banner;
