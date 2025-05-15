 document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const navItems = document.querySelectorAll('.nav-links a');

    // Toggle nav on hamburger click
    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });

    // Close nav on item click and scroll to section
    navItems.forEach(item => {
      item.addEventListener('click', () => {
        navLinks.classList.remove('active');
      });
    });
  });

