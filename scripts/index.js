// script.js
document.addEventListener('DOMContentLoaded', function() {
    // Get modal elements
    const modal = document.getElementById("myModal");
    const modalImg = document.getElementById("modalImage");
    const modalTitle = document.getElementById("modalTitle");
    const modalQuote = document.getElementById("modalQuote");
    const closeBtn = document.querySelector('.close');
    
    // Add click event to all gallery items
    document.querySelectorAll('.gallery-item').forEach(item => {
        item.addEventListener('click', function() {
            const imgSrc = this.querySelector('img').src;
            const title = this.getAttribute('data-title');
            const quote = this.getAttribute('data-quote');
            
            modalImg.src = imgSrc;
            modalImg.alt = this.querySelector('img').alt;
            modalTitle.textContent = title;
            modalQuote.textContent = `"${quote}"`;
            
            modal.style.display = "block";
            document.body.style.overflow = 'hidden';
        });
    });
    
    // Close modal when clicking X
    closeBtn.addEventListener('click', function() {
        modal.style.display = "none";
        document.body.style.overflow = 'auto';
    });
    
    // Close when clicking outside modal
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = "none";
            document.body.style.overflow = 'auto';
        }
    });
    
    // Close with ESC key
    document.addEventListener('keydown', function(event) {
        if (event.key === "Escape" && modal.style.display === "block") {
            modal.style.display = "none";
            document.body.style.overflow = 'auto';
        }
    });
});