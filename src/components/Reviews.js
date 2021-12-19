import React, { Component } from 'react';
import "../index.css"

export default class Reviews extends Component {
  render() {
    let ABJData = this.props.ABJData;
    return (
      <section id="reviews">
        <div className="review-container">
          <div className="row">
            <div className="two columns header-col">
              <h1>Client Reviews</h1>
            </div>
            <div className="ten columns flex-container">
              <div className="flexslider">
                <ul className="slides">
                  {
                    ABJData.testimonials && ABJData.testimonials.map((item)=>{
                      return(
                        <li>
                          <blockquote>
                            <p>
                              {item.description}
                            </p>
                            <cite>{item.name}</cite>
                          </blockquote>
                        </li>
                      )
                    })
                  }
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}