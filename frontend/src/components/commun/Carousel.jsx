import React, { useState, useEffect } from 'react'; // Importer React et les hooks useState et useEffect
import competences from '../../skils.json'; // Importer directement les compétences depuis le fichier JSON

const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0); // Déclarer l'état pour stocker l'index de la catégorie actuelle, initialisé à 0
    const [isAnimating, setIsAnimating] = useState(false); // État pour gérer l'animation

    const categories = Object.keys(competences); // Obtenir les clés (catégories) de l'objet compétences

    // Fonction pour passer à la diapositive suivante
    const nextSlide = () => {
        setIsAnimating(true); // Déclencher l'animation
        setTimeout(() => {
            setCurrentIndex((currentIndex + 1) % categories.length); // Incrémenter currentIndex et utiliser le modulo pour revenir au début si nécessaire
            setIsAnimating(false); // Arrêter l'animation
        }, 500); // Durée de l'animation en ms (doit correspondre à la durée de transition CSS)
    };

    // Fonction pour revenir à la diapositive précédente
    const prevSlide = () => {
        setIsAnimating(true); // Déclencher l'animation
        setTimeout(() => {
            setCurrentIndex((currentIndex - 1 + categories.length) % categories.length); // Décrémenter currentIndex et utiliser le modulo pour revenir à la fin si nécessaire
            setIsAnimating(false); // Arrêter l'animation
        }, 500); // Durée de l'animation en ms (doit correspondre à la durée de transition CSS)
    };

    // Utiliser useEffect pour configurer l'intervalle qui change automatiquement de diapositive toutes les 5 secondes
    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide(); // Appeler nextSlide pour changer de diapositive
        }, 10000); // Intervalle de 5000 ms (5 secondes)
        return () => clearInterval(interval); // Nettoyer l'intervalle lorsqu'on démonte le composant
    }, [currentIndex]); // Dépendance sur currentIndex pour redémarrer l'intervalle lorsque l'index change

    const currentCategory = categories[currentIndex]; // Obtenir la catégorie actuelle basée sur currentIndex
    const currentSkills = competences[currentCategory]; // Obtenir les compétences de la catégorie actuelle

    return (
        <div className="carousel"> {/* Conteneur principal du carrousel */}
            <button className="carousel-nav left" onClick={prevSlide}>&#10094;</button> {/* Bouton pour passer à la diapositive précédente */}
            <div className={`carousel-inner ${isAnimating ? 'animating' : ''}`}> {/* Conteneur des éléments internes du carrousel avec classe d'animation conditionnelle */}
                <h2>{currentCategory.toUpperCase()}</h2> {/* Afficher le nom de la catégorie en majuscules */}
                <div className="skills"> {/* Conteneur pour les compétences */}
                    {currentSkills.map(skill => ( // Mapper les compétences de la catégorie actuelle
                        <div key={skill.name} className="skill"> {/* Chaque compétence a une div avec une clé unique */}
                            <img src={skill.icon} alt={skill.name} /> {/* Afficher l'icône de la compétence */}
                            <p>{skill.name}</p> {/* Afficher le nom de la compétence */}
                        </div>
                    ))}
                </div>
            </div>
            <button className="carousel-nav right" onClick={nextSlide}>&#10095;</button> {/* Bouton pour passer à la diapositive suivante */}
        </div>
    );
};

export default Carousel; // Exporter le composant pour pouvoir l'utiliser dans d'autres fichiers
