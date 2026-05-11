# Portfolio Website Prompts

## Initial Setup
- Build a personal portfolio website for Harshit using the existing Prism Flux template with premium sections, resume download, EmailJS contact form, and profile photo.

## Personalization
- Name: Harshit only (remove "Sharma" from logo, hero, footer, copyright)
- Phone: +91 9760971378 | Email: harsh45.sh@gmail.com | Education: BTech CS AI ML

## Skills Update
- Remove: TensorFlow, PyTorch, AWS, OpenCV, NLP, Scikit-learn, MLflow
- Add: Next.js, React Native, AI Automation, SaaS, Digital Marketing, Google Ads, Meta Ads
- Style: Hexagon cards with emoji icons, consistent progress bars (all showing, same container width)

## Resume Download
- Add resume download option in: nav, hero, contact, floating button, and dedicated CTA section

## Social Links
- GitHub: https://github.com/Harshit-Sharma-52
- LinkedIn: https://www.linkedin.com/in/harshit-sharma47/

## EmailJS
- Service: Portifoliowb
- Template: template_d95m32q
- Public Key: cqH8PJ6TPI7rw_QP5
- Recipient: harsh45.sh@gmail.com

## Spacing Reduction
- Reduce section padding from 120px to 80px
- Reduce section-header margin from 80px to 50px

## Skill Bar Fix
- Fix skill percentage bars not displaying correctly (clip-path + animation fix)
- Replaced broken `@keyframes fillLevel` with inline width + CSS transition + requestAnimationFrame

## Profile Photo
- Add `images/harshitprofile.jpeg` to hero section
- Desktop: photo left + content right (flex row)
- Mobile: stacked column
- Photo ring with conic gradient animation + glow pulse

## Remove Impact Metrics
- Delete stats/impact-metrics section entirely from HTML, CSS, JS

## Social Media Icons
- Replace text icons ("in"/"gh"/"@") with inline SVG icons
- Add hover pulse animation + ripple ring
- Footer: centered brand, purple section headings, tighter spacing

## Carousel Controls
- Move prev/next buttons from outside container to inside container overlay
- Add backdrop-filter: blur(8px) and purple border
- Responsive sizes: 56px → 50px → 44px

## Other Fixes
- Parallax effect removed
- Loader + hero CSS restored from corruption
- prismRotate animation re-added
- Timeline tags, about pillars, footer expertise, testimonials updated
- Section scroll-margin-top: 100px added for fixed header offset
- Carousel onerror single-quote conflict resolved with `&quot;` wrapping
