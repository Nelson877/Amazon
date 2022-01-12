import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://i.pinimg.com/originals/39/5c/bd/395cbdc769cbbc96a8d123a5f1f16e80.jpg"
          alt="image of a shopping banner"
        />
        <div className="home__row">
          <Product
            id="000000001"
            title="Graphite, Gold, Silver, Sierra Blue Ceramic Shield front Textured
          matte glass back and stainless steel design, iPhne 13 pro max."
            price={19.99}
            image="https://www.trustedreviews.com/wp-content/uploads/sites/54/2021/09/iPhone-13-pro.-7-1024x683.jpeg"
            rating={5}
          />
          <Product
            id="000000002"
            title="Shield front Textured
          max."
            price={122.99}
            image="https://www.trustedreviews.com/wp-content/uploads/sites/54/2021/09/iPhone-13-pro.-7-1024x683.jpeg"
            rating={2}
          />
        </div>
        <div className="home__row">
          <Product
            id="000000003"
            title="Shield front Textured
          matte glass back  13 pro max."
            price={16.99}
            image="https://www.trustedreviews.com/wp-content/uploads/sites/54/2021/09/iPhone-13-pro.-7-1024x683.jpeg"
            rating={5}
          />
          <Product
            id="000000004"
            title="Shield front Textured
           and stainless steel design, iPhne 13 pro max."
            price={99.99}
            image="https://www.trustedreviews.com/wp-content/uploads/sites/54/2021/09/iPhone-13-pro.-7-1024x683.jpeg"
            rating={3}
          />
          <Product
            id="000000005"
            title="Shield front Textured
          matte glass back and stainless steel design, iPhne 13 ."
            price={11.99}
            image="https://www.trustedreviews.com/wp-content/uploads/sites/54/2021/09/iPhone-13-pro.-7-1024x683.jpeg"
            rating={4}
          />
        </div>
        <div className="home__row">
          <Product
            id="000000006"
            title="Shield front 
          matte glass back and stainless steel design, iPhne 13 pro max."
            price={90.99}
            image="https://www.trustedreviews.com/wp-content/uploads/sites/54/2021/09/iPhone-13-pro.-7-1024x683.jpeg"
            rating={5}
          />
          <Product
            id="000000007"
            title="Shield front Textured
          matte glass back and design, iPhne 13 pro max."
            price={16.99}
            image="https://www.trustedreviews.com/wp-content/uploads/sites/54/2021/09/iPhone-13-pro.-7-1024x683.jpeg"
            rating={5}
          />
          <Product
            id="000000008"
            title="Shield front Textured
          matte glass  stainless steel design, iPhne 13 pro max."
            price={100.99}
            image="https://www.trustedreviews.com/wp-content/uploads/sites/54/2021/09/iPhone-13-pro.-7-1024x683.jpeg"
            rating={5}
          />
        </div>
        <div className="home__row">
          <Product
            id="000000009"
            title="Shield front Textured
          matte glass back and ess steel design, iPhne 13 pro max."
            price={99.99}
            image="https://www.trustedreviews.com/wp-content/uploads/sites/54/2021/09/iPhone-13-pro.-7-1024x683.jpeg"
            rating={5}
          />
        </div>
        <div className="home__footer">
          <p>This is the footer</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
