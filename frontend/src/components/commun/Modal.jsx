import React from 'react';

const Modal = ({ project, closeModal }) => {
    return (
        <div className="modal-overlay">
            <div className="modal">
                <div className="modal-content">
                    <div className="modal-close" onClick={closeModal}>
                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="times" className="svg-inline--fa fa-times fa-w-11" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 352 512">
                            <path fill="currentColor" d="M199.59 256l128.97-128.97c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L133.87 189.28 4.9 60.31c-12.28-12.28-32.19-12.28-44.48 0L4.18 82.55c-12.28 12.28-12.28 32.19 0 44.48L133.15 256 4.18 384.97c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0l128.97-128.97L327.1 461.69c12.28 12.28 32.19 12.28 44.48 0l21.76-21.76c12.28-12.28 12.28-32.19 0-44.48L199.59 256z"></path>
                        </svg>
                    </div>
                    <div className="card-modal-title"> Titre : {project.modalTitle}</div>
                    <div className="card-modal-content">
                        <div className="card-modal-context">
                            <h4>Description</h4>
                            <p>{project.context}</p>
                        </div>
                        <div className="card-modal-context">
                            <h4>Technologies  </h4>
                            <ul className='technology-list'>
                                {project.technologies.map((tech, index) => (
                                    <li key={index} className='technology-item'>{tech}{index < project.technologies.length - 1 && ', '}</li>
                                ))

                                }
                            </ul>
                        </div>

                    </div>

                    {/* <div className="card-modal-right-colon">
                            <div className="card-modal-links">
                                <a className="card-modal__link button" href={project.githubLink} target="_blank" rel="noreferrer">Lien GitHub</a>
                                <a className="card-modal__link button" href={project.siteLink} target="_blank" rel="noreferrer">Lien du site</a>
                            </div>
                        </div> */}
                </div>
            </div>
        </div>

    );
};

export default Modal;
