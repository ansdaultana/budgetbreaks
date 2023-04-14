import React from 'react'

import T1 from "../assets/images/tour1.jpg";
import T2 from "../assets/images/tour2.jpg";
import T5 from "../assets/images/tour3.jpg";
import T6 from "../assets/images/tour6.JPG";
import T7 from "../assets/images/tour8.jpg";
function Gallery() {
  return (
    <div>
        <section className="gallery" id="gallery">
        <div className="container">

          <p className="section-subtitle">Photo Gallery</p>

          <h2 className="h2 section-title">Photo's From Travellers</h2>

          <p className="section-text">
          The beauty of the Northern Areas of Pakistan is not limited to its mountainous landscapes. The region is also home to stunning lakes, such as the turquoise-colored Attabad Lake and the serene Satpara Lake. Visitors can take a boat ride or simply relax by the lake and soak in the tranquil surroundings.
          </p>

          <ul className="gallery-list">

            <li className="gallery-item">
              <figure className="gallery-image">
                <img src={T7} alt="Gallery"/>
              </figure>
            </li>

            <li className="gallery-item">
              <figure className="gallery-image">               
               <img src={T2} alt="Gallery"/>

              </figure>
            </li>

            <li className="gallery-item">
              <figure className="gallery-image">
              <img src={T1} alt="Gallery"/>
             
              </figure>
            </li>

            <li className="gallery-item">
              <figure className="gallery-image">
              <img src={T6} alt="Gallery"/>
                
              </figure>
            </li>

            <li className="gallery-item">
              <figure className="gallery-image">
              <img src={T5} alt="Gallery"/>
                
              </figure>
            </li>

          </ul>

        </div>
      </section>

    </div>
  )
}

export default Gallery
