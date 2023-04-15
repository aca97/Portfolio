import FlamingoModel from "./components/FlamingoModel";
import Skills from "./components/Skills";
import Navbar from "./components/Navbar";

import "./App.css";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <FlamingoModel />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
