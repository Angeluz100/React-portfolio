import React from 'react';
import author from '../../me.jpg';

const AboutMe = () => {
    return (
        <div id="about" classname="container py-5">

            <div className="row">
                <div className="col-lg-6 col-xm-12">
                    <div className="photo-wrap mb-5">
                    <img className="profile-img" src={author} alt="author...."/>
                    </div>
                </div>
                <div className="col-lg-6 col-xm-12">
                    <h1 className="about-heading">about me</h1>
                <p>
                    Hello! I am Franco. I am a full stack software engineer motivated to learn and grow in a challenging, ever-changing field. I strive to engineer simple, effective, & powerful solutions for users on and around the Web. I have recently been working on learning different languages, and how to solve problems in those languages. I was drawn to software engineering because I wanted to deepen my technical expertise, and make a career change into a highly demanded and highly challenging field, with greater opportunities for growth.

                </p>
                </div>
            </div>

            </div>
    )
}

export default AboutMe;