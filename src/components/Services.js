import React from 'react';
import Placeholder from '../assets/img/161431962_104724801704521_7397517850999387659_n.jpg';
import '../index.css';

function Services() {
  return(
    <section id="services">
      <div>
        <h2 className="section-title">Services</h2>
      </div>

      {/* cookies */}
      <div className="services">
        <article className="card">
          <div className="imgBx">
            <img src={ Placeholder } alt="placeholder"/>
          </div>
          <div className="content">
            <h2>Skin Stretchers<br/><span>Coming Soon</span></h2>
          </div>
        </article>        

        {/* drinks */}
        <article className="card">
          <div className="imgBx">
            <img src={ Placeholder } alt="placeholder"/>
          </div>
          <div className="content">
            <h2>Face Owies<br/><span>Coming Soon</span></h2>
          </div>                 
        </article>

        {/* pretzels */}
        <article className="card">
          <div className="imgBx">
            <img src={ Placeholder } alt="placeholder"/>
          </div>
          <div className="content">
            <h2>Lip Poofers<span>Coming Soon</span></h2>
          </div>                 
        </article>
      </div>

      <div className="services-btn">
        <a href="crispnow.com" class="btn">
          Schedule A Time
        </a>
      </div>
    </section>
  )
}

export default Services;