import React from "react";
import Typewriter from "typewriter-effect";
import "../styles/Home.css"; 

const Home = () => {
  return (
    <section className="home" id="home">
      <div className="home-container">
        {/* Left Side - Image */}
        <div className="home-image">
          <img src="/img/profile.jpg" alt="Naresh Panchal" />
        </div>

        {/* Right Side - Name & Typing Effect */}
        <div className="home-content">
          <h1>I'm <span className="name">Naresh Panchal</span></h1>
          <h2>
            <Typewriter
              options={{
                strings: ["Web Developer", "Frontend Developer", "React.js Developer"],
                autoStart: true,
                loop: true,
              }}
            />
          </h2>
        </div>
      </div>
    </section>
  );
};

export default Home;
