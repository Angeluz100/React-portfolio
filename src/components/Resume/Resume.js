import React from "react";
import FullResume from "../../images/torres-resume.pdf";
import Button from "react-bootstrap/Button";

const Resume = () => {
    return (
        <div  id="resume" className="resume">
            <div className="d-flex justify-content-center my-5">
                <h1>resume</h1>
            </div>
                <div className="container resume-wrapper">
                <div className="timeline-block timeline-block-left">
            <div className="marker"></div>
            <div className="timeline-content">
            <h3>2006-2011</h3>
            <p>HEAD MIXOLOGIST | Richard Sandoval Restaurants 
                <br/>
                Purchased liquor inventory with attention to budget and guidelines. 
                Supervised and trained staff in all aspects of bar service and equipment. 
                Arranged schedules and delegated and distributed specific tasks.
                Expanded exposure through bar promotions and events, growing both the brand and customer base.
                Facilitated occasional wine seminars for servers and drove an increase in wine sales.
                Served as head bartender and developed a strong guest following.
                </p>
            </div>
            </div>
        {/* - */}
            <div className="timeline-block timeline-block-right">
                <div className="marker"></div>
                    <div className="timeline-content">
                    <h3>2011-2018</h3>
                    <p>OPERATIONS MANAGER | Santoy Hospitality Group 
                        <br/>
                    Oversee operational aspects of SAX, OYA, SEI and Etete Restaurants.
                    Optimize profits by controlling food, beverage, and labor costs, and continuously strategize to improve these numbers.
                    Built sales over $500k and schedules to establish desired productivity targets.
                    Responsible for recruiting and training different in-house staff members, with a team over 20 ppl.
                    Work closely with the event manager to coordinate both large and small-scale events.
                    Monitor back-of-house efforts for consistent satisfaction, food quality and presentation.
                    Promote a culture of guest satisfaction and service for steady repeat business.
                    </p>
                </div>
            </div>
            {/* - */}
            <div className="timeline-block timeline-block-left">
                <div className="marker"></div>
                    <div className="timeline-content">
                    <h3>2018-Present</h3>
                    <p>REAL ESTATE ASSOCIATE | Metropolitan Realty 
                        <br/>
                    Generate client leads to buy, sell and rent property and counsel clients on market conditions, prices, and mortgages.
                    Develop a competitive market price by comparing properties and create property lists with location, features, and size details. 
                    Show properties to potential buyers and renters and promote properties with ads, listing, and open houses.
                    Present purchase offers to sellers and facilitate negotiations between buyers and sellers.
                    Review purchase contracts to ensure terms are met and prepare contracts, purchase agreements, deeds and transaction documents.
                    </p>
                </div>
            </div>
             {/* - */}
             <div className="timeline-block timeline-block-right">
                <div className="marker"></div>
                    <div className="timeline-content">
                        <Button className="resume-button" href={FullResume} target='_blank' variant="outlined-secondary"style={{  }}>
                            Full Resume Here
                    </Button>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Resume;