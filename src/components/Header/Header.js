import React from "react";
import Typed from "react-typed";
import { Link } from "react-scroll";

const Header = () => {
    return (
      <div id="home" className="header-wraper">
          <div className="main-info">
              <canvas></canvas>
              <h1>Full Stack Web Developer</h1>
              <Typed 
              className="typed-text"
              strings={["JS,CSS,HTML", "Python/Django", "Ruby on Rails", "MongoDB", "Postgresql", "React"]}
              typeSpeed={40}
              backSpeed={60}
              loop
              />
              <Link to="contacts" offset={-110} className="btn-main-offer">Contact Me</Link>
          </div>
          </div>
    )
}

export default Header;