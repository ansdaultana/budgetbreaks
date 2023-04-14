import React from 'react';
import '../App.css';

import "../assets/css/style.css";
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom';
import SearchedPackages from '../components/SearchedPackages';
import Gallery from '../components/Gallery';
import Contact from '../components/Contact';
import PopularDes from '../components/PopularDes';

function Homepage() {
    const navigate = useNavigate()
    const handleSubmit = (event) => {
        event.preventDefault();
        // submit the form data here
        navigate('/search')

    }
      
  return (
    <body id="top">

  

 <Header/>

  <main>
    <article>

      <section className="hero" id="home">
        <div className="container">

          <h2 className="h1 hero-title">Explore Pakistan on a Budget</h2>

          <p className="hero-text">
    Budget Breakers is a guide aimed at travelers looking href experience Pakistan's rich cultural heritage, stunning landscapes, and warm hospitality while keeping their expenses low. The guide offers practical and effective money-saving tips for budget-conscious travelers who want href explore Pakistan without compromising on the quality of their experience.
         </p>

          <div className="btn-group">
          <a href="#contact" > <button className="btn btn-primary">
              Learn more</button>
              </a>
              
              <a href="#search" >
            <button className="btn btn-secondary">Book now</button>
            </a>

          </div>

        </div>
      </section>

      <section className="tour-search" id="search">
        <div className="container">

          <form action="" onSubmit={handleSubmit} className="tour-search-form">

            <div className="input-wrapper">
              <label htmlFor="destination" className="input-label">Search Destination*</label>

              <input type="text" name="destination" id="destination" required placeholder="Enter Destination"
                className="input-field"/>
            </div>

            <div className="input-wrapper">
              <label htmlFor="people" className="input-label">Max Number*</label>

              <input type="number" name="people" id="people" required placeholder="No.of People" className="input-field"/>
            </div>

            <div className="input-wrapper">
              <label htmlFor="checkout" className="input-label">Budget</label>
              <input type="number" name="people" id="people" required placeholder="i.e 15000 rs" className="input-field"/>

            </div>
            <div className="input-wrapper">
              <label htmlFor="checkin" className="input-label">Checkin Date**</label>

              <input type="date" name="checkin" id="checkin" required className="input-field"/>
            </div>

          
            <button type="submit" className="btn btn-secondary">Search</button>
          </form>

        </div>
      </section>
  <PopularDes/>

   <SearchedPackages/>
    <Gallery/>

    <Contact/>
    </article>
  </main>
  <Footer/>

</body>
  )
}

export default Homepage
