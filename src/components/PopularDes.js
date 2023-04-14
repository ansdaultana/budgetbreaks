import React from 'react'

import neelumvalley from "../assets/images/NeeulmValley.jpg";
import natlar from "../assets/images/natlar.jpg";
import shandur from "../assets/images/shandur.jpg";
function PopularDes() {
  return (
    <div>
          <section className="popular" id="destination">
        <div className="container">

          <h2 className="h2 section-title">Popular destination</h2>

          <p className="section-text">
          Pakistan is a country with a rich cultural heritage, stunning natural beauty, and diverse landscapes.
          </p>

          <ul className="popular-list">

            <li>
              <div className="popular-card">

                <figure className="card-img">
                <img src={neelumvalley} alt="AJK, Pakistan" loading="lazy"/>
   </figure>

                <div className="card-content">

                  <div className="card-rating">
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                  </div>

                  <p className="card-subtitle">
                    <a href="#">Pakistan</a>
                  </p>

                  <h3 className="h3 card-title">
                    <a href="#">Neelum Valley</a>
                  </h3>

                  <p className="card-text">Neelum Valley, also known as the "Paradise on Earth,".
                  </p>

                </div>

              </div>
            </li>

            <li>
              <div className="popular-card">

                <figure className="card-img">
                  <img src={natlar} alt="Natlar Valley, Pakistan" loading="lazy"/>
                </figure>

                <div className="card-content">

                  <div className="card-rating">
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                  </div>

                  <p className="card-subtitle">
                    <a href="#">PK</a>
                  </p>

                  <h3 className="h3 card-title">
                    <a href="#">Natlar Valley</a>
                  </h3>

                  <p className="card-text">
                  A hidden gem in the Gilgit-Baltistan region</p>

                </div>

              </div>
            </li>

            <li>
              <div className="popular-card">

                <figure className="card-img">
                  <img src={shandur} alt="Shandur Pass, Pakistan" loading="lazy"/>
                </figure>

                <div className="card-content">

                  <div className="card-rating">
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                  </div>

                  <p className="card-subtitle">
                    <a href="#">Pakistan</a>
                  </p>

                  <h3 className="h3 card-title">
                    <a href="#">Shandur Pass</a>
                  </h3>

                  <p className="card-text">
                  Known as the "Roof of the World," Shandur Pass is a high mountain pass located in the Gilgit-Baltistan region.</p>

                </div>

              </div>
            </li>

          </ul>


        </div>
      </section>

    </div>
  )
}

export default PopularDes
