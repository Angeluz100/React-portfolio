import React from "react";
import superheros from "../../images/superheros.png";
import homeTracker from "../../images/home-tracker.png";
import dreamPlaces from "../../images/dream-places.png";
import dailyPractices from "../../images/daily-practices.png";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import  {  faSearchPlus } from '@fortawesome/free-solid-svg-icons';

import { PopupboxManager, PopupboxContainer  } from "react-popupbox";
import "react-popupbox/dist/react-popupbox.css";

const Portfolio = () => {
    
    const openPopupboxSuperheros = () => {
        const content = (
            <>
            <img className="portfolio-image-popupbox"src={superheros} alt="Superheros Project..." />
            <p>A fun web app displaying superheros using basic skills, 
                <br/>
               HTML5, CSS3 and JavaScript </p>
            <b>Netlify:</b> <a className="hyper-link" onClick={() => window.open("https://project-superheros.netlify.app/")}>https://project-superheros.netlify.app/</a>
            <br/>
            <b>Github:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/Angeluz100/Project-Superheros")}>https://github.com/Angeluz100/Project-Superheros</a>
            </>
    
        )
        PopupboxManager.open({ content })
    }

    const popupboxConfigSuperheros = {
        titleBar: {
            enable: true,
            text: "Superheros Project."
        },
        fadeIn: true,
        fadeInSpeed: 500
    }
    

    const openPopupboxHomeTracker = () => {
        const content =(
            <>
            <img className="portfolio-image-popupbox"src={homeTracker} alt="Home Tracker Project..." />
            <p>A full stack CRUD app keeping track of homes visited by a client,showing
            <br/> 
             relevant information and details.
            Technology used Node.js, Express and MongoDB.
            </p>
            <b>Demo:</b> <a className="hyper-link"onClick={() => window.open("https://homes-tracker.herokuapp.com/homes")}>https://homes-tracker.herokuapp.com/homes</a>
            <br/>
            <b>Github:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/Angeluz100/Project-2")}>https://github.com/Angeluz100/Project-2</a>
            </>
    
        )
        PopupboxManager.open({ content })
    }

    const popupboxConfigHomeTracker = {
        titleBar:{
            enable: true,
            text: "Home Tracker Project."
        },
        fadeIn: true,
        fadeInSpeed: 500
    }

    const openPopupboxDreamPlaces = () => {
        const content =(
            <>
            <img className="portfolio-image-popupbox"src={dreamPlaces} alt="Dream Places Project..." />
            <p>A full stack MERN app saving a collection of places one would like to visit, 
            <br/>    
            moreover I also used google firebase and deployed the backend to Heroku
            </p>
            <b>Netlify:</b> <a className="hyper-link" onClick={() => window.open("https://react-dream-places.netlify.app/")}>https://react-dream-places.netlify.app/</a>
            <br/>
            <b>Github:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/Angeluz100/React-project-3")}>https://github.com/Angeluz100/React-project-3</a>
            </>
    
        )
        PopupboxManager.open({ content })
    }

    const popupboxConfigDreamPlaces = {
        titleBar:{
            enable: true,
            text: "Dream Places Project."
        },
        fadeIn: true,
        fadeInSpeed: 500
    }

    const openPopupboxDailyPractices = () => {
        const content =(
            <>
            <img className="portfolio-image-popupbox"src={dailyPractices} alt="Daily Practices Project..." />
            <p>A full stack CRUD helping people to keep track of their daily practices.
                <br/>
            Technology used Python and Django.
            </p>
            <b>Heroku:</b> <a className="hyper-link" onClick={() => window.open("https://django-practices-app.herokuapp.com/")}>https://django-practices-app.herokuapp.com/</a>
            <br/>
            <b>Github:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/Angeluz100/Project5")}>https://github.com/Angeluz100/Project5</a>
            </>
    
        )
        PopupboxManager.open({ content })
    }

    const popupboxConfigDailyPractices = {
        titleBar:{
            enable: true,
            text: "Project."
        },
        fadeIn: true,
        fadeInSpeed: 500
    }
    return (
        <div  id="portfolio" className="portfolio-wrapper">
            <div className="container">
                <h1 className="text-uppercase text-center py-5">portfolio</h1>
                <div className="image-box-wrapper row justify-content-center">
                <div className="portfolio-image-box" onClick={openPopupboxSuperheros}>
                    <img className="portfolio-image" src={superheros} alt="Superheros Project..."/>
                    <div className="overflow"></div>
                    <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                </div>
                {/* - */}
                <div className="portfolio-image-box" onClick={openPopupboxHomeTracker}>               
                    <img className="portfolio-image" src={homeTracker} alt="Home Tracker Project..."/>
                    <div className="overflow"></div>
                    <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                </div>
                {/* - */}
                <div className="portfolio-image-box" onClick={openPopupboxDreamPlaces}>                
                   <img className="portfolio-image" src={dreamPlaces} alt="Dream Places Project..."/>
                   <div className="overflow"></div>
                    <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                </div>
                {/* - */}
                <div className="portfolio-image-box" onClick={openPopupboxDailyPractices}> 
                    <img className="portfolio-image" src={dailyPractices} alt="Daily Practices Project..."/>
                    <div className="overflow"></div>
                    <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                </div>
                </div>
            </div>
            <PopupboxContainer {...popupboxConfigSuperheros} />
            <PopupboxContainer {...popupboxConfigHomeTracker} />
            <PopupboxContainer {...popupboxConfigDreamPlaces} />
            <PopupboxContainer {...popupboxConfigDailyPractices} />
        </div>
    )
}


export default Portfolio;