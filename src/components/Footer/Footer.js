import React from "react";
import { 
    FacebookShareButton,
    FacebookIcon,
    LinkedinShareButton,
    LinkedinIcon,

 } from "react-share";
 import { Link } from "react-scroll";

const Footer = () => {
    return (
        <div className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="d-flex">
                            <p>city Reston, VA 20191</p>
                        </div>
                        <div className="d-flex">
                            <a href="tel:240-380-8497">+1(240)380-8497</a>
                        </div>
                        <div className="d-flex">
                            <p>francotgutierrez@gmail.com</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-2 col-sm-6">
                        <div className="row">
                            <div className="col">
                                <Link smooth={true} to="home" offset={-110}className="footer-nav">Home</Link>
                                <br/>
                                <Link smooth={true} to="about" offset={-110}className="footer-nav">About Me</Link>
                                <br/>
                                <Link smooth={true} to="skills" offset={-110}className="footer-nav">Skills</Link>
                            </div>
                            <div className="col">
                                <Link smooth={true} to="resume" offset={-110}className="footer-nav">Resume</Link>
                                <br/>
                                <Link smooth={true} to="portfolio" offset={-110}className="footer-nav">Portfolio</Link>
                                <br/>
                                <Link smooth={true} to="contacts" offset={-110}className="footer-nav">Contacts</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5 col-md-5 col-sm-6 align-items-center">
                        <div className="d-flex justify-content-center">
                            <FacebookShareButton
                            url={"https://github.com/Angeluz100"}
                            quote={"FullStack Developer"}
                            hashtag="#javasript"
                            >
                                <FacebookIcon className="mx-3" size={36}/>
                            </FacebookShareButton>
                            <LinkedinShareButton
                            url={"https://github.com/Angeluz100"}
                            quote={"FullStack Developer"}
                            hashtag="#javasript"
                            >
                                < LinkedinIcon className="mx-3" size={36}/>
                            </LinkedinShareButton>
                        </div>
                        <p className="pt-3 text-center">
                            Copyright&copy;
                            {new Date().getFullYear()}&nbsp; All Rights Reserved

                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;