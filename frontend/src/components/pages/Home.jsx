import React from 'react';

import Banner from '../commun/Banner';
import Presentation from './Presentation';
import Skils from './Skils';
import Projects from './Projects';
import Contact from './Contact';

const Home = () => {
    return (
        <div className="home-page">
            <Banner />
            <Presentation />
            <Skils />
            <Projects />
            <Contact />

        </div>
    );
}

export default Home;
