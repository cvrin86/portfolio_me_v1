import React from 'react';
import { Link } from 'react-router-dom'
import profile from '/images/profile.jpg'

const Presentation = () => {
    return (
        <section className='presentation' id='presentation'>
            <div className="presentation-main">
                <div className="image-presentation">
                    <picture>
                        <img src={profile} alt="photo profile presentation" />
                    </picture>
                </div>
                <div className="text-presentation">
                    <h1>A propos de moi</h1>
                    <p>Bonjour, moi c'est Cristina, <strong>développeuse web fullstack</strong> ! Passionnée par les nouvelles technologies et la programmation j'ai donc décidé de me reconvertir en tant que développeur web en passant une <strong>formation diplomante</strong> auprès de l'Ecole 3W ACADEMY. Récemment diplômé d'un programme de formation en développement Web et autodidacte depuis quelque temps, je souhaite approfondir mes compétences par la pratique. Curieuse, logique et pragmatique par nature, je cherche à occuper un poste de développeuse Web full stack ( React) pour perfectionner mes compétences techniques.</p>

                    <div className="presentation-links">
                        <button className='download-btn'><a href="/documents/mon_cv_cv.pdf" download="mon_cv_cv.pdf" className="download-btn">Télécharger mon CV</a>
                        </button>
                    </div>
                </div>
            </div>


        </section>

    );
}

export default Presentation;
