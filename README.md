# Golden Hearts of Life Foundation

A modern, accessible website for Golden Hearts of Life Foundation - a nonprofit organization serving adults with disabilities and older adults in Los Angeles County.

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![React](https://img.shields.io/badge/React-19.2.0-61dafb.svg)
![Vite](https://img.shields.io/badge/Vite-7.2.4-646cff.svg)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.1.18-38bdf8.svg)

## Overview

Golden Hearts of Life Foundation provides essential wraparound services addressing social determinants of health through evidence-based programming. This website serves as the organization's digital presence, showcasing their services, mission, and providing contact pathways for those in need.

### Services Offered
- Food & Nutrition Support
- Housing Stabilization
- Medical Expense Navigation
- Mental Health & Wellness
- Case Management
- Senior & Disability Outreach

## Tech Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| React | 19.2.0 | UI Framework |
| Vite | 7.2.4 | Build Tool & Dev Server |
| Tailwind CSS | 4.1.18 | Utility-First Styling |
| Framer Motion | 12.29.2 | Animations |
| React Hook Form | 7.71.1 | Form Handling |
| Lucide React | 0.563.0 | Icons |

## Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd goldenheartsoflifefoundation

# Install dependencies
npm install

# Start development server
npm run dev
```

The site will be available at `http://localhost:5173`

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |

## Project Structure

```
goldenheartsoflifefoundation/
├── public/
│   ├── favicon.svg           # Site favicon
│   ├── logo_lightbg.svg      # Logo for light backgrounds
│   └── logo_darkbg.svg       # Logo for dark backgrounds
├── src/
│   ├── components/
│   │   ├── layout/           # Global layout components
│   │   │   ├── Navbar.jsx    # Fixed navigation with mobile menu
│   │   │   ├── Footer.jsx    # Site footer
│   │   │   └── MobileMenu.jsx # Animated mobile navigation
│   │   ├── sections/         # Page sections
│   │   │   ├── Hero.jsx      # Hero banner
│   │   │   ├── TrustBar.jsx  # Trust badges
│   │   │   ├── WhoWeServe.jsx # Population cards
│   │   │   ├── Services.jsx  # Service offerings
│   │   │   ├── Quote.jsx     # Mission quote
│   │   │   ├── Impact.jsx    # Impact statistics
│   │   │   ├── Founder.jsx   # Founder biography
│   │   │   └── ContactCTA.jsx # Contact call-to-action
│   │   ├── ui/               # Reusable UI components
│   │   │   ├── Button.jsx    # Multi-variant button
│   │   │   ├── Card.jsx      # Card component
│   │   │   ├── ServiceCard.jsx
│   │   │   ├── SectionHeader.jsx
│   │   │   └── AnimatedSection.jsx
│   │   └── forms/
│   │       └── ContactForm.jsx # Contact form with validation
│   ├── data/
│   │   ├── navigation.js     # Navigation & contact data
│   │   └── services.js       # Services & populations data
│   ├── App.jsx               # Root component
│   ├── main.jsx              # Entry point
│   └── index.css             # Global styles & theme
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## Design System

### Color Palette

| Color | Hex | Usage |
|-------|-----|-------|
| Gold 500 | `#C9A227` | Primary brand color |
| Gold 100 | `#F5ECD1` | Light accents |
| Stone 900 | `#1C1917` | Dark text |
| Stone 500 | `#78716C` | Muted text |
| Sage 500 | `#5E8A66` | Success states |

### Typography

- **Display Font**: Fraunces (Google Fonts) - Used for headings
- **Body Font**: DM Sans (Google Fonts) - Used for body text

### Animation Patterns

The site uses Framer Motion for:
- Scroll-triggered reveal animations
- Staggered grid animations
- Interactive hover states
- Mobile menu transitions
- Form state animations

## Key Features

### Responsive Design
- Mobile-first approach
- Breakpoints at 768px (tablet) and 1024px (desktop)
- Adaptive navigation (hamburger menu on mobile)

### Accessibility
- Semantic HTML structure
- Focus-visible states
- ARIA labels on interactive elements
- High contrast color ratios

### Performance
- Vite for fast development and optimized builds
- Lazy-loaded animations (viewport-triggered)
- Optimized SVG logos

## Customization

### Updating Content

**Navigation & Contact Info:**
Edit `src/data/navigation.js`

```javascript
export const contactInfo = {
  phone: '800-456-0544',
  email: 'info@goldenheartsoflifefoundation.org',
  address: '5250 W. Century Blvd, Los Angeles, CA 90045',
};
```

**Services:**
Edit `src/data/services.js`

### Updating Theme Colors

Edit the `@theme` block in `src/index.css`:

```css
@theme {
  --color-gold-500: #C9A227;
  --color-stone-900: #1C1917;
  /* ... */
}
```

### Adding New Sections

1. Create component in `src/components/sections/`
2. Import and add to `src/App.jsx`
3. Add navigation link in `src/data/navigation.js`

## Form Integration

The contact form is ready for backend integration. To connect with Formspree:

1. Create account at [formspree.io](https://formspree.io)
2. Get your form endpoint
3. Update `src/components/forms/ContactForm.jsx`:

```javascript
const onSubmit = async (data) => {
  await fetch('https://formspree.io/f/YOUR_FORM_ID', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: { 'Content-Type': 'application/json' },
  });
};
```

## Development with Claude Code

This project was built using **Claude Code** with the following skills:

### Skills Used

| Skill | Purpose |
|-------|---------|
| `frontend-design` | Created distinctive, production-grade frontend interfaces with premium design quality, avoiding generic aesthetics |
| `feature-dev` | Guided feature development with comprehensive codebase understanding, architecture analysis, and systematic implementation |

### Using Skills in Claude Code

To leverage these skills in your own projects:

```bash
# Frontend Design - For building polished UI components
/frontend-design

# Feature Development - For systematic feature implementation
/feature-dev
```

These skills help ensure:
- **Design Excellence**: Typography choices, color palettes, spatial composition, and motion design that stand out
- **Architecture Quality**: Well-organized component structure, data management patterns, and maintainable code
- **Comprehensive Documentation**: Clear understanding of the codebase before making changes

## Deployment

### Build for Production

```bash
npm run build
```

This creates an optimized build in the `dist/` folder.

### Deploy to Vercel

```bash
npm install -g vercel
vercel
```

### Deploy to Netlify

```bash
npm install -g netlify-cli
netlify deploy --prod --dir=dist
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License.

## Contact

**Golden Hearts of Life Foundation**
- Phone: 800-456-0544
- Email: info@goldenheartsoflifefoundation.org
- Address: 5250 W. Century Blvd, Los Angeles, CA 90045
- UEI: SU9ZEL1AL3Z6

---

Built with care for those who care for others.
