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
      <div className="home__row">
        <Product 
          id={12365341}
          title="DELL SE2419HR Full HD 24 inch LED MONITOR - Black"
          price={119.00}
          rating={5}
          image="https://brain-images-ssl.cdn.dixons.com/0/7/10199870/u_10199870.jpg"
        />
        <Product 
          id={12873258}
          title="JBL Tune 600 BTNC On-Ear Wireless Bluetooth Noise Canceling Headphones (Blue)"
          price={67.99}
          rating={4}
          image="https://brain-images-ssl.cdn.dixons.com/3/3/10200933/u_10200933.jpg"
        />
      </div>
      
      {/* Product */}
      <div className="home__row">
        <Product 
          id={11111111}
          title="Nike Men's Free Rn 2018 Running Shoes"
          price={82.99}
          rating={5}
          image="https://www.lacrossemonkey.com/media/catalog/product/cache/67e73c3e16ead9e1b9befb018a874cfb/n/i/nike-footwear-mens-free-rn-942836-001.jpg"
        />
        <Product 
          id={1222222}
          title="Optimum Nutrition Gold Standard 100% Whey Powder Chocolate 2273g"
          price={49.99}
          rating={5}
          image="https://images.hollandandbarrettimages.co.uk/productimages/HB/724/099183_A.jpg"
        />
        <Product 
          id={1222341}
          title="SONY PlayStation 4 - 500 GB"
          price={249.00}
          rating={2}
          image="https://brain-images-ssl.cdn.dixons.com/4/6/10153364/u_10153364.jpg"
        />
      </div>

      <div className="home__row">
        <Product 
          id={55321341}
          title="Echo Plus (2nd Gen), Charcoal Fabric + Philips Hue White bulb E27"
          price={99.99}
          rating={3}
          image="https://i.ebayimg.com/images/g/yVUAAOSwEuBfHUKe/s-l640.jpg"
        />
        
      </div>

    </div>
  )
}

export default Home;

