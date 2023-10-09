import React, { useState, useEffect } from "react";
import "./Loader.css"; // Import the loader CSS
import AppBanner1 from "../../assets/AppBanner1.jpg";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div className="hero">
      {loading ? (
        <div className="loader-container">
          <div className="loader"></div>
        </div>
      ) : (
        // Your content here
      )}
    </div>
  );
}
