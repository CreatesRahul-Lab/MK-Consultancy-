import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import './About.css'

const About = () => {
  const team = [
    {
      name: "Marcus Rodriguez",
      role: "Co-Founder & CEO",
      image: "MR",
      bio: "10+ years in performance marketing and data analytics. Former consultant at McKinsey & Company."
    },
    {
      name: "Rachel Chen",
      role: "Co-Founder & CTO",
      image: "RC",
      bio: "Expert in business forecasting and data science. PhD in Statistics from Stanford University."
    }
  ]

  const values = [
    {
      icon: "🎯",
      title: "Results-Driven",
      description: "We focus on delivering measurable outcomes that directly impact your bottom line."
    },
    {
      icon: "📊",
      title: "Data-Centric",
      description: "Every decision we make is backed by solid data and proven methodologies."
    },
    {
      icon: "🤝",
      title: "Partnership",
      description: "We work alongside you as trusted partners, not just service providers."
    },
    {
      icon: "🚀",
      title: "Innovation",
      description: "We stay ahead of trends and leverage cutting-edge tools and strategies."
    }
  ]

  return (
    <div className="about-page">
      <motion.section 
        className="about-hero"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container">
          <h1>About M&R Consulting</h1>
          <p>
            We're a team of growth experts dedicated to helping businesses unlock their full potential 
            through strategic marketing, data-driven insights, and innovative solutions.
          </p>
        </div>
      </motion.section>

      <section className="about-story">
        <div className="container">
          <motion.div 
            className="story-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="story-text">
              <h2>Our Story</h2>
              <p>
                Founded in 2019, M&R Consulting was born from a simple belief: every business, 
                regardless of size, deserves access to world-class marketing expertise and data insights.
              </p>
              <p>
                After working with Fortune 500 companies and seeing the gap between large enterprises 
                and smaller businesses, our founders Marcus and Rachel decided to democratize access 
                to premium consulting services.
              </p>
              <p>
                Today, we've helped over 150 businesses achieve sustainable growth through our proven 
                methodologies in performance marketing, forecasting, and data storytelling.
              </p>
            </div>
            <div className="story-image">
              <div className="image-placeholder">
                <span>📈</span>
                <h3>5+ Years</h3>
                <p>of proven expertise</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="about-team">
        <div className="container">
          <motion.div 
            className="section-title"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2>Meet Our Team</h2>
            <p>
              The experts behind your success
            </p>
          </motion.div>

          <div className="team-grid">
            {team.map((member, index) => (
              <motion.div
                key={index}
                className="team-card"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <div className="member-avatar">
                  {member.image}
                </div>
                <h3>{member.name}</h3>
                <p className="member-role">{member.role}</p>
                <p className="member-bio">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="about-values">
        <div className="container">
          <motion.div 
            className="section-title"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2>Our Values</h2>
            <p>
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="values-grid">
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="value-card"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="value-icon">{value.icon}</div>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="about-cta">
        <div className="container">
          <motion.div 
            className="cta-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2>Ready to Work Together?</h2>
            <p>
              Let's discuss how we can help your business achieve its growth goals.
            </p>
            <Link to="/contact" className="btn-primary">
              Get Started Today
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default About
