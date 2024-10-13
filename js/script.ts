function toggleMenu(): void {
  const navElements = document.querySelector<HTMLElement>(".nav-elements");
  if (navElements) {
    navElements.classList.toggle("active");
  }
}

// Optional: Toggle menu for mobile
function toggleDrawer(): void {
  const drawer = document.querySelector<HTMLElement>(".navbar-drawer");
  if (drawer) {
    drawer.classList.toggle("open");
  }
}

// Ensure the menu icon exists before adding the event listener
const menuIcon = document.querySelector(".menu-icon");
if (menuIcon) {
  menuIcon.addEventListener("click", toggleDrawer);
}

document.addEventListener("DOMContentLoaded", function () {
  const drawer = document.getElementById("navbarDrawer") as HTMLElement | null;
  const links =
    document.querySelectorAll<HTMLAnchorElement>(".nav-elements ul a");

  links.forEach((link) => {
    link.addEventListener("click", function () {
      if (drawer) {
        // Temporarily remove the hover effect by adding a class
        drawer.classList.add("closing");

        // After a short delay, remove the class to restore hover effect
        setTimeout(() => {
          drawer.classList.remove("closing");
        }, 300); // Adjust delay to match your transition time (300ms)
      }
    });
  });
});
