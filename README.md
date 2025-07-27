# M&R Consulting Website

A professional, modern website for M&R Consulting - helping small businesses, e-commerce brands, and nonprofits grow smarter and faster through performance marketing, forecasting, and data storytelling.

## 🚀 Features

### Core Pages
- **Home** - Hero section, services overview, client testimonials, and newsletter signup
- **About** - Company story, team profiles, and values
- **Services** - Detailed service offerings with processes and results
- **Blog** - Content management with categories, search, and filtering
- **Contact** - Contact form with validation and Calendly integration

### Key Components
- **Smooth Scrolling** - Lenis integration for buttery smooth page scrolling
- **Responsive Design** - Mobile-first approach with modern UI
- **Performance Optimized** - Fast loading with Vite build system
- **SEO Ready** - Meta tags, structured data, and semantic HTML
- **Contact Forms** - React Hook Form with validation
- **Newsletter Signup** - Email collection with confirmation
- **Animated UI** - Framer Motion animations and interactions
- **Blog System** - Full CMS functionality with search and categories

### Technical Features
- Modern React 19 with functional components
- React Router for navigation
- **Lenis** for ultra-smooth scrolling experience
- Framer Motion for animations
- Responsive CSS Grid and Flexbox layouts
- Form validation with React Hook Form
- Node.js/Express backend API
- Email functionality with Nodemailer

## 🛠️ Tech Stack

**Frontend:**
- React 19
- React Router DOM
- **Lenis** (smooth scrolling)
- Framer Motion (animations)
- React Hook Form (form handling)
- Axios (API calls)
- CSS3 with modern features

**Backend:**
- Node.js
- Express.js
- Nodemailer (email sending)
- Helmet (security)
- CORS (cross-origin requests)
- Morgan (logging)

**Build Tools:**
- Vite (build system and dev server)
- ESLint (code linting)

## 🚀 Getting Started

### Prerequisites
- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd mkconsulting
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env` file in the root directory:
   ```env
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASS=your-app-password
   PORT=5000
   ```

### Development

1. **Run frontend only**
   ```bash
   npm run dev
   ```
   Opens at http://localhost:5173

2. **Run backend only**
   ```bash
   npm run server
   ```
   API runs at http://localhost:5000

3. **Run both frontend and backend**
   ```bash
   npm run dev:full
   ```

### Production Build

1. **Build the frontend**
   ```bash
   npm run build
   ```

2. **Preview the build**
   ```bash
   npm run preview
   ```

## 📁 Project Structure

```
mkconsulting/
├── public/
│   └── vite.svg
├── src/
│   ├── components/
│   │   ├── Header.jsx/.css
│   │   ├── Footer.jsx/.css
│   │   ├── Hero.jsx/.css
│   │   ├── ServiceCards.jsx/.css
│   │   ├── TestimonialCarousel.jsx/.css
│   │   ├── ClientResults.jsx/.css
│   │   └── NewsletterSignup.jsx/.css
│   ├── pages/
│   │   ├── /.css
│   │   ├── About.jsx/.css
│   │   ├── Services.jsx/.css
│   │   ├── Blog.jsx/.css
│   │   ├── BlogPost.jsx/.css
│   │   └── Contact.jsx/.css
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   └── index.css
├── server.js
├── package.json
├── vite.config.js
├── eslint.config.js
└── README.md
```

## 🎨 Design Features

### Modern UI/UX
- Clean, professional design
- Smooth animations and transitions
- Interactive hover effects
- Mobile-responsive layouts
- Accessible design patterns

### Color Scheme
- Primary: #2563eb (Blue)
- Secondary: #fbbf24 (Amber)
- Dark: #1e293b (Slate)
- Light: #f8fafc (Slate)

### Typography
- Primary Font: Inter
- Fallbacks: System fonts for performance

## 🔧 API Endpoints

### Contact Form
- **POST** `/api/contact`
- Sends email notifications and confirmations

### Newsletter
- **POST** `/api/newsletter`
- Handles email subscriptions

### Blog
- **GET** `/api/blog` - Get all blog posts
- **GET** `/api/blog/:slug` - Get specific post

### Health Check
- **GET** `/api/health` - API status check

## 📱 Mobile Optimization

- Responsive breakpoints for all screen sizes
- Touch-friendly navigation and buttons
- Optimized images and performance
- Mobile-first CSS approach

## 🔍 SEO Features

- Semantic HTML structure
- Meta tags and descriptions
- Open Graph tags for social sharing
- Structured data markup ready
- Clean URL structure
- Fast loading performance

## 📧 Email Integration

The contact form and newsletter signup integrate with email services:

1. **Configure Email Service**
   - Set up Gmail app password or SMTP service
   - Update environment variables
   - Test email functionality

2. **Calendly Integration**
   - Replace placeholder with actual Calendly link
   - Customize scheduling preferences

## 🚀 Deployment

### Frontend Deployment
1. Build the project: `npm run build`
2. Deploy the `dist` folder to your hosting service
3. Configure redirects for SPA routing

### Backend Deployment
1. Deploy `server.js` to your Node.js hosting
2. Set environment variables
3. Update API endpoints in frontend

### Recommended Hosting
- **Frontend**: Vercel, Netlify, or GitHub Pages
- **Backend**: Railway, Render, or Heroku

## 🔒 Security Features

- Helmet.js for security headers
- Input validation on forms
- CORS configuration
- Environment variable protection
- XSS protection

## 📈 Performance Features

- Vite for fast development and builds
- Code splitting and lazy loading ready
- Optimized images and assets
- Compression middleware
- Efficient animations with Framer Motion

## 🎯 Marketing Features

### Lead Generation
- Contact forms with validation
- Newsletter signup with incentives
- Call-to-action buttons throughout
- Calendly integration for consultations

### Content Marketing
- Blog system with categories
- Search functionality
- Social sharing buttons
- Related posts suggestions

### Conversion Optimization
- Clear value propositions
- Social proof (testimonials, stats)
- Multiple conversion points
- Trust signals and certifications

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is proprietary software for M&R Consulting.

## 📞 Support

For questions or support, contact:
- Email: hello@mrconsulting.com
- Website: [Your Domain]

---

Built with ❤️ for M&R Consulting - Helping businesses grow smarter and faster.+ Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
