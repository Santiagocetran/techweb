// Sticky Navigation Bar
window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if(window.scrollY > 50){
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Mobile Navigation Toggle
const menuToggle = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', function() {
    navLinks.classList.toggle('active');
});

// Carousel Functionality
const carouselTrack = document.querySelector('.carousel-track');
const slides = Array.from(carouselTrack.children);
const nextButton = document.querySelector('.carousel-btn.next');
const prevButton = document.querySelector('.carousel-btn.prev');

let currentIndex = 0; // Keep track of the current index
let slideWidth = slides[0].getBoundingClientRect().width;

// Recalculate slide width on window resize
window.addEventListener('resize', () => {
    slideWidth = slides[0].getBoundingClientRect().width;
    moveToSlide(currentIndex);
});

// Move to the slide at the given index
const moveToSlide = (index) => {
    carouselTrack.style.transition = 'transform 0.5s ease-in-out';
    carouselTrack.style.transform = `translateX(-${slideWidth * index}px)`;
};

// Click Next
nextButton.addEventListener('click', () => {
    currentIndex++;
    if (currentIndex === slides.length - 2) {
        currentIndex = 0; // Go back to the first slide
    }
    moveToSlide(currentIndex);
});

// Click Prev
prevButton.addEventListener('click', () => {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = slides.length - 1; // Go to the last slide
    }
    moveToSlide(currentIndex);
});

// Auto-Scroll Carousel
let autoScroll = setInterval(() => {
    nextButton.click();
}, 5000);

// Stop auto-scroll when user interacts
nextButton.addEventListener('click', () => clearInterval(autoScroll));
prevButton.addEventListener('click', () => clearInterval(autoScroll));

// Testimonials Slider
const testimonialSlides = document.querySelectorAll('.testimonial-slide');
let currentTestimonial = 0;

function showTestimonial(n) {
    testimonialSlides.forEach((slide, index) => {
        slide.classList.remove('active');
        if(index === n) {
            slide.classList.add('active');
        }
    });
}

setInterval(() => {
    currentTestimonial = (currentTestimonial + 1) % testimonialSlides.length;
    showTestimonial(currentTestimonial);
}, 7000);
