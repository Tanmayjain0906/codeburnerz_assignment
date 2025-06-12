import React from 'react';
import banner from "../../assets/banner.png"
import logo_2 from "../../assets/log_2.svg"
import rtu from "../../assets/rtu.svg"
import naac from "../../assets/Naac.svg"
import award from "../../assets/Awards.svg"
import nba from "../../assets/Nba.svg"
import broucher from "../../assets/brochure.svg"
import virtual from "../../assets/virtual_tour.png"
import { motion } from 'framer-motion';
import './style.css';



const Home = () => {
  return (
    <div className="home-container">

      <main className="main-content">
        <motion.div
          className="left-content"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="admission-button">Admission Open 2023
          </div>
          <h1>Arya College</h1>
          <p>We don’t just teach students, but we train them to be successful professionals. We motivate and orient our students and to take on the corporate world.</p>
          <div className="buttons">
            <motion.button whileHover={{ scale: 1.1 }} className="brochure-btn">Brochure <img src={broucher} /></motion.button>
            <motion.button whileHover={{ scale: 1.1 }} className="readmore-btn">Read More</motion.button>
          </div>
        </motion.div>

        <motion.div
          className="right-content"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <img src={banner} alt="Campus" />
          <p className="virtual-tour"><img src={virtual} /> 360° Virtual Tour</p>
        </motion.div>
      </main>

      <motion.footer
        className="footer"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        <div className="success">
          <img src={logo_2} alt="Arya Logo" />
          <span>22 Years Of Success</span>
        </div>

        <div className="scroll-container">
          <div className="footer-cards">
            <div className="card">
              <img src={rtu} alt="RTU" />
              <p>Ranked "A" By RTU</p>
            </div>
            <div className="card">
              <img src={naac} alt="NAAC" />
              <p>Naac Accredited</p>
            </div>
            <div className="card">
              <img src={nba} alt="NBA" />
              <p>NBA Accredited (CSE Branch)</p>
            </div>
            <div className="card">
              <img src={rtu} alt="RTU Robotics" />
              <p>RTU CoE In Air (Robotics), PCB</p>
            </div>
            <div className="card">
              <img src={award} alt="Award" />
              <p>32 Awards Won</p>
            </div>
          </div>
        </div>
      </motion.footer>
    </div>
  );
};

export default Home;
