import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'
import Nav from './SitoWeb/Nav/Nav';
import Header from './SitoWeb/Header/Header';
import SfondoOnde from './SitoWeb/SfondoOnde/SfondoOnde';
import Expertise from './SitoWeb/Expertise/Expertise';
import Strategic from './SitoWeb/Strategic/Strategic';
import Team from './SitoWeb/Team/Team';
import Portfolio from './SitoWeb/Portfolio/Portfolio';
import FormContactUs from './SitoWeb/FormContactUs/FormContactUs';
import Footer from './SitoWeb/Footer/Footer.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <Nav />
   <Header />
   <SfondoOnde />
   <Expertise />
   <Strategic />
   <Team />
   <Portfolio />
   <FormContactUs></FormContactUs>
   <Footer />
  </React.StrictMode>
);



