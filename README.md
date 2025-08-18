# ElegantCodes.com - Professional IT Solutions Website

A modern, responsive website for ElegantCodes, showcasing custom software development, e-commerce solutions, POS systems, and business automation services. Built with Next.js 15, TypeScript, and Tailwind CSS.

## 🚀 Features

### Core Features
- **Modern Tech Stack**: Next.js 15 with TypeScript and Tailwind CSS
- **Responsive Design**: Mobile-first approach with perfect responsiveness
- **Performance Optimized**: Lazy loading, image optimization, and code splitting
- **SEO Optimized**: Meta tags, structured data, and semantic HTML
- **Accessibility**: WCAG 2.1 compliant with ARIA labels and keyboard navigation

### User Experience
- **Interactive Animations**: Smooth scroll animations and micro-interactions
- **Global Search**: Intelligent search with autocomplete functionality
- **High Contrast Mode**: Accessibility feature for better visibility
- **Form Validation**: Real-time validation with error handling
- **Loading States**: Skeleton loaders and progress indicators

### Professional Sections
- **Hero Section**: Animated backgrounds with compelling CTAs
- **Services Overview**: Comprehensive service showcase
- **Portfolio Gallery**: Filterable project showcase
- **Testimonials**: Client feedback and success stories
- **Contact Form**: Multi-channel contact options
- **Blog Section**: Content marketing and thought leadership

## 🛠️ Tech Stack

### Frontend
- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Remix Icons
- **Forms**: React Hook Form

### Development Tools
- **Linting**: ESLint with Next.js config
- **Type Checking**: TypeScript
- **Package Manager**: npm
- **Version Control**: Git

### Performance & SEO
- **Image Optimization**: Next.js Image component
- **Font Loading**: Google Fonts with display swap
- **Meta Tags**: Dynamic SEO metadata
- **Structured Data**: JSON-LD schema markup

## 📦 Installation

### Prerequisites
- Node.js 18+ 
- npm or yarn
- Git

### Setup Instructions

1. **Clone the repository**
   ```bash
   git clone https://github.com/joemwangi009/elegantcodes.git
   cd elegantcodes
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Available Scripts

```bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run type-check   # Run TypeScript type checking
npm run analyze      # Analyze bundle size
```

## 🏗️ Project Structure

```
ElegantCodes/
├── app/                    # Next.js App Router
│   ├── blog/              # Blog pages
│   ├── portfolio/         # Portfolio pages
│   ├── services/          # Services pages
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Homepage
├── components/            # Reusable components
│   ├── Header.tsx         # Navigation header
│   ├── HeroSection.tsx    # Hero banner
│   ├── ContactSection.tsx # Contact form
│   └── ...                # Other components
├── lib/                   # Utility functions
│   └── utils.ts           # Common utilities
├── public/                # Static assets
├── tailwind.config.js     # Tailwind configuration
├── package.json           # Dependencies
└── README.md             # Project documentation
```

## 🎨 Design System

### Color Palette
- **Primary**: Amber (#f59e0b) - Brand color
- **Secondary**: Slate (#0f172a) - Text and backgrounds
- **Accent**: Various amber shades for highlights

### Typography
- **Primary Font**: Inter - Body text and UI elements
- **Display Font**: Poppins - Headings and hero text

### Components
- **Buttons**: Primary, secondary, and ghost variants
- **Cards**: Hover effects and consistent spacing
- **Forms**: Validated inputs with error states
- **Animations**: Smooth transitions and micro-interactions

## 🔧 Configuration

### Tailwind CSS
The project uses a custom Tailwind configuration with:
- Custom color palette
- Custom animations and keyframes
- Typography plugin
- Forms plugin
- Aspect ratio plugin

### Environment Variables
Create a `.env.local` file for environment-specific variables:

```env
NEXT_PUBLIC_SITE_URL=https://elegantcodes.com
NEXT_PUBLIC_GA_ID=your-google-analytics-id
```

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## ♿ Accessibility

### WCAG 2.1 Compliance
- **Keyboard Navigation**: Full keyboard accessibility
- **Screen Readers**: Proper ARIA labels and semantic HTML
- **Color Contrast**: High contrast ratios
- **Focus Management**: Visible focus indicators
- **Reduced Motion**: Respects user preferences

### Features
- Skip to main content link
- High contrast mode toggle
- Proper heading hierarchy
- Alt text for images
- Form labels and error messages

## 🚀 Deployment

### Vercel Deployment
1. Connect your GitHub repository to Vercel
2. Configure build settings:
   - Build Command: `npm run build`
   - Output Directory: `.next`
3. Set environment variables
4. Deploy with custom domain: `elegantcodes.com`

### Build Optimization
- **Code Splitting**: Automatic route-based splitting
- **Image Optimization**: WebP format with responsive sizes
- **Font Optimization**: Preloaded with display swap
- **Bundle Analysis**: Use `npm run analyze` for optimization

## 📊 Performance

### Core Web Vitals Targets
- **LCP**: < 2.5s
- **FID**: < 100ms
- **CLS**: < 0.1

### Optimization Techniques
- Lazy loading of images and components
- Preloading critical resources
- Minification and compression
- CDN for static assets

## 🔍 SEO

### On-Page SEO
- Dynamic meta tags
- Structured data (JSON-LD)
- Semantic HTML structure
- Optimized images with alt text
- Clean URL structure

### Technical SEO
- Sitemap generation
- Robots.txt configuration
- Open Graph tags
- Twitter Card support

## 🧪 Testing

### Manual Testing Checklist
- [ ] Responsive design on all devices
- [ ] Form validation and submission
- [ ] Navigation and routing
- [ ] Accessibility features
- [ ] Performance metrics
- [ ] Cross-browser compatibility

### Browser Support
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

### Development Workflow
1. Create a feature branch
2. Make your changes
3. Test thoroughly
4. Submit a pull request
5. Code review and merge

### Code Standards
- Follow TypeScript best practices
- Use Tailwind utility classes
- Maintain accessibility standards
- Write meaningful commit messages

## 📄 License

This project is proprietary software for ElegantCodes. All rights reserved.

## 📞 Support

For questions or support:
- **Email**: info@elegantcodes.com
- **Phone**: +1 (234) 567-8900
- **Website**: https://elegantcodes.com

---

**Built with ❤️ by the ElegantCodes Team**
