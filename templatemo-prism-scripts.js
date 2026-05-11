// JavaScript Document - Harshit Sharma Portfolio

// Portfolio data for carousel (AI/ML Projects)
const portfolioData = [
    {
        id: 1,
        title: 'Deep Vision AI',
        description: 'Real-time object detection and image segmentation system using YOLOv8 and Mask R-CNN for industrial automation applications.',
        image: 'images/neural-network.jpg',
        tech: ['YOLOv8', 'Python', 'React']
    },
    {
        id: 2,
        title: 'AI Chatbot Platform',
        description: 'Intelligent conversational AI powered by transformer architectures and fine-tuned LLMs for customer service automation.',
        image: 'images/quantum-cloud.jpg',
        tech: ['Python', 'Next.js', 'FastAPI']
    },
    {
        id: 3,
        title: 'ML Pipeline Platform',
        description: 'End-to-end MLOps platform with automated model training, evaluation, deployment, and monitoring capabilities.',
        image: 'images/blockchain-vault.jpg',
        tech: ['Docker', 'Python', 'Next.js']
    },
    {
        id: 4,
        title: 'Predictive Analytics',
        description: 'Advanced time-series forecasting system using LSTM and GRU networks for financial market prediction.',
        image: 'images/cyber-defense.jpg',
        tech: ['Python', 'React', 'Node.js']
    },
    {
        id: 5,
        title: 'Facial Recognition',
        description: 'Secure face recognition and verification system with anti-spoofing using Siamese networks and triplet loss.',
        image: 'images/data-nexus.jpg',
        tech: ['Python', 'React Native', 'FastAPI']
    },
    {
        id: 6,
        title: 'Recommendation Engine',
        description: 'Personalized recommendation system using collaborative filtering and deep learning for e-commerce platforms.',
        image: 'images/ar-interface.jpg',
        tech: ['Python', 'Next.js', 'Redis']
    },
    {
        id: 7,
        title: 'AI Data Dashboard',
        description: 'Interactive analytics dashboard with real-time ML model predictions and data visualization using D3.js.',
        image: 'images/iot-matrix.jpg',
        tech: ['React', 'D3.js', 'Node.js']
    }
];

// Skills data
const skillsData = [
    { name: 'Python', icon: '🐍', level: 95, category: 'aiml' },
    { name: 'Machine Learning', icon: '📊', level: 93, category: 'aiml' },
    { name: 'Deep Learning', icon: '🔬', level: 88, category: 'aiml' },
    { name: 'Computer Vision', icon: '👁️', level: 85, category: 'aiml' },
    { name: 'React.js', icon: '⚛️', level: 82, category: 'frontend' },
    { name: 'Next.js', icon: '▲', level: 80, category: 'frontend' },
    { name: 'React Native', icon: '📱', level: 78, category: 'frontend' },
    { name: 'TypeScript', icon: '📘', level: 78, category: 'frontend' },
    { name: 'Node.js', icon: '🟢', level: 80, category: 'backend' },
    { name: 'FastAPI', icon: '⚡', level: 85, category: 'backend' },
    { name: 'Docker', icon: '🐳', level: 83, category: 'cloud' },
    { name: 'SaaS Development', icon: '☁️', level: 82, category: 'cloud' },
    { name: 'AI Automation', icon: '🤖', level: 90, category: 'aiml' },
    { name: 'Digital Marketing', icon: '📈', level: 75, category: 'cloud' },
    { name: 'Google Ads', icon: '📢', level: 72, category: 'cloud' },
    { name: 'Meta Ads', icon: '🎯', level: 70, category: 'cloud' }
];

// Resume download function
function downloadResume() {
    const resumeUrl = 'images/resume.pdf';
    fetch(resumeUrl, { method: 'HEAD' })
        .then(res => {
            if (res.ok) {
                const link = document.createElement('a');
                link.href = resumeUrl;
                link.download = 'Harshit_Resume.pdf';
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
            } else {
                alert('Resume file not found. Please contact me at harsh45.sh@gmail.com for a copy of my resume.');
            }
        })
        .catch(() => {
            alert('Resume file not found. Please contact me at harsh45.sh@gmail.com for a copy of my resume.');
        });
}

// Scroll to section function
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    const header = document.getElementById('header');
    if (section) {
        const headerHeight = header.offsetHeight;
        const targetPosition = section.offsetTop - headerHeight;
        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
    }
}

