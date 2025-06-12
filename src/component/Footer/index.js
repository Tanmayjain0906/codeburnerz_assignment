import React from "react";
import { motion } from "framer-motion";
import logo_7 from "../../assets/logo_7.svg"
import fb_icon from "../../assets/facebook_icon.svg"
import insta_icon from "../../assets/insta_icon.svg"
import twitter_icon from "../../assets/twitter_icon.svg"
import youtube_icon from "../../assets/youtube_icon.svg"
import "./style.css";

const Footer = () => {
    return (
        <motion.footer
            className="ui-footer"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
        >
            <div className="ui-footer-container">
                <div className="ui-footer-section about">
                    <div className="ui-footer-logo-section">
                        <img
                            src={logo_7}
                            alt="Arya Group of Colleges"
                            className="ui-footer-logo"
                        />
                        <p className="ui-footer-description">
                            Arya College is the Best Engineering College in the entire Rajasthan.
                        </p>
                    </div>

                    <div className="ui-footer-address">
                        <h4>Address</h4>
                        <p>SP-40, RIICO Industrial Area, Kukas, Jaipur, Rajasthan, 302028</p>
                    </div>
                    <div className="ui-footer-social">
                        <h4>Social Media</h4>
                        <div className="ui-footer-icons">
                            <i className="fab fa-facebook-f"><img src={fb_icon}/></i>
                            <i className="fab fa-instagram"><img src={insta_icon}/></i>
                            <i className="fab fa-twitter"><img src={twitter_icon}/></i>
                            <i className="fab fa-youtube"><img src={youtube_icon}/></i>
                        </div>
                    </div>
                </div>

                <div className="ui-footer-section">
                    <h4>Quick Links</h4>
                    <ul>
                        <li>About Us</li>
                        <li>News</li>
                        <li>Placement</li>
                        <li>Contact us</li>
                        <li>Blogs</li>
                        <li>Resources</li>
                        <li>Mail Center</li>
                        <li>Google</li>
                        <li>Wikipedia</li>
                    </ul>
                </div>

                <div className="ui-footer-section">
                    <h4>Admissions</h4>
                    <ul>
                        <li>Download</li>
                        <li>Prospectus</li>
                        <li>Admission Procedure</li>
                        <li>Fee Structure</li>
                        <li>Our Affiliation</li>
                        <li>Degree Status</li>
                        <li>Bank Loan Assistance</li>
                        <li>Industrial Alliances</li>
                        <li>Privacy Policy</li>
                        <li>Terms and Conditions</li>
                        <li>Refund Policy</li>
                    </ul>
                </div>

                <div className="ui-footer-section">
                    <h4>Other Links</h4>
                    <ul>
                        <li>Top Engineering College in Jaipur</li>
                        <li>Best Engineering College in Jaipur</li>
                        <li>Best B.Tech College in India</li>
                        <li>Best University for B.tech in India</li>
                        <li>Best Private University in India for b tech</li>
                        <li>Best Private Engineering College in India</li>
                        <li>Top 10 Private Engineering College in India</li>
                        <li>Bachelor of Technology – B Tech Courses</li>
                    </ul>
                </div>
            </div>
        </motion.footer>
    );
};

export default Footer;