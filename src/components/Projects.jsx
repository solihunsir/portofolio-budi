import React, { useState } from "react";
// eslint-disable-next-line
import { motion } from "framer-motion";
import "./Projects.css";
import projectsData from "../data/projectsData";

const Projects = () => {
  const [filter, setFilter] = useState("All");

  const filteredProjects =
    filter === "All"
      ? projectsData
      : projectsData.filter((project) => project.category === filter);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 },
    },
  };

  return (
    <section id="projects" className="projects">
      <motion.div
        className="projects-header"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <motion.div className="tag" whileHover={{ scale: 1.05 }}>
          <span className="tag-icon">✦</span> MY WORK
        </motion.div>

        <motion.h2
          className="projects-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          Creating next level digital products
        </motion.h2>

        <div className="filter-buttons">
          <motion.button
            className={`filter-btn ${filter === "All" ? "active" : ""}`}
            onClick={() => setFilter("All")}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            All
          </motion.button>
          <motion.button
            className={`filter-btn ${filter === "Development" ? "active" : ""}`}
            onClick={() => setFilter("Development")}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Development
          </motion.button>
          <motion.button
            className={`filter-btn ${filter === "Design" ? "active" : ""}`}
            onClick={() => setFilter("Design")}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Design
          </motion.button>
        </div>
      </motion.div>

      <motion.div
        className="projects-grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        {filteredProjects.map((project) => (
          <motion.div
            key={project.id}
            className="project-card"
            variants={itemVariants}
            whileHover={{ y: -8 }}
          >
            <motion.div
              className="project-image-container"
              whileHover={{ scale: 1.02 }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="project-image"
              />
            </motion.div>
            <motion.h3 className="project-title">{project.title}</motion.h3>
            <motion.p className="project-description">
              {project.description}
            </motion.p>
            <motion.div className="project-category">
              {project.category}
            </motion.div>

            {/* Teknologi*/}
            {project.technologies && (
              <motion.div className="project-tech">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </motion.div>
            )}

            {/* Link project */}
            <motion.div className="project-links">
              {project.link && (
                <motion.a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                  whileHover={{ scale: 1.05 }}
                >
                  View Project
                </motion.a>
              )}
              {project.github && (
                <motion.a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-github"
                  whileHover={{ scale: 1.05 }}
                >
                  GitHub
                </motion.a>
              )}
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Projects;
