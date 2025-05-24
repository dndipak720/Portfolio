import { motion } from 'framer-motion';
import Typewriter from 'typewriter-effect';
import { FiDownload, FiChevronDown } from 'react-icons/fi';
import { Link } from 'react-scroll';
import { useTheme } from '../context/ThemeContext';

const Hero = () => {
  const { darkMode } = useTheme();

  return (
    <section id="hero" className="hero">
      <div className="container hero-content">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="hero-image"
        >
          <div className="hero-image-container">
            <img
              src="/images/profile.jpg"
              alt="Your Name"
              className="hero-image-floating"
            />
          </div>
          <div className="hero-image-decoration"></div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="hero-text"
        >
          <h1>
            Hi, I'm <span className="highlight">Dipak Nayak</span>
          </h1>
          
          <div className="typewriter">
            <Typewriter
              options={{
                strings: [
                  'Full Stack Developer',
                  'MERN Stack Developer',
                  "Responsive Website Developer"
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </div>

          <p className="hero-description">
           From concept to deployment — building responsive, scalable apps through full-stack development and creative code.
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn btn-primary"
          >
            <FiDownload className="icon" />
            <span>Download Resume</span>
          </motion.button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="scroll-indicator"
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      >
        <Link to="about" spy={true} smooth={true} offset={-64} duration={500}>
          <FiChevronDown className="icon" />
        </Link>
      </motion.div>
    </section>
  );
};

export default Hero;
