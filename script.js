// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const navMenu = document.getElementById('nav-menu');

if (mobileMenuBtn && navMenu) {
    mobileMenuBtn.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        const icon = mobileMenuBtn.querySelector('i');
        if (icon) {
            icon.classList.toggle('active');
        }
    });

    // Close mobile menu when clicking on a nav link
    document.querySelectorAll('#nav-menu a').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            const icon = mobileMenuBtn.querySelector('i');
            if (icon) {
                icon.classList.remove('active');
            }
        });
    });
}

// Header scroll effect
window.addEventListener('scroll', () => {
    const header = document.getElementById('header');
    if (header) {
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    }
    
    // Back to top button
    const backToTop = document.getElementById('backToTop');
    if (backToTop) {
        if (window.scrollY > 300) {
            backToTop.classList.add('active');
        } else {
            backToTop.classList.remove('active');
        }
    }
});

// Smooth scrolling for anchor links (excluding back-to-top button)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    if (anchor.id !== 'backToTop') {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const headerHeight = document.getElementById('header')?.offsetHeight || 80;
                window.scrollTo({
                    top: targetElement.offsetTop - headerHeight,
                    behavior: 'smooth'
                });
            }
        });
    }
});

// Back to top button functionality
const backToTopBtn = document.getElementById('backToTop');
if (backToTopBtn) {
    backToTopBtn.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Form submission
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const name = document.getElementById('name')?.value;
        const email = document.getElementById('email')?.value;
        
        if (name && email) {
           alert(`Thank you, ${name}! Your message has been received. We'll contact you soon at ${email}.`);
contactForm.reset();

        } else {
            alert('Please fill in all required fields.');
        }
    });
}

// Newsletter subscription
const newsletterForm = document.querySelector('.footer-newsletter');
if (newsletterForm) {
    newsletterForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const emailInput = this.querySelector('input[type="email"]');
        const email = emailInput?.value;
        
        if (email) {
        alert(`Thank you for subscribing with ${email}! You'll receive our fitness tips and special offers soon.`);

            emailInput.value = '';
        } else {
            alert('Please enter a valid email address.');
        }
    });
}


     function toggleRoles() {
      const roleDiv = document.getElementById('roleButtons');
      roleDiv.style.display = roleDiv.style.display === 'block' ? 'none' : 'block';
    }

    // Optional: hide on outside click
    document.addEventListener('click', function(e) {
      const btn = document.querySelector('.btn');
      const roleDiv = document.getElementById('roleButtons');
      if (!btn.contains(e.target) && !roleDiv.contains(e.target)) {
        roleDiv.style.display = 'none';
      }
    });

   