// Initialize particles for philosophy section
function initParticles() {
    const particlesContainer = document.getElementById('particles');
    const particleCount = 15;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 20 + 's';
        particle.style.animationDuration = (18 + Math.random() * 8) + 's';
        particlesContainer.appendChild(particle);
    }
}

// Initialize carousel
let currentIndex = 0;
const carousel = document.getElementById('carousel');
const indicatorsContainer = document.getElementById('indicators');

function createCarouselItem(data, index) {
    const item = document.createElement('div');
    item.className = 'carousel-item';
    item.dataset.index = index;
    
    const techBadges = data.tech.map(tech => 
        `<span class="tech-badge">${tech}</span>`
    ).join('');
    
    item.innerHTML = `
        <div class="card">
            <div class="card-number">0${data.id}</div>
            <div class="card-image">
                <img src="${data.image}" alt="${data.title}" onerror="this.parentElement.innerHTML=&quot;<div style='display:flex;align-items:center;justify-content:center;height:100%;color:var(--accent-purple);font-size:48px;'>&#128187;</div>&quot;">
            </div>
            <h3 class="card-title">${data.title}</h3>
            <p class="card-description">${data.description}</p>
            <div class="card-tech">${techBadges}</div>
            <button class="card-cta" onclick="scrollToSection('contact')">Let's Talk</button>
        </div>
    `;
    
    return item;
}

function initCarousel() {
    portfolioData.forEach((data, index) => {
        const item = createCarouselItem(data, index);
        carousel.appendChild(item);
        
        const indicator = document.createElement('div');
        indicator.className = 'indicator';
        if (index === 0) indicator.classList.add('active');
        indicator.dataset.index = index;
        indicator.addEventListener('click', () => goToSlide(index));
        indicatorsContainer.appendChild(indicator);
    });
    
    updateCarousel();
}

function updateCarousel() {
    const items = document.querySelectorAll('.carousel-item');
    const indicators = document.querySelectorAll('.indicator');
    const totalItems = items.length;
    const isMobile = window.innerWidth <= 768;
    const isTablet = window.innerWidth <= 1024;
    
    items.forEach((item, index) => {
        let offset = index - currentIndex;
        
        if (offset > totalItems / 2) {
            offset -= totalItems;
        } else if (offset < -totalItems / 2) {
            offset += totalItems;
        }
        
        const absOffset = Math.abs(offset);
        const sign = offset < 0 ? -1 : 1;
        
        item.style.transform = '';
        item.style.opacity = '';
        item.style.zIndex = '';
        item.style.transition = 'all 0.8s cubic-bezier(0.4, 0.0, 0.2, 1)';
        
        let spacing1 = 400;
        let spacing2 = 600;
        let spacing3 = 750;
        
        if (isMobile) {
            spacing1 = 280;
            spacing2 = 420;
            spacing3 = 550;
        } else if (isTablet) {
            spacing1 = 340;
            spacing2 = 520;
            spacing3 = 650;
        }
        
        if (absOffset === 0) {
            item.style.transform = 'translate(-50%, -50%) translateZ(0) scale(1)';
            item.style.opacity = '1';
            item.style.zIndex = '10';
        } else if (absOffset === 1) {
            const translateX = sign * spacing1;
            const rotation = isMobile ? 25 : 30;
            const scale = isMobile ? 0.88 : 0.85;
            item.style.transform = `translate(-50%, -50%) translateX(${translateX}px) translateZ(-200px) rotateY(${-sign * rotation}deg) scale(${scale})`;
            item.style.opacity = '0.8';
            item.style.zIndex = '5';
        } else if (absOffset === 2) {
            const translateX = sign * spacing2;
            const rotation = isMobile ? 35 : 40;
            const scale = isMobile ? 0.75 : 0.7;
            item.style.transform = `translate(-50%, -50%) translateX(${translateX}px) translateZ(-350px) rotateY(${-sign * rotation}deg) scale(${scale})`;
            item.style.opacity = '0.5';
            item.style.zIndex = '3';
        } else if (absOffset === 3) {
            const translateX = sign * spacing3;
            const rotation = isMobile ? 40 : 45;
            const scale = isMobile ? 0.65 : 0.6;
            item.style.transform = `translate(-50%, -50%) translateX(${translateX}px) translateZ(-450px) rotateY(${-sign * rotation}deg) scale(${scale})`;
            item.style.opacity = '0.3';
            item.style.zIndex = '2';
        } else {
            item.style.transform = 'translate(-50%, -50%) translateZ(-500px) scale(0.5)';
            item.style.opacity = '0';
            item.style.zIndex = '1';
        }
    });
    
    indicators.forEach((indicator, index) => {
        indicator.classList.toggle('active', index === currentIndex);
    });
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % portfolioData.length;
    updateCarousel();
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + portfolioData.length) % portfolioData.length;
    updateCarousel();
}

