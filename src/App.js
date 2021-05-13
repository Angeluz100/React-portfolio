import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Particles from "react-particles-js";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import AboutMe from "./components/AboutMe/AboutMe";
import Skills from "./components/Skills/Skills";
import Resume from "./components/Resume/Resume";
import Portfolio from "./components/Portfolio/Portfolio";
import Contacts from "./components/Contacts/Contacts";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
    <Particles 
    className="particles-canvas"
      params={{
        particles: {
          number:{
            value: 30,
            density:{
              enable: true,
              value_area: 900
            }
          },
          shape: {
            type: "circle",
            stroke: {
              width: 6,
              color: "#f9ab00"
            }

          }
        }
      }}
    />
      <Navbar />
      <Header />
      <AboutMe />
      <Skills />
      <Resume />
      <Portfolio />
      <Contacts />
      <Footer />
    </>
      
  );
}

export default App;
