import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Home";
import About from "./components/About";
import WhyUs from "./components/Whyus";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import CustomCursor from "./components/CustomCursor";
const App = () => {
  
  return (
    <div className="font-sans bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white scroll-smooth">
      <Navbar />
      <CustomCursor />
      <main>
          <Hero />
          <About />
          <WhyUs />
          <Services />
          <Projects />
          <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
