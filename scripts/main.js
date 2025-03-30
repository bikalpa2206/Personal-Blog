document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const mainNav = document.querySelector('.main-nav');
    
    mobileMenuBtn.addEventListener('click', function() {
        mainNav.style.display = mainNav.style.display === 'flex' ? 'none' : 'flex';
    });
    
    // Update copyright year automatically
    document.getElementById('year').textContent = new Date().getFullYear();
    
    // Add animation to cards when scrolling
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.entry-card, .category-card');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            
            if (elementPosition < screenPosition) {
                element.classList.add('animate');
            }
        });
    };
    
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll();
    
    // Simple form handling (would need backend for real functionality)
    const newsletterForm = document.querySelector('.newsletter form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = this.querySelector('input').value;
            alert(`Thanks for subscribing! We'll send journal updates to ${email}`);
            this.querySelector('input').value = '';
        });
    }
});
