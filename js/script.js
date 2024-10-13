function toggleMenu() {
  var navElements = document.querySelector(".nav-elements");
  navElements.classList.toggle("active");
}

// Optional: Toggle menu for mobile
function toggleDrawer() {
  const drawer = document.querySelector(".navbar-drawer");
  drawer.classList.toggle("open");
}

document.querySelector(".menu-icon").addEventListener("click", toggleDrawer);
