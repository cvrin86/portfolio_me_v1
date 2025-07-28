import React, { useState } from 'react';
import projectsData from '../../projects.json';
import Modal from '../commun/Modal';

const Projects = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);

    // Fonction pour ouvrir la modale avec les détails du projet sélectionné
    const seeMore = (project) => {
        setSelectedProject(project);
        setIsOpen(true);
    };

    return (
        <section className='projects' id='projects'>
            <h1 className='projects-title'>Projets</h1>
            <p>Ci-dessous, quelques exemples de réalisations effectuées durant la formation de développeur web fullstack.</p>
            <div className="project-gallery">
                {projectsData.map((project, index) => (
                    <div className="card" key={index}>
                        <div className="card-details">
                            <h3 className='card-title'> {project.title}</h3>
                            <picture>
                                <source srcSet={project.image} type="image/png" media="(max-width: 600px)" />
                                <source srcSet={project.image} type="image/png" media="(min-width: 601px) and (max-width: 900px)" />
                                <source srcSet={project.image} type="image/png" />
                                <img className="card-image" src={project.image} alt={project.title} />
                            </picture>
                        </div>
                        <div className="modal">
                            <div className="modal-content">
                                <button className='seemore' onClick={() => seeMore(project)}>Plus d'infos...</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Affichage conditionnel de la modale */}
            {isOpen && selectedProject && (
                <Modal project={selectedProject} closeModal={() => setIsOpen(false)} />
            )}
        </section>
    );
};

export default Projects;
