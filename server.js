const express = require('express')
const cors = require('cors')
const helmet = require('helmet')
const morgan = require('morgan')
const compression = require('compression')
const nodemailer = require('nodemailer')

const app = express()
const PORT = process.env.PORT || 5000

// Middleware
app.use(helmet())
app.use(cors())
app.use(compression())
app.use(morgan('combined'))
app.use(express.json({ limit: '10mb' }))
app.use(express.urlencoded({ extended: true }))

// Email transporter (configure with your email service)
const transporter = nodemailer.createTransporter({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER || 'your-email@gmail.com',
    pass: process.env.EMAIL_PASS || 'your-app-password'
  }
})

// Routes

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'M&R Consulting API is running' })
})

// Contact form submission
app.post('/api/contact', async (req, res) => {
  try {
    const { firstName, lastName, email, company, service, message } = req.body

    // Validate required fields
    if (!firstName || !lastName || !email || !message) {
      return res.status(400).json({ 
        error: 'Missing required fields' 
      })
    }

    // Email to admin
    const adminMailOptions = {
      from: process.env.EMAIL_USER || 'your-email@gmail.com',
      to: 'hello@mrconsulting.com',
      subject: `New Contact Form Submission from ${firstName} ${lastName}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company:</strong> ${company || 'Not provided'}</p>
        <p><strong>Service Interest:</strong> ${service || 'Not specified'}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `
    }

    // Confirmation email to user
    const userMailOptions = {
      from: process.env.EMAIL_USER || 'your-email@gmail.com',
      to: email,
      subject: 'Thank you for contacting M&R Consulting',
      html: `
        <h2>Thank you for your inquiry!</h2>
        <p>Hi ${firstName},</p>
        <p>Thank you for reaching out to M&R Consulting. We've received your message and will get back to you within 24 hours.</p>
        <p>In the meantime, feel free to explore our <a href="https://your-domain.com/blog">blog</a> for valuable insights on performance marketing and business growth.</p>
        <p>Best regards,<br>The M&R Consulting Team</p>
      `
    }

    // Send emails
    await transporter.sendMail(adminMailOptions)
    await transporter.sendMail(userMailOptions)

    res.json({ 
      success: true, 
      message: 'Message sent successfully' 
    })

  } catch (error) {
    console.error('Contact form error:', error)
    res.status(500).json({ 
      error: 'Failed to send message. Please try again.' 
    })
  }
})

// Newsletter subscription
app.post('/api/newsletter', async (req, res) => {
  try {
    const { email } = req.body

    if (!email) {
      return res.status(400).json({ 
        error: 'Email is required' 
      })
    }

    // In a real app, you'd save this to a database
    // For now, just send a welcome email

    const welcomeMailOptions = {
      from: process.env.EMAIL_USER || 'your-email@gmail.com',
      to: email,
      subject: 'Welcome to M&R Consulting Newsletter!',
      html: `
        <h2>Welcome to our newsletter!</h2>
        <p>Thank you for subscribing to M&R Consulting's newsletter. You'll now receive:</p>
        <ul>
          <li>Weekly market insights</li>
          <li>Growth strategies & tips</li>
          <li>Industry trend analysis</li>
          <li>Exclusive case studies</li>
        </ul>
        <p>Stay tuned for valuable content that will help grow your business!</p>
        <p>Best regards,<br>The M&R Consulting Team</p>
      `
    }

    await transporter.sendMail(welcomeMailOptions)

    res.json({ 
      success: true, 
      message: 'Successfully subscribed to newsletter' 
    })

  } catch (error) {
    console.error('Newsletter subscription error:', error)
    res.status(500).json({ 
      error: 'Failed to subscribe. Please try again.' 
    })
  }
})

// Blog posts (mock data)
app.get('/api/blog', (req, res) => {
  const blogPosts = [
    {
      id: 1,
      title: "5 Performance Marketing Strategies That Drive Real ROI",
      excerpt: "Discover the proven tactics we use to help our clients achieve 300%+ ROI on their marketing spend.",
      category: "marketing",
      author: "Marcus Rodriguez",
      date: "2025-01-15",
      readTime: "8 min read",
      slug: "performance-marketing-strategies-roi"
    },
    {
      id: 2,
      title: "How We Helped TechStart Inc. Double Their Revenue in 6 Months",
      excerpt: "A deep dive into the comprehensive strategy that transformed a struggling startup into a market leader.",
      category: "case-studies",
      author: "Rachel Chen",
      date: "2025-01-10",
      readTime: "12 min read",
      slug: "techstart-revenue-case-study"
    }
    // Add more blog posts as needed
  ]

  res.json({ posts: blogPosts })
})

// Get single blog post
app.get('/api/blog/:slug', (req, res) => {
  const { slug } = req.params
  
  // Mock blog post data
  const post = {
    title: "5 Performance Marketing Strategies That Drive Real ROI",
    author: "Marcus Rodriguez",
    date: "2025-01-15",
    content: "Full blog post content here...",
    tags: ['Performance Marketing', 'ROI', 'Digital Marketing']
  }

  if (post) {
    res.json(post)
  } else {
    res.status(404).json({ error: 'Post not found' })
  }
})

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).json({ error: 'Something went wrong!' })
})

// 404 handler
app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' })
})

app.listen(PORT, () => {
  console.log(`M&R Consulting API server running on port ${PORT}`)
})

module.exports = app
