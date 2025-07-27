import React from 'react';
import Lottie from 'lottie-react';
import { motion } from 'framer-motion';

// Import the business growth animation
import businessGrowthData from '../assets/business-growth.json';

const BusinessAnimations = () => {
  // Simple business-themed emoji animations as fallback
  const BusinessIcon = ({ icon, className, delay = 0 }) => (
    <motion.div
      className={`business-lottie-icon ${className}`}
      initial={{ opacity: 0, scale: 0.5, rotate: -180 }}
      animate={{ 
        opacity: [0.6, 1, 0.6],
        scale: [0.8, 1.1, 0.8],
        rotate: [0, 10, -10, 0],
        y: [0, -20, 0]
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        delay: delay,
        ease: "easeInOut"
      }}
    >
      {icon}
    </motion.div>
  );

  return (
    <div className="business-lottie-container">
      {/* Main Business Growth Animation */}
      <motion.div 
        className="main-lottie-animation"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.8, scale: 1 }}
        transition={{ duration: 1.5, delay: 0.5 }}
      >
        <Lottie 
          animationData={businessGrowthData}
          loop={true}
          autoplay={true}
          style={{ 
            width: 300, 
            height: 225,
            filter: 'drop-shadow(0 4px 12px rgba(37, 99, 235, 0.2))'
          }}
        />
      </motion.div>

      {/* Business Icons Grid */}
      <div className="business-icons-grid">
        <BusinessIcon 
          icon="📈" 
          className="chart-growth"
          delay={0}
        />
        <BusinessIcon 
          icon="💼" 
          className="business-case"
          delay={0.5}
        />
        <BusinessIcon 
          icon="🎯" 
          className="target-achievement"
          delay={1}
        />
        <BusinessIcon 
          icon="💰" 
          className="revenue-growth"
          delay={1.5}
        />
        <BusinessIcon 
          icon="📊" 
          className="analytics-chart"
          delay={2}
        />
        <BusinessIcon 
          icon="🚀" 
          className="business-launch"
          delay={2.5}
        />
      </div>

      {/* Floating Data Points */}
      <div className="floating-data-points">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="data-point"
            animate={{
              y: [0, -100, -200],
              opacity: [0, 1, 0],
              scale: [0.5, 1, 0.5]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              delay: i * 1.3,
              ease: "easeOut"
            }}
            style={{
              left: `${15 + i * 12}%`,
              bottom: '10%'
            }}
          />
        ))}
      </div>

      {/* Success Metrics Animation */}
      <motion.div 
        className="success-metrics"
        animate={{
          scale: [1, 1.05, 1],
          opacity: [0.7, 1, 0.7]
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <div className="metric-indicator">✨</div>
        <div className="metric-indicator">�</div>
        <div className="metric-indicator">�</div>
      </motion.div>
    </div>
  );
};

export default BusinessAnimations;
