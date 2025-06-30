document.getElementById("contact-form").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Thank you for reaching out! 😊");
  this.reset();
});


  function toggleMobileMenu() {
    const menu = document.getElementById('mobile-menu');
    menu.classList.toggle('hidden');
  }

  function toggleDarkMode() {
    document.documentElement.classList.toggle('dark');
  }

