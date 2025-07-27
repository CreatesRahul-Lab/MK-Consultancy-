import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import './Services.css'

const Services = () => {
  const services = [
    {
      id: 'performance-marketing',
      title: 'Performance Marketing',
      subtitle: 'Drive measurable growth with data-driven campaigns',
      icon: '📈',
      description: 'Our performance marketing strategies are designed to deliver measurable ROI and sustainable growth. We use advanced analytics and proven methodologies to optimize every aspect of your marketing funnel.',
      features: [
        'PPC Campaign Management (Google Ads, Facebook Ads)',
        'Conversion Rate Optimization',
        'Marketing Automation Setup',
        'A/B Testing & Analytics',
        'Social Media Advertising',
        'Email Marketing Campaigns'
      ],
      process: [
        { step: 1, title: 'Audit & Analysis', desc: 'Comprehensive review of current marketing efforts' },
        { step: 2, title: 'Strategy Development', desc: 'Create customized marketing strategy' },
        { step: 3, title: 'Campaign Launch', desc: 'Execute campaigns across channels' },
        { step: 4, title: 'Optimization', desc: 'Continuous monitoring and improvement' }
      ],
      results: {
        metric1: { value: '300%', label: 'Avg. ROI Increase' },
        metric2: { value: '150%', label: 'Lead Generation' },
        metric3: { value: '45%', label: 'Cost Reduction' }
      }
    },
    {
      id: 'forecasting',
      title: 'Business Forecasting',
      subtitle: 'Make informed decisions with predictive analytics',
      icon: '🔮',
      description: 'Our advanced forecasting models help you anticipate market trends, plan resources, and make strategic decisions with confidence. We combine statistical modeling with industry expertise.',
      features: [
        'Revenue & Sales Forecasting',
        'Market Trend Analysis',
        'Risk Assessment & Planning',
        'Inventory Optimization',
        'Financial Planning Models',
        'Seasonal Demand Prediction'
      ],
      process: [
        { step: 1, title: 'Data Collection', desc: 'Gather historical and market data' },
        { step: 2, title: 'Model Building', desc: 'Create predictive models' },
        { step: 3, title: 'Validation', desc: 'Test model accuracy' },
        { step: 4, title: 'Implementation', desc: 'Deploy and monitor forecasts' }
      ],
      results: {
        metric1: { value: '95%', label: 'Forecast Accuracy' },
        metric2: { value: '30%', label: 'Cost Savings' },
        metric3: { value: '25%', label: 'Efficiency Gain' }
      }
    },
    {
      id: 'data-storytelling',
      title: 'Data Storytelling',
      subtitle: 'Transform complex data into compelling narratives',
      icon: '📊',
      description: 'We help you communicate insights effectively through compelling visualizations and narratives that drive action and inspire stakeholders across your organization.',
      features: [
        'Interactive Dashboards',
        'Executive Presentations',
        'Data Visualization Design',
        'Performance Reports',
        'KPI Development',
        'Insight Generation'
      ],
      process: [
        { step: 1, title: 'Data Analysis', desc: 'Identify key insights and patterns' },
        { step: 2, title: 'Story Structure', desc: 'Create narrative framework' },
        { step: 3, title: 'Visualization', desc: 'Design compelling visuals' },
        { step: 4, title: 'Presentation', desc: 'Deliver actionable insights' }
      ],
      results: {
        metric1: { value: '85%', label: 'Decision Speed' },
        metric2: { value: '70%', label: 'Stakeholder Buy-in' },
        metric3: { value: '60%', label: 'Time Savings' }
      }
    }
  ]

  return (
    <div className="services-page">
      <motion.section 
        className="services-hero"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container">
          <h1>Our Services</h1>
          <p>
            Comprehensive solutions designed to accelerate your business growth 
            through strategic marketing, predictive analytics, and data-driven insights.
          </p>
        </div>
      </motion.section>

      <section className="services-overview">
        <div className="container">
          <div className="services-grid">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                className="service-overview-card"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <div className="service-icon-large">
                  {service.icon}
                </div>
                <h2>{service.title}</h2>
                <p className="service-subtitle">{service.subtitle}</p>
                <p className="service-description">{service.description}</p>
                <div className="service-metrics">
                  <div className="metric">
                    <span className="metric-value">{service.results.metric1.value}</span>
                    <span className="metric-label">{service.results.metric1.label}</span>
                  </div>
                  <div className="metric">
                    <span className="metric-value">{service.results.metric2.value}</span>
                    <span className="metric-label">{service.results.metric2.label}</span>
                  </div>
                  <div className="metric">
                    <span className="metric-value">{service.results.metric3.value}</span>
                    <span className="metric-label">{service.results.metric3.label}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {services.map((service, serviceIndex) => (
        <section key={service.id} className={`service-detail ${serviceIndex % 2 === 1 ? 'alternate' : ''}`}>
          <div className="container">
            <motion.div 
              className="service-detail-content"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="service-info">
                <h2>{service.title}</h2>
                <h3>{service.subtitle}</h3>
                <div className="service-features">
                  <h4>What's Included:</h4>
                  <ul>
                    {service.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <div className="service-process">
                <h4>Our Process</h4>
                <div className="process-steps">
                  {service.process.map((step, index) => (
                    <motion.div
                      key={index}
                      className="process-step"
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className="step-number">{step.step}</div>
                      <div className="step-content">
                        <h5>{step.title}</h5>
                        <p>{step.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      ))}

      <section className="services-cta">
        <div className="container">
          <motion.div 
            className="cta-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2>Ready to Get Started?</h2>
            <p>
              Let's discuss which services are right for your business and create a 
              customized strategy for your growth goals.
            </p>
            <div className="cta-buttons">
              <Link to="/contact" className="btn-primary">
                Schedule Consultation
              </Link>
              <Link to="/blog" className="btn-secondary">
                Read Case Studies
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Services
