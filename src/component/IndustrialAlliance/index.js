import React from "react";
import { motion } from "framer-motion";
import logo_3 from "../../assets/log_3.svg"
import logo_4 from "../../assets/log_4.svg"
import partner_1 from "../../assets/partner_1.svg"
import partner_2 from "../../assets/partner_2.svg"
import partner_3 from "../../assets/partner_3.svg"
import partner_4 from "../../assets/partner_4.svg"
import partner_5 from "../../assets/partner_5.svg"
import partner_6 from "../../assets/partner_6.svg"
import partner_7 from "../../assets/partner_7.svg"
import "./style.css";

const data = [
  "Arya College has a definite purpose and represents the inter-firm cooperative agreements aiming to achieve a competitive advantage for the partners.",
  "Arya College also highlights the primary advantage for the academic community, industry, research funding, and practical learning opportunities for students.",
  "It's a design or approach, and the primary motive is to create success factors among students.",
  "It extracts valuable lessons to help others utilize the strategic alliance between Arya college and its industries."
];

const logos = [
 partner_1,
 partner_2,
 partner_3,
 partner_4,
 partner_5,
 partner_6,
 partner_7
];

const IndustrialAlliance = () => {
  return (
    <div className="industrial-alliance">
      <motion.h2
        className="title"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Industrial Alliance
      </motion.h2>

      <motion.p
        className="description"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        Arya College Jaipur has a definite purpose and represents inter-firm cooperative agreements aiming to achieve a competitive advantage for the partners. Arya College Jaipur also highlights the primary advantage for the academic community, industry, research funding, and practical learning opportunities for students.
      </motion.p>

      <div className="cards-wrapper-custom">
        <div className="cards-container-custom">
          {data.map((text, index) => (
            <motion.div
              className={`custom-card ${index === 0 ? "highlighted" : ""}`}
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <img src={index === 0 ? logo_3 : logo_4} alt="Arya Logo" className="logo-custom" />
              <p>{text}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <motion.h3
        className="title"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Industrial Alliance
      </motion.h3>

      <div className="logos">
        {logos.map((logo, index) => (
          <motion.img
            src={logo}
            alt="Partner Logo"
            key={index}
            className="partner-logo"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          />
        ))}
      </div>
    </div>
  );
};

export default IndustrialAlliance;
