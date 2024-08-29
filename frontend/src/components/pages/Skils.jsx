import React from 'react';
import Carousel from '../commun/Carousel';

const Skils = () => {
    return (
        <section className='skils' id='skills'>
            <h1 className='skils-title'>Compétences</h1>
            <p className='about-skils'>Mes compétences sont en constante amélioration, car pour moi, la joie de ce métier réside dans le fait que l’on apprend tous les jours, surtout en étant impliquée, curieuse et passionnée.</p>
            <Carousel />
        </section>
    );
}

export default Skils;
