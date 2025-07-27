import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import BusinessAnimations from './BusinessAnimations'
import './Hero.css'
import './BusinessAnimations.css'

const Hero = () => {
  // Pulse variants for statistics
  const pulseVariants = {
    animate: {
      scale: [1, 1.05, 1],
      opacity: [0.8, 1, 0.8],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  }

  return (
    <section className="hero">
      <div className="hero-background">
        {/* Professional Business Lottie Animations */}
        <BusinessAnimations />

        {/* Enhanced Business Shapes */}
        <div className="hero-shapes">
          <motion.div 
            className="shape shape-1 business-shape"
            animate={{ 
              rotate: 360,
              scale: [1, 1.1, 1]
            }}
            transition={{ 
              duration: 25,
              repeat: Infinity,
              ease: "linear"
            }}
          />
          <motion.div 
            className="shape shape-2 business-shape"
            animate={{ 
              rotate: -360,
              y: [0, -20, 0]
            }}
            transition={{ 
              duration: 30,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div 
            className="shape shape-3 analytics-shape"
            animate={{ 
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360]
            }}
            transition={{ 
              duration: 35,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>
      </div>
      
      <div className="container">
        <div className="hero-content">
          <motion.div 
            className="hero-text"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1>
              Grow Your Business 
              <span className="highlight"> Smarter & Faster</span>
            </h1>
            <p>
              We help small businesses, e-commerce brands, and nonprofits unlock their growth potential 
              through performance marketing, data-driven forecasting, and compelling storytelling.
            </p>
            <div className="hero-buttons">
              <Link to="/contact" className="btn-primary">
                Get Free Consultation
              </Link>
              <Link to="/services" className="btn-secondary">
                View Our Services
              </Link>
            </div>
            <div className="hero-stats">
              <motion.div 
                className="stat"
                variants={pulseVariants}
                animate="animate"
              >
                <span className="stat-number">150+</span>
                <span className="stat-label">Clients Served</span>
              </motion.div>
              <motion.div 
                className="stat"
                variants={pulseVariants}
                animate="animate"
                style={{ animationDelay: '0.5s' }}
              >
                <span className="stat-number">300%</span>
                <span className="stat-label">Avg. Growth</span>
              </motion.div>
              <motion.div 
                className="stat"
                variants={pulseVariants}
                animate="animate"
                style={{ animationDelay: '1s' }}
              >
                <span className="stat-number">5</span>
                <span className="stat-label">Years Experience</span>
              </motion.div>
            </div>
          </motion.div>
          
          <motion.div 
            className="hero-image"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="image-placeholder">
              <div className="dashboard-mockup">
                <div className="dashboard-header">
                  <motion.div 
                    className="dashboard-nav"
                    animate={{ width: [40, 60, 40] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  />
                </div>
                <div className="dashboard-content">
                  <div className="chart-area">
                    <motion.div 
                      className="growth-line"
                      initial={{ scaleX: 0, opacity: 0 }}
                      animate={{ scaleX: 1, opacity: 1 }}
                      transition={{ duration: 2, delay: 1 }}
                    />
                    <motion.div 
                      className="data-points"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 2 }}
                    >
                      {[...Array(5)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="data-point"
                          animate={{
                            scale: [1, 1.2, 1],
                            opacity: [0.7, 1, 0.7]
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: i * 0.3
                          }}
                          style={{
                            left: `${20 + i * 15}%`,
                            top: `${60 - i * 8}%`
                          }}
                        />
                      ))}
                    </motion.div>
                  </div>
                  <div className="metrics">
                    {[...Array(3)].map((_, i) => (
                      <motion.div 
                        key={i}
                        className="metric-card"
                        animate={{
                          height: [30, 40, 30],
                          background: [
                            'linear-gradient(45deg, #3b82f6, #2563eb)',
                            'linear-gradient(45deg, #10b981, #059669)',
                            'linear-gradient(45deg, #3b82f6, #2563eb)'
                          ]
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          delay: i * 0.5
                        }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero
