import React, { Component } from 'react';
import '../index.css';

export default class Services extends Component {
  render() {
    let ABJData = this.props.ABJData;
    return (
      <section id="services">
        <div>
          <h2 className="section-title service-header">Services</h2>
          <div className="services">
          {
            ABJData.services && ABJData.services.map((item)=>{
              return (
                <article className="card">
                  <div className="imgBx">
                    <img src={`${item.imgurl}`} alt={`${item.imgalt}`}/>
                  </div>
                  <div className="content">
                    <h2>{item.name}</h2>
                    <p>{item.description}</p>
                  </div>
                </article> 
              )
            })
          }
          </div>
        </div>

        <div className="services-btn">
          <a href="crispnow.com" class="btn">
            Schedule A Time
          </a>
        </div>
      </section>
    );
  }
}