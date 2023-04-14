import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import SearchedPackages from '../components/SearchedPackages'

function Searchedtrips() {
  return (
    <div>
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

        <form action="" className="tour-search-form">

          <div className="input-wrapper">
            <label htmlFor="destination" className="input-label">Search Destination*</label>

            <input type="text" name="destination" id="destination" required placeholder="Enter Destination"
              className="input-field"/>
          </div>

          <div className="input-wrapper">
            <label htmlFor="people" className="input-label">Pax Number*</label>

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

        
<a href="#package">
          <button type="submit" className="btn btn-secondary">Search</button>
</a>
        </form>

      </div>
    </section>


  





    <SearchedPackages/>

    <section className="cta" id="contact">
      <div className="container">

        <div className="cta-content">
          <p className="section-subtitle">Call href Action</p>

          <h2 className="h2 section-title">Ready For Unforgatable Travel. Remember Us!</h2>

          <p className="section-text">
          "Affordable adventures for all!"
          </p>
        </div>

        <button className="btn btn-secondary">Contact Us !</button>

      </div>
    </section>

  </article>
</main>
<Footer/>
</body>
    </div>
  )
}

export default Searchedtrips
