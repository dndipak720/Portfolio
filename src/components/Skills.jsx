import { useState } from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('frontend');

  const categories = {
    frontend: {
      title: 'Frontend',
      skills: [
        { name: 'HTML', level: 90 },
        { name: 'CSS', level: 80 },
        { name: 'JavaScript', level: 85 },
        { name: 'React.js', level: 95 },
        { name: 'Bootstrap', level: 88 },
      ]
    },
    backend: {
      title: 'Backend',
      skills: [
        { name: 'Node.js', level: 85 },
        { name: 'Python', level: 80 },
        { name: 'MongoDB', level: 75 },
        { name: 'SQL', level: 78 },
        { name: 'Express.js', level: 82 }
      ]
    },
    tools: {
      title: 'Tools & Others',
      skills: [
        { name: 'Git', level: 88 },
        { name: 'VS code', level: 75 },
        { name: 'Postman API', level: 70 },
        { name: 'Canva', level: 85 },
        { name: 'Adobe Express', level: 78 }
      ]
    }
  };

  return (
    <section id="skills" className="skills">
      <div className="container">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="skills-content"
        >
          <h2>Skills & Expertise</h2>

          {/* Category Tabs */}
          <div className="skill-categories">
            {Object.keys(categories).map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`category-tab ${activeCategory === category ? 'active' : ''}`}
              >
                {categories[category].title}
              </button>
            ))}
          </div>

          {/* Skills Grid */}
          <div className="skills-grid">
            {categories[activeCategory].skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="skill-item"
              >
                <div className="skill-header">
                  <span className="skill-name">{skill.name}</span>
                  <span className="skill-level">{skill.level}%</span>
                </div>
                <div className="skill-bar-bg">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="skill-bar-fill"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
