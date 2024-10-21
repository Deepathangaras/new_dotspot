import React from "react";
import Navbar from "../../components/navbar/Navbar"; // Import the Navbar component
import "./Home.css"; // Add your CSS styles for the Home page here

const Home = () => {
  return (
    <>
      <Navbar /> {/* Navbar is rendered here */}
      <section className="section-one">
        <div className="container">
          <div className="left-side">
            <div className="title">
              <h1>
                DOT SPOT- TRANSFORMING VISION WITH AI
                <br /> FOR YOUR BUSINESS
              </h1>
            </div>
            <p className="p">
              Dotspot-Transforming Vision with AI Precision.
            </p>
            <button>know more</button>
          </div>
          <div className="right-side pyramid">
          </div>
        </div>
      </section>
      {/* Add other sections or content here */}
    </>
  );
};

export default Home;
