import React, { useState, useEffect } from "react";
// css
import "./about.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card } from "react-bootstrap";
// images
import Cloudathon from "../../assets/Cloudathon.jpg";


const About = () => {

  // set the state of the instagram embedded content
  const [instagramLoaded, setInstagramLoaded] = useState(false);
  const [showLoader, setShowLoader] = useState(true);

  
  // Runs the instagram embedded with every run
  useEffect(() => {
    if (!instagramLoaded) {
      const script = document.createElement("script");
      script.src = "https://www.instagram.com/embed.js";
      script.async = true;
      document.body.appendChild(script);
      setInstagramLoaded(true);
    }
  
    return () => {
      if (instagramLoaded) {
        const script = document.querySelector('script[src="https://www.instagram.com/embed.js"]');
        if (script) {
          document.body.removeChild(script);
        }
      }
    };
  }, [instagramLoaded]);

  // Hide the loader once Instagram content is loaded
  useEffect(() => {
    if (instagramLoaded) {
      setShowLoader(false);
    }
  }, [instagramLoaded]);

  // Images from local files
  const imageSrc = Cloudathon;
 

  // image2 caption contents
  const caption =
    "I got advice to share my recent activities this semester. On March 24th my team and I placed 2nd at the UH cloudathon, awarding us $2000. Cloudathon is a biannual cloud computing competition sponsored by AWS, wherein participating teams showcase their expertise in creating optimal cloud-based solutions for business needs. #aws #cloudcomputing #universityofhouston #cloudathon #amazon";

  return (
    <div className="mt-4 container-fluid d-flex justify-content-center align-items-center">

      
      <div className="col-lg-8 justify-content-center">
        {" "}
        <div className="card">
          <div className="card-body text-center">
            {/* Instagram Widget */}
            <blockquote
              className="instagram-media"
              data-instgrm-captioned
              data-instgrm-permalink="https://www.instagram.com/p/CgZxoN9AiHJ/?utm_source=ig_embed&amp;utm_campaign=loading"
              data-instgrm-version="14"
              style={{
                background: "#FFF",
                border: "0",
                borderRadius: "3px",
                boxShadow:
                  "0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)",
                margin: "1px",
                maxWidth: "100%", 
                maxHeight: "100%", 
                minWidth: "400px",
                padding: "0",
                width: "100%",
              }}
            >
              {/* Loader */}
              <div className="loader"></div>


            </blockquote>

            {/* blog continuation */}

            <h5 className="card-title">
              Exploring the Impact of Google's Innovations
            </h5>
            <p className="card-text">
              Google, founded by Larry Page and Sergey Brin, has revolutionized
              the way we interact with the internet. From its humble beginnings
              as a search engine...
            </p>
            <a href="#" className="btn btn-primary">
              Read More
            </a>
          </div>

          <Card className="border mb-3">
            <Card.Body>
              <div className="d-flex flex-column align-items-start">
                <img
                  src={imageSrc}
                  alt="Profile"
                  className="mb-4"
                  style={{ maxWidth: "100%" }}
                />

                <p className="mb-2">{caption}</p>
                <small className="text-muted">
                  John Doe • 2h ago • <a href="#">Like</a> •{" "}
                  <a href="#">Reply</a>
                </small>
              </div>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default About;
