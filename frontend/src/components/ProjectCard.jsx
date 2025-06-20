import React from "react";
import { motion } from "framer-motion";
import { FiGithub, FiExternalLink, FiLinkedin } from "react-icons/fi";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      className="project-card"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="project-image">
        <LazyLoadImage
          src={project.image}
          alt={project.title}
          effect="blur"
          placeholderSrc="https://via.placeholder.com/600x400?text=Loading..."
        />
      </div>

      <div className="project-content">
        <h3>{project.title}</h3>
        <p>{project.description}</p>

        <div className="project-technologies">
          {project.technologies.map((tech, i) => (
            <span key={i}>{tech}</span>
          ))}
        </div>

        <div className="project-links">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Repository"
          >
            <FiGithub />
          </a>
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Live Demo"
          >
            <FiLinkedin />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
