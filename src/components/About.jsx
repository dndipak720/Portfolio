import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';

const About = () => {
  const timeline = [
    {
      year: '2020',
      qualification: '10th Standard',
      institute: 'K.C. Government High School',
      degree: 'Secondary Education',
      description: 'Completed secondary education with focus on science and mathematics, achieving excellent academic performance.'
    },
    {
      year: '2022',
      qualification: '12th Standard',
      institute: 'P.N. Autonomous College',
      degree: 'Higher Secondary Education',
      description: 'Completed higher secondary education in science stream with computer science as a core subject.'
    },
    {
      year: '2023-Present',
      qualification: 'Bachelor of Technology',
      institute: 'GITA Autonomous College',
      degree: 'B.Tech in Computer Science',
      description: 'Currently pursuing B.Tech in Computer Science and Engineering with specialization in web technologies and software development.'
    }
  ];

  return (
    <section id="about" className="about">
      <div className="container">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>About Me</h2>

          <div className="about-content">
            <div className="about-text">
              <p className="about-description">
                I'm a passionate full-stack developer with expertise in building modern web applications.
                My journey in tech started with a curiosity for creating things that make a difference.
              </p>
              
              <div className="timeline">
                {timeline.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 }}
                    className="timeline-item"
                  >
                    <div className="timeline-year">
                      {item.year}
                    </div>
                    <div className="timeline-content">
                      <h3>{item.qualification}</h3>
                      <p className="timeline-institute">{item.institute}</p>
                      <p className="timeline-degree">{item.degree}</p>
                      <p className="timeline-description">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="profile-image-container">
              <Tilt
                tiltMaxAngleX={10}
                tiltMaxAngleY={10}
                perspective={1000}
                scale={1.05}
                transitionSpeed={2000}
                className="profile-tilt"
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="profile-image-wrapper"
                >
                  <img
                    src="images/profile.jpg"
                    alt="Profile"
                    className="profile-image"
                  />
                  <div className="profile-overlay" />
                </motion.div>
              </Tilt>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
