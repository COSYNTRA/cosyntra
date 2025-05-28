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


  // Initialize EmailJS
(function(){
  emailjs.init("hgNYXOz9KeYR6mcBx"); // Replace with your actual User ID
})();

// Form submit handler
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contact-form");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    emailjs.sendForm("service_wwh3nvm", "template_gq1697o", this)
      .then(function(response) {
        alert("Message sent successfully!");
      }, function(error) {
        alert("Failed to send message. Please try again.");
        console.error(error);
      });
  });
});
