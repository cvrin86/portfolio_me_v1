import React from 'react';
import Header from './components/commun/Header';
import Footer from './components/commun/Footer';
import { Route, Routes } from 'react-router-dom'
import Contact from './components/pages/Contact.jsx'
import Presentation from './components/pages/Presentation.jsx';
import Projects from './components/pages/Projects.jsx';


import Home from './components/pages/Home.jsx';
import Skils from './components/pages/Skils.jsx';
import PolicyPrivacy from './components/pages/PolicyPrivacy.jsx';
import Banner from './components/commun/Banner.jsx';
import PlanWebsite from './components/pages/PlanWebsite.jsx';
import LegalNotice from './components/pages/LegalNotice.jsx';


const App = () => {
  return (
    <div className="app">
      <Header />
      <main className='container'>
        <Routes>
          <Route path='/' element={<Home />}>
            <Route path='/projects' element={<Projects />} />
            <Route path='/banner' element={<Banner />} />
            <Route path='/presentation' element={<Presentation />} />
            <Route path='/skills' element={<Skils />} />
            <Route path='/contact' element={<Contact />} />


          </Route>
          <Route path='/policy-privacy' element={<PolicyPrivacy />} />
          <Route path='/plan-site' element={<PlanWebsite />} />
          <Route path='/legal-notice' element={<LegalNotice />} />

        </Routes>
      </main>
      <Footer />

    </div>
  );
}

export default App;

