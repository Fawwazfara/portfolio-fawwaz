document.addEventListener("DOMContentLoaded", () => {
    // Scroll Animation Logic using Intersection Observer
    
    // Select all elements that need to be animated
    const animatedElements = document.querySelectorAll(
        '.fade-in, .slide-up, .slide-left, .slide-right, .zoom-in'
    );

    // Observer options
    const observerOptions = {
        root: null, // Use the viewport
        rootMargin: '0px',
        threshold: 0.15 // Trigger when 15% of the element is visible
    };

    // Create the observer
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add the 'show' class to trigger CSS transition
                entry.target.classList.add('show');
                // Optional: Stop observing once animated
                // observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe each element
    animatedElements.forEach(el => observer.observe(el));

    // Optional: Parallax effect for clouds on scroll
    const cloudsBg = document.querySelector('.clouds-bg');
    window.addEventListener('scroll', () => {
        const scrolled = window.scrollY;
        // Move clouds background slightly when scrolling
        if(cloudsBg) {
            cloudsBg.style.transform = `translateY(${scrolled * 0.2}px)`;
        }
    });
});
