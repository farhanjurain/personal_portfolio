// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Add animation class to body after load
    setTimeout(() => {
        document.body.classList.add('loaded');
    }, 300);
    
    // Navigation active state
    const navLinks = document.querySelectorAll('nav ul li a');
    const sections = document.querySelectorAll('.section');
    
    // Smooth scrolling for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Get the target section
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            // Smooth scroll to target section
            window.scrollTo({
                top: targetSection.offsetTop - 20,
                behavior: 'smooth'
            });
            
            // Update active link
            navLinks.forEach(link => link.classList.remove('active'));
            this.classList.add('active');
        });
    });
    
    // Update active nav link on scroll with intersection observer
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.3
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute('id');
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${id}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }, observerOptions);
    
    sections.forEach(section => {
        observer.observe(section);
    });
    
    // Parallax effect for background
    window.addEventListener('scroll', function() {
        const scrollPosition = window.pageYOffset;
        document.body.style.backgroundPositionY = scrollPosition * 0.05 + 'px';
    });
    
    // Simple typing effect for the profile description
    const profileDescription = document.querySelector('.profile-info p');
    const text = profileDescription.textContent;
    profileDescription.textContent = '';
    
    let i = 0;
    function typeWriter() {
        if (i < text.length) {
            profileDescription.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, 50);
        }
    }
    
    setTimeout(typeWriter, 1000);
    
    // Project cards hover effect enhancement
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        card.addEventListener('mousemove', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            this.style.setProperty('--mouse-x', `${x}px`);
            this.style.setProperty('--mouse-y', `${y}px`);
        });
    });
    
    // Animate elements when they come into view
    const animateOnScroll = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
                animateOnScroll.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.2
    });
    
    document.querySelectorAll('.project-card, .skill, .award-item').forEach(element => {
        animateOnScroll.observe(element);
    });
    
    // Awards animation and interaction
    const awardItems = document.querySelectorAll('.award-item');
    
    awardItems.forEach((award, index) => {
        // Add slight delay to each award's entrance
        award.style.animationDelay = `${index * 0.2}s`;
        
        // Add subtle entrance animation class
        award.classList.add('fade-in');
        
        // Add hover effect with 3D tilt
        award.addEventListener('mousemove', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const angleX = (y - centerY) / 20;
            const angleY = (centerX - x) / 20;
            
            this.style.transform = `perspective(1000px) rotateX(${angleX}deg) rotateY(${angleY}deg) translateZ(10px)`;
            
            const icon = this.querySelector('.award-icon');
            icon.style.background = `linear-gradient(135deg, var(--primary-color), var(--secondary-color))`;
        });
        
        award.addEventListener('mouseleave', function() {
            this.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateZ(0)';
            const icon = this.querySelector('.award-icon');
            icon.style.background = 'linear-gradient(135deg, var(--primary-color), var(--secondary-color))';
        });
    });
    
    // Animation for award icons
    const awardIcons = document.querySelectorAll('.award-icon i');
    
    awardIcons.forEach(icon => {
        // Subtle pulse animation
        setInterval(() => {
            icon.classList.add('fa-beat');
            setTimeout(() => {
                icon.classList.remove('fa-beat');
            }, 1000);
        }, 5000);
    });
    
    // Skills animation
    const skills = document.querySelectorAll('.skill');
    
    skills.forEach((skill, index) => {
        skill.style.animationDelay = `${index * 0.1}s`;
        skill.classList.add('animated');
        
        // Random subtle floating motion
        const randomDuration = 3 + Math.random() * 2;
        const randomDelay = Math.random() * 2;
        
        skill.style.animation = `floatingEffect ${randomDuration}s ease-in-out ${randomDelay}s infinite alternate`;
    });
    
    // Add floating keyframes
    const styleSheet = document.styleSheets[0];
    styleSheet.insertRule(`
        @keyframes floatingEffect {
            0% { transform: translateY(0); }
            100% { transform: translateY(-10px); }
        }
    `, styleSheet.cssRules.length);
    
    // Mouse trail effect (subtle)
    let trail = [];
    const trailLength = 10;
    
    for (let i = 0; i < trailLength; i++) {
        const dot = document.createElement('div');
        dot.className = 'trail-dot';
        dot.style.cssText = `
            position: fixed;
            width: ${5 - (i * 0.5)}px;
            height: ${5 - (i * 0.5)}px;
            background: var(--accent-color);
            border-radius: 50%;
            opacity: ${1 - (i / trailLength)};
            pointer-events: none;
            z-index: 9999;
            transform: translate(-50%, -50%);
            filter: blur(${i * 0.5}px);
            mix-blend-mode: screen;
        `;
        document.body.appendChild(dot);
        trail.push(dot);
    }
    
    let mouseX = 0, mouseY = 0;
    document.addEventListener('mousemove', e => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });
    
    function updateTrail() {
        trail.forEach((dot, index) => {
            setTimeout(() => {
                dot.style.left = `${mouseX}px`;
                dot.style.top = `${mouseY}px`;
            }, index * 40);
        });
        requestAnimationFrame(updateTrail);
    }
    
    updateTrail();
}); 