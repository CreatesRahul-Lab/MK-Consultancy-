import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import './TestimonialCarousel.css'

const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const testimonials = [
    {
      id: 1,
      quote: "M&R Consulting completely transformed our e-commerce strategy. Their performance marketing expertise helped us achieve a 400% ROI on our advertising spend.",
      author: "Sarah Johnson",
      position: "Marketing Director",
      company: "EcoStyle Boutique",
      avatar: "SJ",
      rating: 5
    },
    {
      id: 2,
      quote: "The forecasting models they created for us were incredibly accurate. We were able to optimize our inventory and reduce costs by 30% while improving customer satisfaction.",
      author: "Michael Chen",
      position: "Operations Manager",
      company: "TechHub Solutions",
      avatar: "MC",
      rating: 5
    },
    {
      id: 3,
      quote: "Their data storytelling capabilities are outstanding. They helped us present complex analytics to our board in a way that drove strategic decisions and secured funding.",
      author: "Emily Rodriguez",
      position: "CEO",
      company: "GreenFuture Nonprofit",
      avatar: "ER",
      rating: 5
    },
    {
      id: 4,
      quote: "Working with M&R Consulting was a game-changer. Their holistic approach to growth marketing delivered results beyond our expectations.",
      author: "David Thompson",
      position: "Founder",
      company: "StartUp Innovations",
      avatar: "DT",
      rating: 5
    }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      )
    }, 6000)

    return () => clearInterval(interval)
  }, [testimonials.length])

  const goToSlide = (index) => {
    setCurrentIndex(index)
  }

  const goToNext = () => {
    setCurrentIndex(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1)
  }

  const goToPrev = () => {
    setCurrentIndex(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1)
  }

  return (
    <section className="testimonials-section">
      <div className="container">
        <motion.div 
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2>What Our Clients Say</h2>
          <p>
            Don't just take our word for it. Here's what our clients have to say about working with us.
          </p>
        </motion.div>

        <div className="testimonial-carousel">
          <button 
            className="carousel-btn prev-btn"
            onClick={goToPrev}
            aria-label="Previous testimonial"
          >
            ←
          </button>

          <div className="testimonial-container">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                className="testimonial-slide"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
              >
                <div className="testimonial-content">
                  <div className="quote-icon">"</div>
                  <p className="quote-text">
                    {testimonials[currentIndex].quote}
                  </p>
                  <div className="rating">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <span key={i} className="star">★</span>
                    ))}
                  </div>
                </div>
                
                <div className="author-info">
                  <div className="author-avatar">
                    {testimonials[currentIndex].avatar}
                  </div>
                  <div className="author-details">
                    <h4>{testimonials[currentIndex].author}</h4>
                    <p>{testimonials[currentIndex].position}</p>
                    <span>{testimonials[currentIndex].company}</span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <button 
            className="carousel-btn next-btn"
            onClick={goToNext}
            aria-label="Next testimonial"
          >
            →
          </button>
        </div>

        <div className="carousel-indicators">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`indicator ${index === currentIndex ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default TestimonialCarousel
