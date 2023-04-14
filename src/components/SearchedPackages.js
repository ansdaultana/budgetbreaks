import React from 'react'

import kashmir from "../assets/images/kashmir.jpg";
import Nathiyagali from "../assets/images/nathiagali3.jpg";
import hunza from "../assets/images/hunza2.jpg";
import { useNavigate } from 'react-router-dom';

function SearchedPackages() {
    const navigate = useNavigate()
    const handleSubmit = (event) => {
        event.preventDefault();
        // submit the form data here
        navigate('/order')

    }
  return (
    <div>
         <section className="package" id="package">
        <div className="container">
        <form action="" onSubmit={handleSubmit} >

      <p className="section-subtitle">Popular Packeges</p>

          <h2 className="h2 section-title">Checkout Our Affodable Packeges</h2>

          <p className="section-text">
          . With our incredible deals and discounts, you can explore breathtaking destinations, indulge in delicious cuisine, and create unforgettable memories, all while sticking href your budget. 
            </p>

          <ul className="package-list">

            <li>
              <div className="package-card">

                <figure className="card-banner">
                  <img src={Nathiyagali} alt="Experience The Great Holiday On Beach" loading="lazy"/>
                </figure>

                <div className="card-content">

                  <h3 className="h3 card-title">Murree, Ayubia and Nathiyagali </h3>

                  <p className="card-text">
                 Murree, Ayubia and Nathiyagali are the most beautiful hill stations in Pakistan. This is the private tour for Couples or Family Members.3*-4* stars Hotel stay in Murree.
                  </p>

                  <ul className="card-meta-list">

                    <li className="card-meta-item">
                      <div className="meta-box">
                        <ion-icon name="time"></ion-icon>

                        <p className="text">3D/3N</p>
                      </div>
                    </li>

                    <li className="card-meta-item">
                      <div className="meta-box">
                        <ion-icon name="people"></ion-icon>

                        <p className="text">pax: 10</p>
                      </div>
                    </li>

                    <li className="card-meta-item">
                      <div className="meta-box">
                        <ion-icon name="location"></ion-icon>

                        <p className="text">Pakistan</p>
                      </div>
                    </li>

                  </ul>

                </div>

                <div className="card-price">

                  <div className="wrapper">

                    <p className="reviews">(25 reviews)</p>

                    <div className="card-rating">
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                    </div>

                  </div>

                  <p className="price">
                   Rs: 15000
                    <span>/ per person</span>
                  </p>

                  <button type="submit" className="btn btn-secondary">Book Now</button>

                </div>

              </div>
            </li>

            <li>
              <div className="package-card">

                <figure className="card-banner">
                  <img src={kashmir} alt="Summer Holiday href The Oxolotan River" loading="lazy"/>
                </figure>

                <div className="card-content">

                  <h3 className="h3 card-title">Muzaffarabad Kashmir Tour</h3>

                  <p className="card-text">
                  Its the tours of  Murree, Ayubia, Bhurban,  Nathiyagali,Muzaffarabad, Neelum Valley, Leepa Valley, Bagh & Banjosa Lake.
                  </p>

                  <ul className="card-meta-list">

                    <li className="card-meta-item">
                      <div className="meta-box">
                        <ion-icon name="time"></ion-icon>

                        <p className="text">6D/5N</p>
                      </div>
                    </li>

                    <li className="card-meta-item">
                      <div className="meta-box">
                        <ion-icon name="people"></ion-icon>

                        <p className="text">pax: 10</p>
                      </div>
                    </li>

                    <li className="card-meta-item">
                      <div className="meta-box">
                        <ion-icon name="location"></ion-icon>

                        <p className="text">Pakistan</p>
                      </div>
                    </li>

                  </ul>

                </div>

                <div className="card-price">

                  <div className="wrapper">

                    <p className="reviews">(20 reviews)</p>

                    <div className="card-rating">
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                    </div>

                  </div>

                  <p className="price">
                    Rs: 19000
                    <span>/ per person</span>
                  </p>

                  <button type="submit" className="btn btn-secondary">Book Now</button>

                </div>

              </div>
            </li>

            <li>
              <div className="package-card">

                <figure className="card-banner">
                  <img src={hunza} alt="Santorini Island's Weekend Vacation" loading="lazy"/>
                </figure>

                <div className="card-content">

                  <h3 className="h3 card-title">Hunza Valley Tour
</h3>

                  <p className="card-text">
                  Hunza Valley Tour is one the most popular tours of the world. It is located in the far Northern territory of Pakistan. It is widely believed by many people that James Hilton’s famous novel “Lost Horizon” was inspired from Hunza Valley.
                  </p>

                  <ul className="card-meta-list">

                    <li className="card-meta-item">
                      <div className="meta-box">
                        <ion-icon name="time"></ion-icon>

                        <p className="text">6D/5N</p>
                      </div>
                    </li>

                    <li className="card-meta-item">
                      <div className="meta-box">
                        <ion-icon name="people"></ion-icon>

                        <p className="text">pax: 10</p>
                      </div>
                    </li>

                    <li className="card-meta-item">
                      <div className="meta-box">
                        <ion-icon name="location"></ion-icon>

                        <p className="text">Pakistan</p>
                      </div>
                    </li>

                  </ul>

                </div>

                <div className="card-price">

                  <div className="wrapper">

                    <p className="reviews">(40 reviews)</p>

                    <div className="card-rating">
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                    </div>

                  </div>

                  <p className="price">
                  Rs:25000
                    <span>/ per person</span>
                  </p>

                  <button type="submit" className="btn btn-secondary">Book Now</button>

                </div>

              </div>
            </li>

          </ul>
          </form>
        </div>
      </section>
    </div>
  )
}

export default SearchedPackages
