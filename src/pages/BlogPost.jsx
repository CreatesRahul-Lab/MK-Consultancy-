import { motion } from 'framer-motion'
import { Link, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import './BlogPost.css'

const BlogPost = () => {
  const { slug } = useParams()
  const [post, setPost] = useState(null)
  const [relatedPosts, setRelatedPosts] = useState([])

  // Mock data - in a real app, this would come from an API
  const blogPosts = {
    'performance-marketing-strategies-roi': {
      title: "5 Performance Marketing Strategies That Drive Real ROI",
      author: "Marcus Rodriguez",
      date: "2025-01-15",
      readTime: "8 min read",
      category: "Marketing",
      image: "📈",
      content: `
        <p>In today's competitive digital landscape, performance marketing has become essential for businesses looking to maximize their return on investment. After working with over 150 clients, we've identified five key strategies that consistently deliver exceptional results.</p>

        <h2>1. Data-Driven Campaign Optimization</h2>
        <p>The foundation of successful performance marketing lies in continuous optimization based on real data. We implement a systematic approach to testing and refining campaigns:</p>
        <ul>
          <li>A/B testing ad creatives, headlines, and calls-to-action</li>
          <li>Analyzing user behavior patterns and conversion paths</li>
          <li>Implementing real-time bid adjustments based on performance metrics</li>
          <li>Regular audience segmentation and targeting refinement</li>
        </ul>

        <h2>2. Multi-Channel Attribution Modeling</h2>
        <p>Understanding the customer journey across multiple touchpoints is crucial for accurate ROI measurement. Our attribution models help clients:</p>
        <ul>
          <li>Identify the most effective marketing channels</li>
          <li>Allocate budget based on true channel contribution</li>
          <li>Optimize the customer journey for better conversions</li>
        </ul>

        <h2>3. Advanced Audience Targeting</h2>
        <p>Generic targeting is a thing of the past. We create highly specific audience segments using:</p>
        <ul>
          <li>First-party data analysis</li>
          <li>Behavioral targeting based on user actions</li>
          <li>Lookalike audiences from high-value customers</li>
          <li>Dynamic remarketing for abandoned cart recovery</li>
        </ul>

        <h2>4. Creative Testing and Personalization</h2>
        <p>Personalized, tested creative assets significantly outperform generic ones. Our creative strategy includes:</p>
        <ul>
          <li>Dynamic product ads with real-time inventory</li>
          <li>Personalized messaging based on user behavior</li>
          <li>Video content optimized for each platform</li>
          <li>User-generated content integration</li>
        </ul>

        <h2>5. Conversion Rate Optimization (CRO)</h2>
        <p>Driving traffic is only half the battle. Our CRO approach focuses on:</p>
        <ul>
          <li>Landing page optimization for higher conversions</li>
          <li>Checkout process streamlining</li>
          <li>Trust signal implementation</li>
          <li>Mobile experience optimization</li>
        </ul>

        <h2>Real Results from Our Clients</h2>
        <p>These strategies have helped our clients achieve:</p>
        <ul>
          <li><strong>300% average ROI increase</strong> within the first 6 months</li>
          <li><strong>45% reduction in customer acquisition costs</strong></li>
          <li><strong>150% improvement in conversion rates</strong></li>
        </ul>

        <h2>Getting Started</h2>
        <p>Implementing these strategies requires expertise and continuous optimization. If you're ready to transform your marketing performance, we'd love to help you develop a customized strategy for your business.</p>
      `,
      tags: ['Performance Marketing', 'ROI', 'Digital Marketing', 'Optimization']
    }
  }

  const allPosts = [
    {
      id: 2,
      title: "How We Helped TechStart Inc. Double Their Revenue in 6 Months",
      slug: "techstart-revenue-case-study",
      category: "Case Studies",
      image: "🚀"
    },
    {
      id: 3,
      title: "The Art of Data Storytelling: Making Numbers Compelling",
      slug: "data-storytelling-guide",
      category: "Analytics",
      image: "📊"
    },
    {
      id: 5,
      title: "10 Quick Wins to Optimize Your Google Ads Performance",
      slug: "google-ads-optimization-tips",
      category: "Tips",
      image: "💡"
    }
  ]

  useEffect(() => {
    // Simulate API call
    const currentPost = blogPosts[slug]
    if (currentPost) {
      setPost(currentPost)
      setRelatedPosts(allPosts.slice(0, 3))
    }
  }, [slug])

  if (!post) {
    return (
      <div className="blog-post-page">
        <div className="container">
          <div className="not-found">
            <h1>Post Not Found</h1>
            <p>The blog post you're looking for doesn't exist.</p>
            <Link to="/blog" className="btn-primary">Back to Blog</Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="blog-post-page">
      <motion.article 
        className="blog-post"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container">
          <div className="post-header">
            <div className="breadcrumb">
              <Link to="/blog">Blog</Link>
              <span>→</span>
              <span>{post.category}</span>
            </div>
            
            <h1>{post.title}</h1>
            
            <div className="post-meta">
              <div className="author-info">
                <div className="author-avatar">
                  {post.author.split(' ').map(name => name[0]).join('')}
                </div>
                <div className="author-details">
                  <span className="author-name">By {post.author}</span>
                  <span className="post-date">{new Date(post.date).toLocaleDateString('en-US', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}</span>
                </div>
              </div>
              <div className="post-stats">
                <span className="read-time">{post.readTime}</span>
                <span className="category-tag">{post.category}</span>
              </div>
            </div>
          </div>

          <div className="post-hero">
            <div className="hero-icon">{post.image}</div>
          </div>

          <div className="post-content">
            <div className="content-wrapper">
              <div 
                className="post-body"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
              
              <div className="post-tags">
                <h4>Tags:</h4>
                <div className="tags-list">
                  {post.tags.map((tag, index) => (
                    <span key={index} className="tag">{tag}</span>
                  ))}
                </div>
              </div>

              <div className="post-share">
                <h4>Share this article:</h4>
                <div className="share-buttons">
                  <button className="share-btn linkedin">
                    Share on LinkedIn
                  </button>
                  <button className="share-btn twitter">
                    Share on Twitter
                  </button>
                  <button className="share-btn facebook">
                    Share on Facebook
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.article>

      <section className="related-posts">
        <div className="container">
          <motion.div 
            className="section-title"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2>Related Articles</h2>
            <p>Continue reading with these related insights</p>
          </motion.div>

          <div className="related-posts-grid">
            {relatedPosts.map((relatedPost, index) => (
              <motion.div
                key={relatedPost.id}
                className="related-post-card"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="related-post-image">
                  <span className="related-icon">{relatedPost.image}</span>
                </div>
                <div className="related-post-content">
                  <span className="related-category">{relatedPost.category}</span>
                  <h3>{relatedPost.title}</h3>
                  <Link to={`/blog/${relatedPost.slug}`} className="read-more">
                    Read Article →
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="post-cta">
        <div className="container">
          <motion.div 
            className="cta-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2>Ready to Implement These Strategies?</h2>
            <p>
              Let's discuss how we can help you achieve similar results for your business.
            </p>
            <Link to="/contact" className="btn-primary">
              Schedule a Consultation
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default BlogPost
