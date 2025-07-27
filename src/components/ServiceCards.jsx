import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import './ServiceCards.css'

const ServiceCards = () => {
  const services = [
    {
      id: 1,
      title: "Performance Marketing",
      description: "Data-driven marketing strategies that deliver measurable ROI and sustainable growth for your business.",
      icon: "📈",
      features: ["PPC Campaign Management", "Social Media Advertising", "Conversion Optimization", "A/B Testing"]
    },
    {
      id: 2,
      title: "Business Forecasting",
      description: "Predictive analytics and strategic planning to help you make informed decisions and plan for the future.",
      icon: "🔮",
      features: ["Revenue Forecasting", "Market Analysis", "Risk Assessment", "Growth Planning"]
    },
    {
      id: 3,
      title: "Data Storytelling",
      description: "Transform complex data into compelling narratives that drive action and inspire stakeholders.",
      icon: "📊",
      features: ["Data Visualization", "Executive Dashboards", "Performance Reports", "Insight Generation"]
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  return (
    <section className="services-section">
      <div className="container">
        <motion.div 
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2>Our Services</h2>
          <p>We offer comprehensive solutions to help your business grow smarter and faster</p>
        </motion.div>

        <motion.div 
          className="services-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              className="service-card"
              variants={cardVariants}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.3 }
              }}
            >
              <div className="service-icon">
                <span>{service.icon}</span>
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <ul className="service-features">
                {service.features.map((feature, index) => (
                  <li key={index}>✓ {feature}</li>
                ))}
              </ul>
              <motion.div 
                className="service-link"
                whileHover={{ x: 5 }}
              >
                <Link to="/services">Learn More →</Link>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="services-cta"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <h3>Ready to Transform Your Business?</h3>
          <p>Let's discuss how our services can help you achieve your goals</p>
          <Link to="/contact" className="btn-primary">
            Get Started Today
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default ServiceCards
