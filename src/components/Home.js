import React from 'react';
import '../index.css';

import About from '../components/About';
import Services from '../components/Services';
import Reviews from '../components/Reviews';
import ABJData from '../ABJData';

function Home () {
  return (
    <main>
      <section id="hero" className="hero">     
      </section>
      <About/>
      <Services ABJData={ABJData}/>
      <Reviews ABJData={ABJData}/>
    </main>    
  )
}

export default Home;