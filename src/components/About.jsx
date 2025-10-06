import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import "./About.css";
import profileImage from "../assets/profile.jfif";
const About = () => {
  return (
    <section id="about" className="about">
      <motion.div
        className="about-container"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <motion.div
          className="about-left"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.7 }}
        >
          <motion.img
            src={profileImage}
            alt="Profile"
            className="profile-image"
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 200 }}
          />
          <motion.div
            className="talk-badge"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            <div className="talk-circle">
              <motion.span className="arrow-icon" whileHover={{ scale: 1.2 }}>
                ↗
              </motion.span>
            </div>
            <div className="talk-text">LET'S TALK</div>
          </motion.div>
        </motion.div>

        <motion.div
          className="about-right"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.7 }}
        >
          <motion.h2
            className="about-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <motion.span>A </motion.span>
            <motion.span
              className="highlight"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7, duration: 0.5 }}
            >
              Business Intelligence Developer
            </motion.span>
            <br />
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.9, duration: 0.5 }}
            >
              & End-to-End Visualization
            </motion.span>
          </motion.h2>

          <motion.p
            className="about-description"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 1.1, duration: 0.5 }}
          >
            I collaborate with accross functional Teams to design impactful,
            mission-focused on Data that drive results and achieve business
            goals.
          </motion.p>

          <motion.a
            href="https://bit.ly/myresumembs"
            target="_blank"
            className="resume-button"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 1.3, duration: 0.5 }}
            whileHover={{
              scale: 1.05,
              backgroundColor: "#22c55e",
              color: "#fff",
              borderColor: "#22c55e",
            }}
            whileTap={{ scale: 0.95 }}
          >
            My Resume
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
