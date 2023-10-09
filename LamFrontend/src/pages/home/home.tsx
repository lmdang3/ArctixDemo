import React, { useState, useEffect } from "react";
import Carousel from "react-bootstrap/Carousel";
import "../../aos.css";
import "./home.css";
import AppBanner1 from "../../assets/AppBanner1.jpg";
import "../../components/Loader/loader.css"; // Import or create a loader component

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay (you can replace this with actual loading logic)
    setTimeout(() => {
      setLoading(false); // Once loaded, update loading state to false
    });
  }, []);

  return (
    <div className="hero">
      {/* Conditionally render loader or content based on loading state */}
      {loading ? (
        <div className="loader-container">
          <div className="loader"></div>
        </div>
      ) : (
        <>
          <div className="image-overlay">
            <img
              src={AppBanner1}
              alt="App Banner"
              className="responsiveImage"
            />
          </div>

          <div className="content">
            <h1>Hello, my name is Lam</h1>
            <p>I am a software engineer</p>
          </div>

          <div id="parallax-world-of-ugg">

            
            {/* <section>
              <div className="title">
                <h3>Let's do some</h3>
                <h1>PARALLAX</h1>
              </div>
            </section> */}

            <section>
              <div className="parallax-one">
                <h2>Lets Connect!</h2>
              </div>
            </section>
          </div>
        </>
      )}
    </div>
  );
}
