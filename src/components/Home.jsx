import React from "react";
// eslint-disable-next-line
import { motion } from "framer-motion";
import "./Home.css";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

const stagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const Home = () => {
  return (
    <section id="home" className="home">
      <motion.div
        className="container"
        initial="hidden"
        animate="visible"
        variants={stagger}
      >
        <motion.div className="greeting" variants={fadeIn}>
          <motion.span
            className="hand-icon"
            animate={{ rotate: [0, 20, 0] }}
            transition={{ repeat: Infinity, repeatDelay: 1.5, duration: 0.6 }}
          >
            👋
          </motion.span>{" "}
          Hey! It's me Budi.
        </motion.div>

        <motion.div className="headline" variants={fadeIn}>
          <h1>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              Crafting{" "}
            </motion.span>
            <motion.span
              className="highlight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              driven
            </motion.span>
            <br />
            <motion.span
              className="highlight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
            >
              experiences
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.6 }}
            >
              {" "}
              that inspire
            </motion.span>
            <br />
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.6 }}
            >
              & engage.
            </motion.span>
          </h1>
        </motion.div>

        <motion.div className="description" variants={fadeIn}>
          <p>
            Data Analytics and Business Intelligence Specialist with over 5
            years of experience delivering end-to-end BI solutions across
            Southeast Asia, Africa, and Australia. Proven track record in Power
            BI, Tableau and SAP Analytics Cloud focusing on dashboard
            automation, data governance, UAT, and cross-functional
            collaboration. Skilled at leading global rollouts, implementing
            row-level security, optimizing data pipelines, and conducting user
            training to improve adoption and decision-making efficiency.
          </p>
        </motion.div>

        <motion.div className="social-links" variants={fadeIn}>
          <motion.a
            href="https://linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
            whileHover={{ y: -3, x: 3 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            LINKEDIN{" "}
            <motion.span
              className="arrow"
              animate={{ x: [0, 3, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              ↗
            </motion.span>
          </motion.a>
          <motion.a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
            whileHover={{ y: -3, x: 3 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            GITHUB{" "}
            <motion.span
              className="arrow"
              animate={{ x: [0, 3, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              ↗
            </motion.span>
          </motion.a>
          <motion.a
            href="https://instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
            whileHover={{ y: -3, x: 3 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            INSTAGRAM{" "}
            <motion.span
              className="arrow"
              animate={{ x: [0, 3, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              ↗
            </motion.span>
          </motion.a>
          <motion.a
            href="mailto:your.email@example.com"
            className="social-link"
            whileHover={{ y: -3, x: 3 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            GMAIL{" "}
            <motion.span
              className="arrow"
              animate={{ x: [0, 3, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              ↗
            </motion.span>
          </motion.a>
        </motion.div>

        <motion.div className="cta-button" variants={fadeIn}>
          <motion.button
            className="button-cta"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Know me better
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Home;
