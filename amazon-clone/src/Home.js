import React from 'react'
import './Home.css';
import Product from './Product';

function Home() {
  return (
    <div className="home">
      <img 
        className="home__image"
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB" 
        alt=""
      />
      {/* Product id, title, price, rating, image */}
      <Product 
        id={12321341}
        title="The lean Startup: How constant Innovation Creates Radically Successful Businesses Paperback"
        price={11.96}
        rating={5}
        image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
        />
      {/* Product */}


    </div>
  )
}

export default Home;

