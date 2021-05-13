import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import  {  faReact, faPython, faJs } from '@fortawesome/free-brands-svg-icons';
import  { faGem } from '@fortawesome/free-solid-svg-icons';

const Skills = () => {
    return (
     <div  id="skills" className="services">
         <h1 className="py-5">my skills</h1>
             <div className="container">
                 <div className="row">
                     <div className="col-lg-3 col-md-6 col-sm-6">
                         <div className="box">
<div className="circle"><FontAwesomeIcon className="icon" icon={faReact} sixe="2x"/></div>
                            <h3>React Library</h3>
                            <p>Fetch data using AJAX request, hooks, tooling MERN stack and authentication.</p>
                         </div>
                     </div>
                     {/* - */}
                     <div className="col-lg-3 col-md-6 col-sm-6">
                         <div className="box">
<div className="circle"><FontAwesomeIcon className="icon" icon={faJs} sixe="2x"/></div>
                            <h3>JavaScript</h3>
                            <p>JavaScript fundamentals, jQuery, HTML5, CSS3 and AJAX requests.</p>
                         </div>
                     </div>
                     {/* - */}
                     <div className="col-lg-3 col-md-6 col-sm-6">
                         <div className="box">
 <div className="circle"><FontAwesomeIcon className="icon" icon={faGem} sixe="2x"/></div>
                            <h3>Ruby on Rails</h3>
                            <p> Ruby fundamentals, full stack with Rails and React, Databases and SQL.</p>
                         </div>
                     </div>
                     {/* - */}
                     <div className="col-lg-3 col-md-6 col-sm-6">
                         <div className="box">
<div className="circle"><FontAwesomeIcon className="icon" icon={faPython} sixe="2x"/></div>
                            <h3>Python/Django</h3>
                            <p>Python fundamentals, Django, authentication, and Self Directed Learning. </p>
                         </div>
                     </div>
                 </div>
             </div>
         </div>
    )
}

export default Skills;