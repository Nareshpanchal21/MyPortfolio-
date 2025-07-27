import React from "react";
import "../styles/About.css"; 

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about-container">
        {/* Left Side - About Content */}
        <div className="about-content">
          <h2>About Me</h2>
          <p>
            Hi, I'm <span className="name">Naresh Panchal</span>, a passionate Web Developer.
            I love building creative and responsive websites using modern technologies
            like React.js, JavaScript, and CSS. My goal is to create visually appealing
            and user-friendly applications that provide a great experience.
          </p>
          <p>
            I'm currently a BCA student, exploring new technologies and enhancing
            my skills in front-end development. Let's connect and build something amazing!
          </p>
        </div>

        {/* Right Side - Image */}
        <div className="about-image">
       <img src={`${process.env.PUBLIC_URL}/img/profile.jpg`} alt="Naresh Panchal" />
        </div>
      </div>
    </section>
  );
};

export default About;
