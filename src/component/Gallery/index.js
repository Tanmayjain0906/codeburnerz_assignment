import { motion } from "framer-motion";
import "./style.css";
import gallery_1 from "../../assets/gallery_1.svg"
import gallery_2 from "../../assets/gallery_2.svg"
import gallery_3 from "../../assets/gallery_3.svg"
import gallery_4 from "../../assets/gallery_4.svg"
import gallery_5 from "../../assets/gallery_5.svg"
import gallery_6 from "../../assets/gallery_6.svg"
import gallery_7 from "../../assets/gallery_7.svg"
import gallery_8 from "../../assets/gallery_8.svg"
import gallery_9 from "../../assets/gallery_9.svg"
import gallery_10 from "../../assets/gallery_10.svg"

const images = [
  gallery_1, gallery_2, gallery_3, gallery_4, gallery_5, gallery_6, gallery_7, gallery_8, gallery_9, gallery_10
];

function  Gallery() {
  return (
    <div className="awards-container">
      <motion.h2 
        className="awards-title"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Awards & Recognition Received By Arya College
      </motion.h2>

      <motion.p 
        className="awards-subtitle"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        ARYA provide Excellent Infrastructure & propitious Academics for Professional & Technical Growth of all the Students and Faculty Members.
      </motion.p>

      <motion.div 
        className="awards-buttons"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <button className="btn-outline">Awards</button>
        <button className="btn-filled">Students Life</button>
      </motion.div>

      <motion.div 
        className="awards-grid"
        initial="hidden"
        whileInView="visible"
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.1
            }
          }
        }}
        viewport={{ once: true }}
      >
        {images.map((img, index) => (
          <motion.div 
            className={`awards-img-wrapper-${index}`}
            key={index}
            variants={{
              hidden: { opacity: 0, scale: 0.95 },
              visible: { opacity: 1, scale: 1 }
            }}
            transition={{ duration: 0.4 }}
          >
            <img src={img} alt={`Award ${index + 1}`} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
} 

export default Gallery
