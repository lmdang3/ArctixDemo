import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "../../aos.css";
import "./home.css";
import AppBanner1 from "../../assets/AppBanner1.jpg";

export default function Home() {
  return (
    <div className="hero">
      <div className="image-overlay">
        <img src={AppBanner1} alt="App Banner" className="responsiveImage " />
      </div>

      <div className="content">
        <h1>Hello, my name is Lam</h1>
        <p>I am a software engineer</p>
      </div>

      <div id="parallax-world-of-ugg">
        <section>
          <div className="title">
            <h3>Let's do some</h3>
            <h1>PARALLAX</h1>
          </div>
        </section>

        <section>
          <div className="parallax-one">
            <h2>Lets Connect!</h2>
          </div>
        </section>
      </div>
    </div>
  );
}
