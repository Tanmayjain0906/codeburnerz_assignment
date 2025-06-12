import { motion } from "framer-motion";
import "./style.css";
import infrastructure_1 from "../../assets/infrastructure_1.png"
import infrastructure_2 from "../../assets/infrastructure_2.png"
import infrastructure_3 from "../../assets/infrastructure_3.png"
import infrastructure_4 from "../../assets/infrastructure_4.png"
import logo_5 from "../../assets/log_5.svg"
import logo_6 from "../../assets/log_6.svg"

const colleges = [
  {
    id: 1,
    img: infrastructure_1,
    code: "REAP Code: 10",
    short: "AIETM",
    name: "Arya Institute of Engg. Tech & Mgm",
    desc: "A.I.E.T.M., the Arya Institute of Engineering Technology & Management, is one of the most prominent colleges ...",
    isActive: true,
  },
  {
    id: 2,
    img: infrastructure_2,
    code: "REAP Code: 10",
    short: "AIET",
    name: "Arya Institute of Engg. & Tech",
    desc: "Another branch of Arya College is the Arya Institute of Engineering & Technology (A.I.E.T.), the foremost ...",
    isActive: false,
  },
  {
    id: 3,
    img: infrastructure_3,
    code: "REAP Code: 10",
    short: "ACERC",
    name: "Arya College of Engg. & Res Centre",
    desc: "The flagship of Arya college under the Arya group of colleges, the A.C.E.R.C., aims to prepare students for challenges through relevant training ...",
    isActive: false,
  },
  {
    id: 4,
    img: infrastructure_4,
    code: "REAP Code: 10",
    short: "ACP",
    name: "Arya College of Pharmacy",
    desc: "Arya Group of Colleges also has a college for pharmacy, the Arya College of Pharmacy, established in 2004...",
    isActive: false,
  },
];

function Infrastructure() {
  return (
    <div className="arya-container">
      <h2 className="arya-title">Arya Group Of Colleges, Jaipur,</h2>
      <p className="arya-subtitle">The best under one roof</p>

      <div className="card-grid">
        {colleges.map((college) => (
          <motion.div
            className="infrastructure-card"
            key={college.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="card-img-wrapper">
              <img src={college.img} alt={college.short} />
              <span className={`reap-code ${college.isActive ? "reap-code-active" : ""}`}>{college.code}</span>
            </div>
            <div className="card-content">
              <div className="college-header">
                <img src={college.isActive ? logo_5 : logo_6} alt="logo" className="college-logo" />
                <div>
                  <div className="college-short">{college.short}</div>
                  <div className="college-name">{college.name}</div>
                </div>
              </div>
              <p className="college-desc">{college.desc}</p>
              <div className="card-buttons">
                <button className="btn blue">View More</button>
                <button className="btn white">Apply Now</button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}


export default Infrastructure