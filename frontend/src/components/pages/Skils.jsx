import React from 'react';
import Carousel from '../commun/Carousel';

const Skils = () => {
    return (
        <section className='skils' id='skills'>
            <h1 className='skils-title'>Compétences</h1>
            <p className='about-skils'>Mes compétences sont en constante amélioration, car je trouve une grande joie dans le fait que ce métier permet d'apprendre chaque jour. Être impliquée, curieuse et passionnée me pousse à toujours chercher de nouvelles connaissances et à me perfectionner continuellement.</p>
            <Carousel />
        </section>
    );
}

export default Skils;
