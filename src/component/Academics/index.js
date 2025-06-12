import React from "react";
import "./style.css";
import { motion } from "framer-motion";
import under_graduation from "../../assets/under_graduation.svg";
import post_graduation from "../../assets/post_graduation.svg";
import pharma from "../../assets/pharma.svg";
import online_admission from "../../assets/online_admission.png";

const cards = [
  {
    title: "Under Graduation",
    icon: under_graduation,
    style: "white-card",
    id: "1",
  },
  {
    title: "Post Graduation",
    icon: post_graduation,
    style: "border-card",
    id: "2",
  },
  {
    title: "Pharma and Medical",
    icon: pharma,
    style: "border-card",
    id: "3",
  },
  {
    title: "Online Admission Procedure",
    icon: online_admission,
    style: "gradient-card",
    id: "4",
  },
];

function Academics() {
  return (
    <motion.div
      className="arya-section"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <motion.div
        className="left-content-academics"
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        <span className="tag">Academics</span>
        <h2 className="title">
          Successfully Complete Your <br /> Degree At Arya College
        </h2>
        <p className="description">
          Arya College is the Best Engineering College in the entire Rajasthan. We don’t just
          teach students, but we train them to be successful professionals. We motivate and orient
          our students and to take on the corporate world.
        </p>
      </motion.div>

      <div className="right-grid">
        {cards.map((card) => (
          <motion.div
            key={card.id}
            className={`academic-card ${card.style}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: card.id * 0.15 }}
            whileHover={{ scale: 1.05 }}
          >
            <div className="icon">
              <img src={card.icon} id={`card-${card.id}`} alt={card.title} />
            </div>
            <h4>{card.title}</h4>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

export default Academics;
