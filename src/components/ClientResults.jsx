import { motion, useInView } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import ScrollParallaxText from './ScrollParallaxText'
import './ClientResults.css'

const ClientResults = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const stats = [
    {
      number: 150,
      suffix: '+',
      label: 'Happy Clients',
      description: 'Businesses we\'ve helped grow'
    },
    {
      number: 300,
      suffix: '%',
      label: 'Average Growth',
      description: 'Revenue increase for our clients'
    },
    {
      number: 50,
      suffix: 'M+',
      label: 'Revenue Generated',
      description: 'Total revenue driven for clients'
    },
    {
      number: 98,
      suffix: '%',
      label: 'Client Satisfaction',
      description: 'Clients who recommend us'
    }
  ]

  const AnimatedCounter = ({ number, suffix, isVisible }) => {
    const [count, setCount] = useState(0)

    useEffect(() => {
      if (!isVisible) return

      const duration = 2000 // 2 seconds
      const steps = 60
      const increment = number / steps
      let current = 0

      const timer = setInterval(() => {
        current += increment
        if (current >= number) {
          setCount(number)
          clearInterval(timer)
        } else {
          setCount(Math.floor(current))
        }
      }, duration / steps)

      return () => clearInterval(timer)
    }, [number, isVisible])

    return <span>{count}{suffix}</span>
  }

  return (
    <section className="client-results" ref={ref}>
      <div className="container">
        <motion.div 
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2>Proven Results That Speak</h2>
          <p>
            Our data-driven approach delivers measurable results for businesses across industries
          </p>
        </motion.div>

        <div className="results-grid">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="result-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <div className="result-icon">
                <motion.div
                  className="icon-circle"
                  animate={{
                    rotate: 360
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                >
                  <div className="icon-dot"></div>
                </motion.div>
              </div>
              <div className="result-number">
                <AnimatedCounter 
                  number={stat.number} 
                  suffix={stat.suffix}
                  isVisible={isInView}
                />
              </div>
              <h3>{stat.label}</h3>
              <p>{stat.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="results-testimonial"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <ScrollParallaxText />
        </motion.div>
      </div>
    </section>
  )
}

export default ClientResults
