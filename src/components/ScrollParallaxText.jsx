import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import './ScrollParallaxText.css'

const ScrollParallaxText = () => {
  const containerRef = useRef(null)
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  // Different transform ranges for each row - extended for full width coverage
  const x1 = useTransform(scrollYProgress, [0, 1], [100, -400])
  const x2 = useTransform(scrollYProgress, [0, 1], [-100, 400])
  const x3 = useTransform(scrollYProgress, [0, 1], [150, -350])

  const businessKeywords = {
    row1: ['INNOVATION', 'STRATEGY', 'PERFORMANCE', 'EXCELLENCE', 'GROWTH'],
    row2: ['SCALING', 'OPTIMIZATION', 'MARKETING', 'DATA-DRIVEN', 'RESULTS'],
    row3: ['ANALYTICS', 'FORECASTING', 'TRANSFORMATION', 'SUCCESS', 'IMPACT']
  }

  return (
    <div className="scroll-parallax-container" ref={containerRef}>
      <div className="parallax-content">
        {/* Row 1 - Moving Left */}
        <motion.div 
          className="parallax-row row-1"
          style={{ x: x1 }}
        >
          {businessKeywords.row1.map((word, index) => (
            <span key={index} className="parallax-word">
              {word}
            </span>
          ))}
        </motion.div>

        {/* Row 2 - Moving Right */}
        <motion.div 
          className="parallax-row row-2"
          style={{ x: x2 }}
        >
          {businessKeywords.row2.map((word, index) => (
            <span key={index} className="parallax-word">
              {word}
            </span>
          ))}
        </motion.div>

        {/* Row 3 - Moving Left (Slower) */}
        <motion.div 
          className="parallax-row row-3"
          style={{ x: x3 }}
        >
          {businessKeywords.row3.map((word, index) => (
            <span key={index} className="parallax-word">
              {word}
            </span>
          ))}
        </motion.div>
      </div>
    </div>
  )
}

export default ScrollParallaxText
