import React from 'react';
import '../index.css';

import About from '../components/About';
import Services from '../components/Services';

function Home () {
  return (
    <main>
      <section id="hero" className="hero">     
      </section>
      <About/>
      <Services/>
    </main>    
  )
}

export default Home;