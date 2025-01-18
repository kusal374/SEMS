// Add active class to current page nav item
document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    // Toggle mobile menu
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
    
    // Add active class to current page
    const currentLocation = window.location.pathname;
    const menuItems = document.querySelectorAll('.nav-links a');
    
    menuItems.forEach(item => {
        if (item.getAttribute('href') === currentLocation) {
            item.classList.add('active');
        }
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.main-nav')) {
            navLinks.classList.remove('active');
        }
    });
}); 