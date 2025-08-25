# Lumetsberger.com

Personal website and blog for Moritz Lumetsberger built with Hugo and Tailwind CSS.

## 🚀 Quick Start

### Prerequisites
- Hugo Extended v0.148.2+ 
- Node.js and npm
- Git

### Development
```bash
# Clone the repository
git clone https://github.com/mrgoofman/lumetsberger.com.git
cd lumetsberger.com

# Install dependencies
npm install

# Start development server (runs Hugo + Tailwind CSS watch)
npm run dev

# Alternative: Run Hugo server only
hugo server --buildDrafts --buildFuture --disableFastRender
```

The site will be available at `http://localhost:1313`

## 📝 Content Management

### Blog Posts
Blog posts are located in `content/blog/` and use the following frontmatter structure:

```yaml
---
title: "Your Post Title"
date: 2024-01-01T10:00:00Z
draft: false
description: "Brief description for SEO"
tags: ["tag1", "tag2"]
categories: ["category"]
---
```

### Images
- Profile images: `static/images/profiles/`
- Gallery images: `static/images/gallery/`
- Blog post images: `static/images/blog/`

**Image Guidelines:**
- Use WebP format when possible for better performance
- Optimize images before uploading
- Blog images are automatically styled to 50% width and centered
- Use descriptive alt text for accessibility

### Pages
- Homepage: `layouts/index.html`
- About page: `layouts/about/single.html`
- Blog layout: `layouts/_default/single.html`

## 🛠 Technical Details

### Architecture
- **Static Site Generator:** Hugo v0.148.2
- **CSS Framework:** Tailwind CSS v3.4.4
- **Deployment:** GitHub Pages with GitHub Actions
- **Domain:** lumetsberger.com (custom domain)

### Key Features
- **Responsive Design:** Mobile-first approach with custom breakpoints
- **Cal.com Integration:** Embedded calendar with CSP configuration
- **Masonry Gallery:** Desktop grid layout with mobile slider fallback
- **Typewriter Animation:** Homepage hero text animation
- **Performance Optimized:** Font preloading, lazy loading, minified assets
- **SEO Ready:** Automatic sitemap, robots.txt, meta tags
- **Dark Mode:** System-preference aware dark mode support

### Custom Components
- **Cards:** Hover effects with shadow and border transitions
- **Image Slider:** Auto-playing gallery with manual controls
- **Responsive Grid:** Progressive layout (1→2→3 columns)

### Scripts
```bash
npm run dev        # Development with Hugo + Tailwind watch
npm run build      # Production build with minification
npm run css:build  # Build Tailwind CSS only
npm run css:watch  # Watch Tailwind CSS changes
npm run preview    # Preview production build
```

## 🚢 Deployment

### Automatic Deployment
The site automatically deploys to GitHub Pages when you push to the `main` branch using GitHub Actions.

### Manual Deployment
```bash
# Build the site
npm run build

# Deploy (handled automatically by GitHub Actions)
```

### Deployment Configuration
- **Workflow:** `.github/workflows/hugo.yml`
- **Domain:** Configured via GitHub Pages settings
- **SSL:** Automatically managed by GitHub Pages
- **CDN:** GitHub's global CDN

### Important Notes
- Custom domain (lumetsberger.com) is configured in GitHub Pages settings
- HTTPS is enforced automatically
- Sitemap automatically updates with new content
- Build time: ~30 seconds

## 🔧 Configuration

### Hugo Configuration (`hugo.toml`)
Key settings:
- **BaseURL:** `https://lumetsberger.com`
- **Language:** English (en-us)
- **Build:** Robots.txt enabled, RSS feeds enabled
- **Security:** CSP headers configured for Cal.com integration

### Tailwind Configuration
- **Fonts:** Inter (sans-serif), JetBrains Mono (monospace)
- **Colors:** Custom primary/secondary color scheme
- **Plugins:** Typography, Forms, Aspect Ratio
- **Optimization:** Purged unused CSS in production

### Content Security Policy
Configured to allow Cal.com integration while maintaining security:
- Scripts: Self + Cal.com
- Styles: Self + Cal.com + inline
- Frames: Cal.com only

## 📊 Performance

### Optimizations Implemented
- **Font Loading:** Preload with fallbacks
- **CSS:** Minified and purged in production
- **Images:** Lazy loading with proper alt text
- **JavaScript:** Async loading for Cal.com integration
- **HTML:** Minified in production builds

### Lighthouse Score Targets
- **Performance:** 90+
- **Accessibility:** 95+
- **Best Practices:** 90+
- **SEO:** 100

## 🎨 Customization

### Adding New Sections
1. Create layout in `layouts/partials/`
2. Include in main templates
3. Add corresponding Tailwind classes
4. Test responsive behavior

### Modifying Colors
Update `tailwind.config.js` color palette and rebuild CSS.

### Adding New Content Types
1. Create archetype in `archetypes/`
2. Add content files to `content/`
3. Create/modify layouts if needed

## 📈 Analytics & SEO

### SEO Features
- **Structured Data:** JSON-LD for articles and profiles
- **Meta Tags:** Dynamic title, description, and Open Graph
- **Sitemap:** Automatically generated and updated
- **Robots.txt:** Configured for optimal crawling
- **URL Structure:** Clean, semantic URLs

### Analytics
Ready for Google Analytics integration via `hugo.toml` configuration.

## 🚨 Troubleshooting

### Common Issues
1. **CSS not updating:** Run `npm run css:build`
2. **Images not loading:** Check file paths and extensions
3. **Cal.com not working:** Verify CSP configuration
4. **Build failing:** Check Hugo version compatibility

### Development Tips
- Use `hugo server` for basic development
- Use `npm run dev` when modifying CSS
- Clear browser cache for CSS changes
- Check console for JavaScript errors

## 📄 License

MIT License - feel free to use as reference for your own projects.

---

**Built with ❤️ by Moritz Lumetsberger**  
🔗 [lumetsberger.com](https://lumetsberger.com) | 🐦 [@mo_snek](https://x.com/mo_snek) | 💼 [LinkedIn](https://linkedin.com/in/moritz-lumetsberger)