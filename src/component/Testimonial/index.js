import React from "react";
import { motion } from "framer-motion";
import "./style.css";

const testimonials = [
  {
    name: "Mohit Kumar",
    stream: "CSE Stream",
    text:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text",
  },
  {
    name: "Mohit Kumar",
    stream: "CSE Stream",
    text:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text",
  },
  {
    name: "Mohit Kumar",
    stream: "CSE Stream",
    text:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text",
  },
  {
    name: "Mohit Kumar",
    stream: "CSE Stream",
    text:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text",
  },
];

const Testimonial = () => {
  return (
    <div className="testimonial-section">
      <h2 className="testimonial-title">Student Testimonial</h2>
      <div className="testimonial-scroll">
        <div className="testimonial-container">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="testimonial-card"
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="testimonial-header">
                <div className="testimonial-avatar" />
                <div>
                  <h4>{testimonial.name}</h4>
                  <p>{testimonial.stream}</p>
                </div>
              </div>
              <p className="testimonial-text"><em>{testimonial.text}</em></p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
