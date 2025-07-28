import React from 'react';
import { Link } from 'react-router-dom'
import profile from '/images/profile.jpg'
import icon_download from '/icons/icon_download.png'


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
                    <p>Bonjour, moi c'est Cristina, <strong>développeuse web fullstack</strong> ! <br /><br />Passionnée par les nouvelles technologies et la programmation, j'ai choisi de me reconvertir en tant que développeuse web en suivant une <strong>formation diplômante</strong> à l'École <strong>3W ACADEMY</strong>. Récemment diplômée d'un programme intensif de développement web, et autodidacte depuis un certain temps, je suis déterminée à approfondir mes compétences par la pratique et l'apprentissage continu.</p><br />
                    <p> Ma formation en développement web m'a permis de découvrir les langages de programmation tels que <strong>JavaScript</strong>, <strong>HTML</strong>, <strong>CSS</strong>, ainsi que des frameworks modernes comme <strong>React</strong> et <strong>Node.js</strong>. J'ai également acquis une certaine compréhension des bases de données, des API, et des pratiques de développement agile.</p><br />
                    <p>Je suis à la recherche de postes en tant que développeuse web, mais je suis également ouverte aux missions freelance. Cette flexibilité me permet d'explorer des projets variés et de proposer des solutions sur mesure.</p><br />
                    <p>Motivée par les défis et l'innovation, je souhaite contribuer à des projets ambitieux, que ce soit en équipe ou en freelance, tout en continuant à apprendre et à grandir dans le domaine du développement web.</p>

                    <div className="presentation-links">
                        <button className='download-btn'><img src={icon_download} alt="cv à telecharger" /><a href="/documents/mon_cv_cv.pdf" download="mon_cv_cv.pdf" >Télécharger mon CV</a>
                        </button>
                    </div>
                </div>
            </div>


        </section>

    );
}

export default Presentation;
