import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import './Blog.css'

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')

  const categories = [
    { id: 'all', name: 'All Posts' },
    { id: 'marketing', name: 'Marketing' },
    { id: 'analytics', name: 'Analytics' },
    { id: 'case-studies', name: 'Case Studies' },
    { id: 'tips', name: 'Tips & Tricks' }
  ]

  const blogPosts = [
    {
      id: 1,
      title: "5 Performance Marketing Strategies That Drive Real ROI",
      excerpt: "Discover the proven tactics we use to help our clients achieve 300%+ ROI on their marketing spend.",
      category: "marketing",
      author: "Marcus Rodriguez",
      date: "2025-01-15",
      readTime: "8 min read",
      image: "📈",
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
      image: "🚀",
      slug: "techstart-revenue-case-study"
    },
    {
      id: 3,
      title: "The Art of Data Storytelling: Making Numbers Compelling",
      excerpt: "Learn how to transform complex data into compelling narratives that drive action and inspire stakeholders.",
      category: "analytics",
      author: "Marcus Rodriguez",
      date: "2025-01-05",
      readTime: "10 min read",
      image: "📊",
      slug: "data-storytelling-guide"
    },
    {
      id: 4,
      title: "E-commerce Forecasting: Predicting Holiday Sales with 95% Accuracy",
      excerpt: "Our methodology for creating accurate sales forecasts that help e-commerce brands optimize inventory and marketing spend.",
      category: "analytics",
      author: "Rachel Chen",
      date: "2024-12-20",
      readTime: "15 min read",
      image: "🔮",
      slug: "ecommerce-forecasting-holiday-sales"
    },
    {
      id: 5,
      title: "10 Quick Wins to Optimize Your Google Ads Performance",
      excerpt: "Simple yet effective tactics to improve your Google Ads performance and reduce cost per acquisition.",
      category: "tips",
      author: "Marcus Rodriguez",
      date: "2024-12-15",
      readTime: "6 min read",
      image: "💡",
      slug: "google-ads-optimization-tips"
    },
    {
      id: 6,
      title: "From Data to Decisions: How GreenFuture Nonprofit Increased Donations by 200%",
      excerpt: "How strategic data analysis and storytelling helped a nonprofit organization significantly increase their fundraising effectiveness.",
      category: "case-studies",
      author: "Rachel Chen",
      date: "2024-12-10",
      readTime: "11 min read",
      image: "🌱",
      slug: "greenfuture-nonprofit-case-study"
    }
  ]

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const featuredPost = blogPosts[0]

  return (
    <div className="blog-page">
      <motion.section 
        className="blog-hero"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container">
          <h1>Insights & Expertise</h1>
          <p>
            Stay ahead with our latest insights on performance marketing, data analytics, 
            and business growth strategies.
          </p>
        </div>
      </motion.section>

      <section className="featured-post">
        <div className="container">
          <motion.div 
            className="featured-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="featured-text">
              <span className="featured-label">Featured Post</span>
              <h2>{featuredPost.title}</h2>
              <p>{featuredPost.excerpt}</p>
              <div className="post-meta">
                <span className="author">By {featuredPost.author}</span>
                <span className="date">{new Date(featuredPost.date).toLocaleDateString()}</span>
                <span className="read-time">{featuredPost.readTime}</span>
              </div>
              <Link to={`/blog/${featuredPost.slug}`} className="read-more-btn">
                Read Full Article →
              </Link>
            </div>
            <div className="featured-image">
              <div className="featured-icon">{featuredPost.image}</div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="blog-content">
        <div className="container">
          <div className="blog-controls">
            <div className="search-bar">
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-input"
              />
            </div>
            <div className="category-filters">
              {categories.map(category => (
                <button
                  key={category.id}
                  className={`filter-btn ${selectedCategory === category.id ? 'active' : ''}`}
                  onClick={() => setSelectedCategory(category.id)}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>

          <motion.div 
            className="blog-grid"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            {filteredPosts.slice(1).map((post, index) => (
              <motion.article
                key={post.id}
                className="blog-card"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <div className="blog-card-image">
                  <span className="blog-icon">{post.image}</span>
                  <span className="category-tag">{categories.find(cat => cat.id === post.category)?.name}</span>
                </div>
                <div className="blog-card-content">
                  <h3>{post.title}</h3>
                  <p>{post.excerpt}</p>
                  <div className="post-meta">
                    <span className="author">By {post.author}</span>
                    <span className="date">{new Date(post.date).toLocaleDateString()}</span>
                    <span className="read-time">{post.readTime}</span>
                  </div>
                  <Link to={`/blog/${post.slug}`} className="read-more">
                    Read More →
                  </Link>
                </div>
              </motion.article>
            ))}
          </motion.div>

          {filteredPosts.length === 0 && (
            <div className="no-results">
              <h3>No articles found</h3>
              <p>Try adjusting your search terms or filters.</p>
            </div>
          )}
        </div>
      </section>

      <section className="blog-newsletter">
        <div className="container">
          <motion.div 
            className="newsletter-cta"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2>Never Miss an Insight</h2>
            <p>Get our latest articles and case studies delivered directly to your inbox.</p>
            <Link to="/#newsletter" className="btn-primary">
              Subscribe to Newsletter
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Blog
