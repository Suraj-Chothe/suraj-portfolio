import Navbar from "../components/layout/Navbar";

import Hero from "../components/sections/Hero/Hero";
import About from "../components/sections/About/About";
import Skills from "../components/sections/Skills/Skills";
import Experience from "../components/sections/Experience/Experience";
import Projects from "../components/sections/Projects/Projects";
import Architecture from "../components/sections/Architecture/Architecture";
import AI from "../components/sections/AI/AI";
import Contact from "../components/sections/Contact/Contact";
import Footer from "../components/sections/Footer/Footer";
import ScrollProgress from "../components/common/ScrollProgress";


const Home = () => {
  return (
    <>
      <Navbar />

      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Architecture />
      <AI />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;