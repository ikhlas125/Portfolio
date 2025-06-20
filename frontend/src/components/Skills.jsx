import React from "react";
import { motion } from "framer-motion";
import "../styles/Skills.css";

const Skills = () => {
  // Categorized skills data (removed percentages)
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: "💻",
      skills: ["C", "C++", "Assembly Language"],
    },
    {
      title: "Database & Backend",
      icon: "🗄️",
      skills: ["Node.js", "Express", "SQL/MySQL"],
    },
    {
      title: "Tools & Platforms",
      icon: "🛠️",
      skills: ["Git/GitHub", "VS Code"],
    },
    {
      title: "Skills & Interests",
      icon: "🌟",
      skills: [
        "Sports",
        "Teamwork",
        "Quick Adapter",
        "Problem Solving",
        "Agile Methodologies",
      ],
    },
  ];

  return (
    <section className="skills" id="skills">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            My Skills
          </motion.h2>
        </motion.div>

        <p className="section-subtitle">
          Expertise across multiple domains with continuous learning
        </p>

        <div className="skills-container">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              className="skill-category"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
            >
              <div className="category-header">
                <div className="category-icon">{category.icon}</div>
                <h3>{category.title}</h3>
              </div>

              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    className="skill-item"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: skillIndex * 0.05 }}
                  >
                    <span className="skill-name">{skill}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
