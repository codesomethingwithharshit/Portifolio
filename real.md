# Real Estate Website — Premium Animated Build

Build a stunning, fully animated real estate portfolio/listing website from scratch using a single HTML file + embedded CSS and JS (no external libraries except icon CDN). The website must be better and more impressive than the Prism Flux portfolio template.

## Brand Identity
- **Business Name:** Luxoria Estates (or let the developer choose a luxury-sounding name)
- **Tagline:** "Where Dreams Find Addresses" / "Beyond Bricks & Mortar"
- **Theme:** Dark purple + gold + deep black gradient (premium luxury feel)
- **Font:** Google Fonts — Playfair Display (headings) + Inter (body)

## Sections Required

### 1. Loading Screen
- Full-screen loader with animated 3D rotating house/building icon (CSS-only)
- Progress bar that fills from 0-100% then fades out
- Company name appears with scale-up + glow reveal

### 2. Navigation Header
- Sticky/fixed header with glassmorphism effect (backdrop-filter: blur)
- Logo: Stylized "Luxoria" with a building icon mark
- Nav links: Home, Listings, About, Services, Contact
- Book a Consultation CTA button (pulse animation on hover)
- Mobile: slide-in hamburger menu with smooth overlay

### 3. Hero Section
- Full-viewport height background: dark gradient with floating 3D particles (CSS-only, no library)
- Animated headline: "Find Your Perfect Home" with a typewriter or stagger-reveal effect
- Subtitle fades in with a delay
- Search bar: Buy/Rent toggle, Location dropdown, Property Type, Price Range — all styled luxuriously
- Search button with ripple effect
- Floating stats badges: "500+ Properties", "200+ Happy Clients", "50+ Cities" — each floats up with staggered delay

### 4. Featured Properties (Carousel)
- 3D perspective carousel (better than Prism Flux — use actual perspective/rotateY with smooth cubic-bezier)
- Each card shows: property image placeholder (use colored gradient backgrounds as placeholders), price, title, location, beds/baths/sqft icons, "Featured" badge
- Navigation arrows (prev/next) + dot indicators
- Auto-rotate every 4 seconds, pause on hover
- Cards scale up on hover with a subtle lift + shadow glow (golden)

### 5. About / Why Choose Us
- Left: animated decorative element (rotating compass or house outline that spins on scroll)
- Right: headline, description, 3 feature pillars with icons
- Each pillar animates in on scroll (slide-up + fade)
- Counter animation (years of experience, properties sold, awards won)

### 6. Services Section
- 4-6 service cards in a grid
- Icons: Buy Home, Sell Property, Rentals, Property Management, Interior Design, Legal Help
- Each card: icon with subtle floating animation, title, description
- Glow border on hover (golden)
- Background: subtle diagonal stripes or pattern

### 7. Property Listings Grid
- Filter bar: All, For Sale, For Rent, Luxury, Commercial
- Grid of property cards (6-12 cards) with staggered entrance animation
- Each card: image placeholder, price (animated counter on scroll), title, location, details row, "View Details" button
- Sold/New/Pending badges
- Load More button at bottom with spinner animation

### 8. Testimonials
- Full-width section with curved background divider
- 3 testimonial cards in a row, each with: quote icon, text, author name, role, star rating (SVG stars)
- Animated entrance on scroll
- Subtle background parallax with floating elements

### 9. Contact Section
- Split layout: Left = form, Right = contact info + animated map placeholder
- Form fields: Name, Email, Phone, Message, Interest dropdown
- Submit button with paper-plane animation (icon moves on hover)
- Info: Phone, Email, Address, Office Hours
- Social media icons (SVG): Instagram, Facebook, YouTube, LinkedIn — with hover color change

### 10. Footer
- 4-column layout: Brand + description, Quick Links, Property Types, Contact Info
- Newsletter signup with email input + arrow button (animated)
- Copyright bar with subtle gradient text
- Back to top button (appears on scroll, smooth scroll-up)

## Animations Required (All CSS, no external animation library)
- Scroll-triggered reveal animations using IntersectionObserver (add .reveal class)
- Float/bob animation on decorative elements
- Counter animation for numbers (pure JS, count up on viewport enter)
- Pulsing glow on CTAs
- Gradient shift animation on headings (animated gradient text)
- Property cards: 3D tilt effect on mouse move (vanilla JS)
- Search bar: smooth expand/focus animation
- Typewriter or stagger text reveal in hero
- Loading screen transition

## Color Palette
- Background: #0a0a0f to #1a0a2e (deep black to dark purple)
- Primary: #7c3aed (purple)
- Accent: #d4af37 (gold)
- Text: #f5f5f5 (light), #a0a0b0 (muted)
- Card bg: rgba(255,255,255,0.03) with glass border
- Gradient: linear-gradient(135deg, #7c3aed, #d4af37)

## Performance & UX
- All animations use transform/opacity only (no layout thrashing)
- Responsive: desktop (1200px+), tablet (768-1199px), mobile (<768px)
- Smooth scrolling
- Hover states on all interactive elements
- Focus states for accessibility
- Image placeholders: CSS gradients as property images (no broken images)
- No external dependencies except Google Fonts + Font Awesome (or similar icon CDN)
- Single file: index.html with embedded <style> and <script>

## Deliverable
A single `index.html` file that when opened in a browser shows the complete, production-quality real estate website. All code must be clean, well-structured, and fully functional. The result should be visually more impressive than the Prism Flux portfolio template with smoother animations, better typography, and a more premium feel.
