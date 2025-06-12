import React, { useState } from "react";
import "./style.css";
import { motion } from "framer-motion";
import placement_2021 from "../../assets/placement_2021.svg"
import placement_2020 from "../../assets/placement_2020.svg"
import placement_2019 from "../../assets/placement_2019.svg"
import placement_2018 from "../../assets/placement_2018.svg"

const tabs = ["Highest Package", "Top Recruiters", "Award & Achievement", "Student Placed"];

const placements = [
  {
    year: "2021–2022 Placements",
    offers: "750+ Placements Offers",
    image: placement_2021,
    style: "red",
  },
  {
    year: "2020–2021 Placements",
    offers: "550+ Placements Offers",
    image: placement_2020,
    style: "gray",
  },
  {
    year: "2019–2020 Placements",
    offers: "820+ Placements Offers",
    image: placement_2019,
    style: "gray",
  },
  {
    year: "2018–2019 Placements",
    offers: "820+ Placements Offers",
    image: placement_2018,
    style: "gray",
  },
];

const Placement = () => {
  const [activeTab, setActiveTab] = useState("Highest Package");

  return (
    <div className="recruitment-section">
      <motion.h2
        className="recruitment-heading"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        Recruitment In Arya College
      </motion.h2>

      <div className="tab-buttons">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`tab-button ${tab === activeTab ? "active" : ""}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      <motion.div
        className="cards-grid"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        {placements.map((item, index) => (
          <motion.div
            className="placement-card"
            key={index}
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 250 }}
          >
            <img src={item.image} alt={item.year} />
            <div className="card-body">
              <div className="card-title" style={{color: item.style === "red" && "red"}}>{item.year}</div>
              <div className="card-subtext">{item.offers}</div>
            </div>
            <a href={item.pdf} className={`download-btn ${item.style}`}>
              
              Download PDF
            </a>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Placement;
