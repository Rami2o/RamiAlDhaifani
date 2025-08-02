// Enhanced Personal Website JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Page loading screen
    const pageLoading = document.querySelector('.page-loading');
    
    // Hide loading screen after page loads
    window.addEventListener('load', function() {
        setTimeout(() => {
            if (pageLoading) {
                pageLoading.classList.add('hidden');
                setTimeout(() => {
                    pageLoading.style.display = 'none';
                }, 500);
            }
        }, 1000);
    });
    // Sticky Navigation Functionality
    const stickyNav = document.querySelector('.sticky-nav');
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const navItems = document.querySelectorAll('.nav-item');
    
    // Mobile menu toggle
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            navToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
        
        // Close mobile menu when clicking on a nav item
        navItems.forEach(item => {
            item.addEventListener('click', function() {
                navToggle.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
        
        // Close mobile menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!stickyNav.contains(e.target)) {
                navToggle.classList.remove('active');
                navMenu.classList.remove('active');
            }
        });
    }
    
    // Sticky nav scroll effect
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 100) {
            stickyNav.classList.add('scrolled');
        } else {
            stickyNav.classList.remove('scrolled');
        }
    });
    
    // Section highlighting on scroll
    function highlightSectionOnScroll() {
        let current = '';
        const sections = document.querySelectorAll('.section');
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.pageYOffset >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });

        navItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('href') === `#${current}`) {
                item.classList.add('active');
            }
        });
    }
    
    window.addEventListener('scroll', highlightSectionOnScroll);
    
    // Smooth scroll for all anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Enhanced Intersection Observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe all sections for animation
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1), transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
        observer.observe(section);
    });

                    // Enhanced skill tags interactions
                const skillTags = document.querySelectorAll('.skill-tag');
                skillTags.forEach(tag => {
                    // Create tooltip for each skill tag
                    const tooltip = document.createElement('div');
                    tooltip.className = 'skill-tooltip';
                    tooltip.textContent = tag.textContent;
                    tooltip.style.cssText = `
                        position: absolute;
                        background: rgba(0, 0, 0, 0.95);
                        color: white;
                        padding: 10px 16px;
                        border-radius: 8px;
                        font-size: 0.85rem;
                        font-weight: 500;
                        white-space: nowrap;
                        opacity: 0;
                        visibility: hidden;
                        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                        z-index: 1000;
                        pointer-events: none;
                        transform: translateY(10px);
                        backdrop-filter: blur(15px);
                        border: 1px solid rgba(255, 255, 255, 0.1);
                        box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
                    `;
                    
                    document.body.appendChild(tooltip);
                    
                    // Enhanced hover effects
                    tag.addEventListener('mouseenter', function(e) {
                        this.style.transform = 'translateY(-5px) scale(1.05)';
                        
                        const rect = this.getBoundingClientRect();
                        tooltip.style.left = rect.left + (rect.width / 2) - (tooltip.offsetWidth / 2) + 'px';
                        tooltip.style.top = rect.top - tooltip.offsetHeight - 15 + 'px';
                        tooltip.style.opacity = '1';
                        tooltip.style.visibility = 'visible';
                        tooltip.style.transform = 'translateY(0)';
                    });
                    
                    tag.addEventListener('mouseleave', function() {
                        this.style.transform = 'translateY(0) scale(1)';
                        tooltip.style.opacity = '0';
                        tooltip.style.visibility = 'hidden';
                        tooltip.style.transform = 'translateY(10px)';
                    });
                });

    // Enhanced contact links
    const contactLinks = document.querySelectorAll('.contact-item a');
    contactLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            this.style.transform = 'translateX(-3px)';
        });
        
        link.addEventListener('mouseleave', function() {
            this.style.transform = 'translateX(0)';
        });
    });

    // Enhanced project and certificate links
    const projectLinks = document.querySelectorAll('.project-link, .certificate-link');
    projectLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            this.style.transform = 'translateX(3px)';
        });
        
        link.addEventListener('mouseleave', function() {
            this.style.transform = 'translateX(0)';
        });
    });

    // Enhanced loading animation
    window.addEventListener('load', function() {
        document.body.style.opacity = '0';
        document.body.style.transition = 'opacity 1s cubic-bezier(0.4, 0, 0.2, 1)';
        
        setTimeout(() => {
            document.body.style.opacity = '1';
        }, 100);
    });

    // Enhanced scroll-to-top button
    const scrollToTopBtn = document.createElement('button');
    scrollToTopBtn.innerHTML = '<i class="fas fa-chevron-up"></i>';
    scrollToTopBtn.className = 'scroll-to-top';
    scrollToTopBtn.setAttribute('aria-label', 'Scroll to top');
    scrollToTopBtn.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 55px;
        height: 55px;
        border-radius: 50%;
        background: linear-gradient(135deg, #8B0000, #DC143C);
        color: white;
        border: none;
        cursor: pointer;
        opacity: 0;
        visibility: hidden;
        transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        box-shadow: 0 8px 25px rgba(139, 0, 0, 0.3);
        z-index: 1000;
        font-size: 1.3rem;
        transform: translateY(20px);
    `;
    
    document.body.appendChild(scrollToTopBtn);

    // Show/hide scroll-to-top button
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            scrollToTopBtn.style.opacity = '1';
            scrollToTopBtn.style.visibility = 'visible';
            scrollToTopBtn.style.transform = 'translateY(0)';
        } else {
            scrollToTopBtn.style.opacity = '0';
            scrollToTopBtn.style.visibility = 'hidden';
            scrollToTopBtn.style.transform = 'translateY(20px)';
        }
    });

    // Scroll to top functionality
    scrollToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Enhanced hover effects for scroll-to-top button
    scrollToTopBtn.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-5px) scale(1.1)';
        this.style.boxShadow = '0 12px 35px rgba(139, 0, 0, 0.4)';
    });

    scrollToTopBtn.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
        this.style.boxShadow = '0 8px 25px rgba(139, 0, 0, 0.3)';
    });

    // Enhanced parallax effect for header
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const header = document.querySelector('.header');
        if (header) {
            header.style.transform = `translateY(${scrolled * 0.3}px)`;
        }
    });

    // Enhanced typing effect for name
    const nameElement = document.querySelector('.name');
    if (nameElement) {
        const originalText = nameElement.textContent;
        nameElement.textContent = '';
        nameElement.style.opacity = '0';
        
        let i = 0;
        const typeWriter = () => {
            if (i < originalText.length) {
                nameElement.textContent += originalText.charAt(i);
                i++;
                setTimeout(typeWriter, 80);
            } else {
                nameElement.style.opacity = '1';
                nameElement.style.transition = 'opacity 0.8s ease';
            }
        };
        
        setTimeout(typeWriter, 800);
    }

    // Enhanced contact buttons
    const contactButtons = document.querySelectorAll('.contact-btn');
    
    contactButtons.forEach(button => {
        // Add click animation with ripple effect
        button.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.cssText = `
                position: absolute;
                width: ${size}px;
                height: ${size}px;
                left: ${x}px;
                top: ${y}px;
                background: rgba(255, 255, 255, 0.4);
                border-radius: 50%;
                transform: scale(0);
                animation: ripple 0.8s cubic-bezier(0.4, 0, 0.2, 1);
                pointer-events: none;
            `;
            
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 800);
        });
        
        // Enhanced hover effects
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px) scale(1.03)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Add ripple animation CSS
    const style = document.createElement('style');
    style.textContent = `
        @keyframes ripple {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }
        
        .contact-btn {
            position: relative;
            overflow: hidden;
        }

        /* Enhanced focus styles for keyboard navigation */
        .keyboard-navigation a:focus,
        .keyboard-navigation button:focus {
            outline: 3px solid #8B0000;
            outline-offset: 2px;
        }

        /* Smooth transitions for all interactive elements */
        a, button, .skill-tag, .contact-btn {
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
    `;
    document.head.appendChild(style);

    // Contact button tracking
    contactButtons.forEach(button => {
        button.addEventListener('click', function() {
            const contactType = this.classList.contains('whatsapp-btn') ? 'WhatsApp' :
                              this.classList.contains('email-btn') ? 'Email' :
                              this.classList.contains('linkedin-btn') ? 'LinkedIn' :
                              this.classList.contains('skype-btn') ? 'Skype' :
                              this.classList.contains('phone-btn') ? 'Phone' : 'Contact';
            
            console.log(`Contact button clicked: ${contactType}`);
        });
    });

    // Enhanced mobile touch feedback
    if ('ontouchstart' in window) {
        contactButtons.forEach(button => {
            button.addEventListener('touchstart', function() {
                this.style.transform = 'scale(0.95)';
            });
            
            button.addEventListener('touchend', function() {
                this.style.transform = 'scale(1)';
            });
        });
    }

    // Enhanced keyboard navigation
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            // Close any open tooltips
            const tooltips = document.querySelectorAll('.skill-tooltip');
            tooltips.forEach(tooltip => {
                tooltip.style.opacity = '0';
                tooltip.style.visibility = 'hidden';
            });
        }
        
        if (e.key === 'Home') {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }
        
        if (e.key === 'End') {
            e.preventDefault();
            window.scrollTo({
                top: document.body.scrollHeight,
                behavior: 'smooth'
            });
        }
    });

    // Enhanced accessibility
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Tab') {
            document.body.classList.add('keyboard-navigation');
        }
    });

    document.addEventListener('mousedown', function() {
        document.body.classList.remove('keyboard-navigation');
    });

    // Enhanced focus styles for keyboard navigation
    const focusableElements = document.querySelectorAll('a, button, input, textarea, select, [tabindex]:not([tabindex="-1"])');
    focusableElements.forEach(element => {
        element.addEventListener('focus', function() {
            this.style.outline = '3px solid #8B0000';
            this.style.outlineOffset = '2px';
        });
        
        element.addEventListener('blur', function() {
            this.style.outline = 'none';
        });
    });

    // Enhanced performance optimization
    let ticking = false;
    function updateOnScroll() {
        // Update scroll-based animations
        ticking = false;
    }

    function requestTick() {
        if (!ticking) {
            requestAnimationFrame(updateOnScroll);
            ticking = true;
        }
    }

    window.addEventListener('scroll', requestTick);

    // Enhanced section highlighting
    const sectionObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.borderLeft = '4px solid #8B0000';
                entry.target.style.transform = 'translateX(5px)';
            } else {
                entry.target.style.borderLeft = '4px solid transparent';
                entry.target.style.transform = 'translateX(0)';
            }
        });
    }, {
        threshold: 0.3
    });

    sections.forEach(section => {
        section.style.borderLeft = '4px solid transparent';
        section.style.transition = 'border-left 0.4s ease, transform 0.4s ease';
        sectionObserver.observe(section);
    });
});

// Service worker for offline functionality (optional)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        navigator.serviceWorker.register('/sw.js')
            .then(function(registration) {
                console.log('ServiceWorker registration successful');
            })
            .catch(function(err) {
                console.log('ServiceWorker registration failed');
            });
    });
} 