document.addEventListener('DOMContentLoaded', () => {
    // Initialize Swiper
    const swiper = new Swiper('.swiper', {
        direction: 'horizontal',
        loop: true,
        slidesPerView: 1,
        spaceBetween: 30,
        autoplay: {
            delay: 2000,
            disableOnInteraction: false,
        },
        on: {
            init: function () {
                // Start with random slide
                const randomIndex = Math.floor(Math.random() * this.slides.length);
                this.slideTo(randomIndex, 0);
            }
        }
    });

    // Change to random slide every 2 seconds
    setInterval(() => {
        const currentIndex = swiper.activeIndex;
        let randomIndex;
        
        // Ensure the new index is different from current
        do {
            randomIndex = Math.floor(Math.random() * swiper.slides.length);
        } while (randomIndex === currentIndex && swiper.slides.length > 1);
        
        swiper.slideTo(randomIndex);
    }, 2000);

    // Mobile Menu Toggle
    const hamburger = document.getElementById('hamburger');
    const navList = document.getElementById('navList');

    hamburger.addEventListener('click', () => {
        navList.classList.toggle('active');
        
        // Change hamburger icon based on menu state
        if (navList.classList.contains('active')) {
            hamburger.innerHTML = '<i class="ri-close-line"></i>';
        } else {
            hamburger.innerHTML = '<i class="ri-menu-line"></i>';
        }
    });

    // Close menu when clicking on a link
    const navLinks = document.querySelectorAll('.nav-list a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navList.classList.remove('active');
            hamburger.innerHTML = '<i class="ri-menu-line"></i>';
        });
    });
});


// Tab Filter Functionality
const tabBtns = document.querySelectorAll('.tab-btn');
const menuCards = document.querySelectorAll('.menu-card');

tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Remove active class from all buttons
        tabBtns.forEach(btn => btn.classList.remove('active'));
        
        // Add active class to clicked button
        btn.classList.add('active');
        
        // Get filter value
        const filterValue = btn.textContent.toLowerCase();
        
        // Filter menu items
        menuCards.forEach(card => {
            if (filterValue === 'all') {
                card.style.display = 'block';
            } else {
                if (card.dataset.category === filterValue) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            }
        });
    });
});

// Initialize Testimonial Swiper
const testimonialSwiper = new Swiper('.testimonial-slider', {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 20,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
});