function goToSlide(index) {
    currentIndex = index;
    updateCarousel();
}

// Initialize hexagonal skills grid
function initSkillsGrid() {
    const skillsGrid = document.getElementById('skillsGrid');
    const categoryTabs = document.querySelectorAll('.category-tab');
    
    function displaySkills(category = 'all') {
        skillsGrid.innerHTML = '';
        
        const filteredSkills = category === 'all' 
            ? skillsData 
            : skillsData.filter(skill => skill.category === category);
        
        filteredSkills.forEach((skill, index) => {
            const hexagon = document.createElement('div');
            hexagon.className = 'skill-hexagon';
            hexagon.style.animationDelay = `${index * 0.1}s`;
            
            hexagon.innerHTML = `
                <div class="hexagon-inner">
                    <div class="hexagon-content">
                        <div class="skill-icon-hex">${skill.icon}</div>
                        <div class="skill-name">${skill.name}</div>
                        <div class="skill-level">
                            <div class="skill-level-fill" style="width: 0"></div>
                        </div>
                        <div class="skill-percentage">${skill.level}%</div>
                    </div>
                </div>
            `;
            
            skillsGrid.appendChild(hexagon);
            
            requestAnimationFrame(() => {
                const fill = hexagon.querySelector('.skill-level-fill');
                if (fill) fill.style.width = skill.level + '%';
            });
        });
    }
    
    categoryTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            categoryTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            displaySkills(tab.dataset.category);
        });
    });
    
    displaySkills();
}

// Event listeners
document.getElementById('nextBtn').addEventListener('click', nextSlide);
document.getElementById('prevBtn').addEventListener('click', prevSlide);

// Auto-rotate carousel (cleaned on page hide)
const carouselInterval = setInterval(nextSlide, 5000);
document.addEventListener('visibilitychange', () => {
    if (document.hidden) clearInterval(carouselInterval);
});

// Keyboard navigation
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') prevSlide();
    if (e.key === 'ArrowRight') nextSlide();
});

// Update carousel on window resize
let resizeTimeout;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
        updateCarousel();
    }, 250);
});

// Initialize on load
initCarousel();
initSkillsGrid();
initParticles();

// Mobile menu toggle
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');

menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    menuToggle.classList.toggle('active');
});

// Header scroll effect
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Smooth scrolling and active navigation
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        
        if (targetSection) {
            const headerHeight = header.offsetHeight;
            const targetPosition = targetSection.offsetTop - headerHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
            
            navMenu.classList.remove('active');
            menuToggle.classList.remove('active');
        }
    });
});

// Update active navigation on scroll
function updateActiveNav() {
    const scrollPosition = window.scrollY + 100;
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                const href = link.getAttribute('href').substring(1);
                if (href === sectionId) {
                    link.classList.add('active');
                }
            });
        }
    });
}

window.addEventListener('scroll', updateActiveNav);

// EmailJS form submission
const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const submitBtn = contactForm.querySelector('.submit-btn');
    submitBtn.textContent = 'Sending...';
    submitBtn.disabled = true;
    
    const formData = new FormData(contactForm);
    const data = Object.fromEntries(formData);
    
    const templateParams = {
        from_name: data.name,
        from_email: data.email,
        subject: data.subject,
        message: data.message,
        to_email: 'harsh45.sh@gmail.com'
    };
    
    emailjs.send('Portifoliowb', 'template_d95m32q', templateParams, 'cqH8PJ6TPI7rw_QP5')
        .then(() => {
            alert(`Thank you ${data.name}! Your message has been sent successfully. I'll get back to you soon.`);
            contactForm.reset();
        })
        .catch((err) => {
            alert('Failed to send message. Please email me directly at harsh45.sh@gmail.com');
            console.error('EmailJS error:', err);
        })
        .finally(() => {
            submitBtn.textContent = 'Send Message';
            submitBtn.disabled = false;
        });
});

// Loading screen
window.addEventListener('load', () => {
    setTimeout(() => {
        const loader = document.getElementById('loader');
        loader.classList.add('hidden');
    }, 1500);
});


