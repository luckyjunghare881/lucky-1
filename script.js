/* ===============================
   PORTFOLIO JAVASCRIPT
   Author: Lucky Junghare
================================ */

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    
    // ===============================
    // SCROLL TO TOP FUNCTIONALITY
    // ===============================
    const scrollTopBtn = document.getElementById('scroll-top');
    
    function toggleScrollButton() {
        if (window.scrollY > 300) {
            scrollTopBtn.classList.add('visible');
        } else {
            scrollTopBtn.classList.remove('visible');
        }
    }
    
    window.addEventListener('scroll', toggleScrollButton);
    
    scrollTopBtn.addEventListener('click', function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // ===============================
    // MOBILE HAMBURGER MENU
    // ===============================
    const hamburger = document.getElementById('hamburger');
    const mobileNav = document.getElementById('mobile-nav');
    
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        mobileNav.classList.toggle('active');
    });

    // Close mobile nav on link click
    document.querySelectorAll('.mobile-link').forEach(function(link) {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            mobileNav.classList.remove('active');
        });
    });

    // ===============================
    // ACTIVE NAV LINK ON SCROLL
    // ===============================
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    const bottomItems = document.querySelectorAll('.bottom-item');
    
    function highlightActiveSection() {
        let current = 'home';
        const scrollY = window.scrollY;
        
        sections.forEach(function(section) {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
                current = sectionId;
            }
        });
        
        // Update desktop nav links
        navLinks.forEach(function(link) {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + current) {
                link.classList.add('active');
            }
        });
        
        // Update bottom nav items
        bottomItems.forEach(function(item) {
            const parent = item.closest('a');
            if (parent) {
                item.classList.remove('active');
                if (parent.getAttribute('href') === '#' + current) {
                    item.classList.add('active');
                }
            }
        });
    }
    
    window.addEventListener('scroll', highlightActiveSection);
    highlightActiveSection(); // Initial call

    // ===============================
    // NAVBAR SCROLL EFFECT
    // ===============================
    const navbar = document.getElementById('navbar');
    
    function handleNavbarScroll() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }
    
    window.addEventListener('scroll', handleNavbarScroll);

    // ===============================
    // SMOOTH SCROLL FOR ANCHOR LINKS
    // ===============================
    document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                e.preventDefault();
                const navHeight = navbar.offsetHeight;
                const targetPosition = targetElement.offsetTop - navHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // ===============================
    // ANIMATION ON SCROLL
    // ===============================
    const animatedElements = document.querySelectorAll('.animate-slide-up, .animate-fade-in');
    
    function checkAnimation() {
        const triggerBottom = window.innerHeight * 0.85;
        
        animatedElements.forEach(function(element) {
            const elementTop = element.getBoundingClientRect().top;
            
            if (elementTop < triggerBottom) {
                element.classList.add('animated');
            }
        });
    }
    
    window.addEventListener('scroll', checkAnimation);
    checkAnimation(); // Initial check

    // ===============================
    // FORM SUBMISSION (Contact)
    // ===============================
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(contactForm);
            const name = formData.get('name');
            
            // Show success message (you can replace with actual form submission)
            alert('Thank you ' + name + '! Your message has been sent successfully.');
            
            // Reset form
            contactForm.reset();
        });
    }

    // ===============================
    // SKILL BAR ANIMATION
    // ===============================
    const skillBars = document.querySelectorAll('.skill-progress');
    let skillsAnimated = false;
    
    function animateSkillBars() {
        const skillsSection = document.getElementById('skills');
        if (!skillsSection || skillsAnimated) return;
        
        const sectionTop = skillsSection.getBoundingClientRect().top;
        const triggerPoint = window.innerHeight * 0.75;
        
        if (sectionTop < triggerPoint) {
            skillBars.forEach(function(bar) {
                const width = bar.style.width;
                bar.style.width = '0';
                setTimeout(function() {
                    bar.style.width = width;
                }, 100);
            });
            skillsAnimated = true;
        }
    }
    
    window.addEventListener('scroll', animateSkillBars);
    
});
