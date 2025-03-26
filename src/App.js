import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact"; // Import Contact Section
import Footer from "./components/Footer"; // Import Footer Section
import "@fortawesome/fontawesome-free/css/all.min.css";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact /> {/* Contact Section */}
      <Footer /> {/* Footer Section */}
    </div>
  );
}

export default App;
