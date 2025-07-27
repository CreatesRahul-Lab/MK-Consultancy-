import { motion } from 'framer-motion'
import { useState } from 'react'
import './NewsletterSignup.css'

const NewsletterSignup = () => {
  const [email, setEmail] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!email) return

    setIsLoading(true)
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitted(true)
      setIsLoading(false)
      setEmail('')
    }, 1000)
  }

  return (
    <section className="newsletter-section">
      <div className="container">
        <motion.div 
          className="newsletter-content"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="newsletter-text">
            <h2>Stay Ahead of the Curve</h2>
            <p>
              Get exclusive insights, tips, and strategies delivered to your inbox. 
              Join 2,000+ business leaders who trust our weekly newsletter.
            </p>
            <div className="newsletter-benefits">
              <div className="benefit">
                <span className="benefit-icon">📊</span>
                <span>Weekly market insights</span>
              </div>
              <div className="benefit">
                <span className="benefit-icon">💡</span>
                <span>Growth strategies & tips</span>
              </div>
              <div className="benefit">
                <span className="benefit-icon">📈</span>
                <span>Industry trend analysis</span>
              </div>
            </div>
          </div>

          <div className="newsletter-form-container">
            {!isSubmitted ? (
              <form className="newsletter-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="email-input"
                  />
                  <motion.button
                    type="submit"
                    className="subscribe-btn"
                    disabled={isLoading}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {isLoading ? (
                      <motion.div
                        className="loading-spinner"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      />
                    ) : (
                      'Subscribe'
                    )}
                  </motion.button>
                </div>
                <p className="form-disclaimer">
                  No spam, unsubscribe at any time. We respect your privacy.
                </p>
              </form>
            ) : (
              <motion.div 
                className="success-message"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <div className="success-icon">✅</div>
                <h3>Welcome aboard!</h3>
                <p>Thank you for subscribing. Check your email for a welcome message.</p>
              </motion.div>
            )}
          </div>
        </motion.div>

        <motion.div 
          className="newsletter-stats"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="stat">
            <span className="stat-number">2K+</span>
            <span className="stat-label">Subscribers</span>
          </div>
          <div className="stat">
            <span className="stat-number">95%</span>
            <span className="stat-label">Open Rate</span>
          </div>
          <div className="stat">
            <span className="stat-number">4.9/5</span>
            <span className="stat-label">Rating</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default NewsletterSignup
