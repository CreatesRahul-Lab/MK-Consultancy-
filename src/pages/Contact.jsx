import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { useState } from 'react'
import './Contact.css'

const Contact = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm()
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const onSubmit = async (data) => {
    setIsLoading(true)
    
    // Simulate API call
    setTimeout(() => {
      console.log('Form submitted:', data)
      setIsSubmitted(true)
      setIsLoading(false)
      reset()
    }, 1000)
  }

  return (
    <div className="contact-page">
      <motion.section 
        className="contact-hero"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container">
          <h1>Let's Start Your Growth Journey</h1>
          <p>
            Ready to transform your business? Get in touch with our team of experts 
            and discover how we can help you achieve your goals.
          </p>
        </div>
      </motion.section>

      <section className="contact-content">
        <div className="container">
          <div className="contact-grid">
            <motion.div 
              className="contact-info"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2>Get in Touch</h2>
              <p>
                We'd love to hear from you. Send us a message and we'll respond as soon as possible.
              </p>

              <div className="contact-methods">
                <div className="contact-method">
                  <div className="method-icon">📧</div>
                  <div className="method-details">
                    <h3>Email</h3>
                    <p>hello@mrconsulting.com</p>
                    <span>We'll respond within 24 hours</span>
                  </div>
                </div>

                <div className="contact-method">
                  <div className="method-icon">📞</div>
                  <div className="method-details">
                    <h3>Phone</h3>
                    <p>(555) 123-4567</p>
                    <span>Mon-Fri from 8am to 6pm</span>
                  </div>
                </div>

                <div className="contact-method">
                  <div className="method-icon">📍</div>
                  <div className="method-details">
                    <h3>Office</h3>
                    <p>123 Business Ave, Suite 100</p>
                    <span>New York, NY 10001</span>
                  </div>
                </div>
              </div>

              <div className="calendly-section">
                <h3>Schedule a Free Consultation</h3>
                <p>Book a 30-minute strategy call to discuss your goals and challenges.</p>
                <button className="calendly-btn">
                  📅 Book a Call
                </button>
              </div>
            </motion.div>

            <motion.div 
              className="contact-form-section"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {!isSubmitted ? (
                <form className="contact-form" onSubmit={handleSubmit(onSubmit)}>
                  <h2>Send us a Message</h2>
                  
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="firstName">First Name *</label>
                      <input
                        type="text"
                        id="firstName"
                        {...register('firstName', { required: 'First name is required' })}
                        className={errors.firstName ? 'error' : ''}
                      />
                      {errors.firstName && <span className="error-message">{errors.firstName.message}</span>}
                    </div>

                    <div className="form-group">
                      <label htmlFor="lastName">Last Name *</label>
                      <input
                        type="text"
                        id="lastName"
                        {...register('lastName', { required: 'Last name is required' })}
                        className={errors.lastName ? 'error' : ''}
                      />
                      {errors.lastName && <span className="error-message">{errors.lastName.message}</span>}
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      {...register('email', { 
                        required: 'Email is required',
                        pattern: {
                          value: /^\S+@\S+$/i,
                          message: 'Please enter a valid email address'
                        }
                      })}
                      className={errors.email ? 'error' : ''}
                    />
                    {errors.email && <span className="error-message">{errors.email.message}</span>}
                  </div>

                  <div className="form-group">
                    <label htmlFor="company">Company</label>
                    <input
                      type="text"
                      id="company"
                      {...register('company')}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="service">Service Interest</label>
                    <select id="service" {...register('service')}>
                      <option value="">Select a service</option>
                      <option value="performance-marketing">Performance Marketing</option>
                      <option value="forecasting">Business Forecasting</option>
                      <option value="data-storytelling">Data Storytelling</option>
                      <option value="general-consulting">General Consulting</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">Message *</label>
                    <textarea
                      id="message"
                      rows="5"
                      {...register('message', { required: 'Message is required' })}
                      className={errors.message ? 'error' : ''}
                      placeholder="Tell us about your project and goals..."
                    ></textarea>
                    {errors.message && <span className="error-message">{errors.message.message}</span>}
                  </div>

                  <button 
                    type="submit" 
                    className="submit-btn"
                    disabled={isLoading}
                  >
                    {isLoading ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              ) : (
                <motion.div 
                  className="success-message"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="success-icon">✅</div>
                  <h2>Message Sent!</h2>
                  <p>
                    Thank you for reaching out. We've received your message and will 
                    get back to you within 24 hours.
                  </p>
                  <button 
                    className="reset-btn"
                    onClick={() => setIsSubmitted(false)}
                  >
                    Send Another Message
                  </button>
                </motion.div>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
