import { motion } from "framer-motion";
import "./style.css";
import about_banner from "../../assets/about_banner.svg";

function About() {
  return (
    <motion.div
      className="arya-container"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 1.2, ease: "easeInOut" }}
    >
      <motion.h1
        className="heading"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Arya College Jaipur
      </motion.h1>

      <motion.p
        className="subheading"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        Arya College is the Best Engineering College in the entire Rajasthan. We don’t just
        teach students, but we train them to be successful professionals. We motivate and
        orient our students and to take on the corporate world.
      </motion.p>

      <div className="content">
        <motion.div
          className="mission-vision"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="block">
            <div className="label">Our Mission</div>
            <div className="text">
              <p>To Create a Progressive Academic Environment for the Students</p>
              <p>
                Help Students Achieve Qualities like Techno-Managerial Skills and become
                Innovative and Creative Professionals
              </p>
              <p>
                Develop Individuals who can Contribute in the Development and Progress of the
                Society, Nation & the World as a whole.
              </p>
            </div>
          </div>

          <div className="block">
            <div className="label">Our Vision</div>
            <div className="text">
              <p>To Emerge as the Best Educational Institute</p>
              <p>
                Work for Excellence in Imparting Quality Education to the Students
              </p>
              <p>
                Nurture various Talents as Innovative Professionals in Technical & Managerial
                field thereby making them Competitive to meet all the Future Challenges of
                Global Economy.
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="image-box"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <img src={about_banner} alt="Arya College" className="college-image" />

          <motion.div
            className="info-tag"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <div className="placed-text">
              <span>15500+<br />Students Placed</span>
              <div className="stars">★★★★★</div>
            </div>
            <button className="admission-btn">Admission Open</button>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default About;
