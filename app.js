document.addEventListener('DOMContentLoaded', () => {

    // 1. Interactive 3D Hero Graphic (Mouse Tracking)
    const scene = document.getElementById('interactive-scene');
    const heroSection = document.querySelector('.hero-graphic');

    if (scene && heroSection) {
        heroSection.addEventListener('mousemove', (e) => {
            const rect = heroSection.getBoundingClientRect();
            // Calculate mouse position relative to center of the graphic section (-1 to 1)
            const x = (e.clientX - rect.left - rect.width / 2) / (rect.width / 2);
            const y = (e.clientY - rect.top - rect.height / 2) / (rect.height / 2);

            // Apply rotation based on mouse coordinates
            // Default is rotateX(-20deg) rotateY(45deg)
            const rotateX = -20 - (y * 90); // Tilt up/down more heavily (90deg)
            const rotateY = 45 + (x * 180); // Rotate fully left/right (180deg)

            scene.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        });

        // Reset to default on mouse leave
        heroSection.addEventListener('mouseleave', () => {
            scene.style.transform = `rotateX(-20deg) rotateY(45deg)`;
        });
    }

    // 2. Magnetic Buttons with Cursor Glow
    const magneticBtns = document.querySelectorAll('.magnetic-btn');

    magneticBtns.forEach(btn => {
        const glow = btn.querySelector('.btn-glow');

        btn.addEventListener('mousemove', (e) => {
            const rect = btn.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            // Move the glow element to follow the cursor
            if (glow) {
                glow.style.left = `${x}px`;
                glow.style.top = `${y}px`;
            }
        });
    });

    // 3. Scroll Reveal Animation for Stats Section (Intersection Observer)
    const statCards = document.querySelectorAll('.stat-card');
    
    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                // Add staggered delay based on index
                setTimeout(() => {
                    entry.target.classList.add('visible');
                }, index * 150); // 150ms delay between each card
                
                // Unobserve after revealing
                observer.unobserve(entry.target);
            }
        });
    }, {
        root: null,
        threshold: 0.1, // Trigger when 10% of the element is visible
        rootMargin: "0px 0px -50px 0px"
    });

    statCards.forEach(card => {
        revealObserver.observe(card);
    });

    // 4. Lightbox Image Zoom Feature for Services Gallery
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxClose = document.getElementById('lightbox-close');
    const galleryItems = document.querySelectorAll('.gallery-item');

    galleryItems.forEach(item => {
        item.addEventListener('click', () => {
            const img = item.querySelector('img');
            if (img && lightbox && lightboxImg) {
                lightboxImg.src = img.src;
                lightboxImg.alt = img.alt || 'Zoomed View';
                lightbox.classList.add('active');
            }
        });
    });

    if (lightboxClose) {
        lightboxClose.addEventListener('click', () => {
            lightbox.classList.remove('active');
        });
    }

    if (lightbox) {
        lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox) {
                lightbox.classList.remove('active');
            }
        });
    // 5. Mobile Navigation Menu Toggle Logic
    const mobileToggle = document.querySelector('.mobile-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (mobileToggle && navLinks) {
        mobileToggle.addEventListener('click', () => {
            mobileToggle.classList.toggle('active');
            navLinks.classList.toggle('active');
        });

        // Auto-close menu when tapping a link
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                mobileToggle.classList.remove('active');
                navLinks.classList.remove('active');
            });
        });
    }

});
