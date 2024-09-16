// Get references to the HTML elements
let hamMenuIcon = document.getElementById("ham-menu");
let navBar = document.getElementById("nav-bar");
let navLinks = navBar.querySelectorAll("li");
let scrollTopBtn = document.getElementById("scroll-top");

/* SideMenu Toggle */
// Add a click event listener to the hamburger menu icon
hamMenuIcon.addEventListener("click", () => {
  // Toggle the 'active' class on the navBar to show or hide the side menu
  navBar.classList.toggle("active");
  // Toggle the 'fa-times' class on the hamburger menu icon to change its appearance
  hamMenuIcon.classList.toggle("fa-times");
});

// Add click event listeners to each navigation link
navLinks.forEach((navLink) => {
  navLink.addEventListener("click", () => {
    // Remove the 'active' class from the navBar to hide the side menu
    navBar.classList.remove("active");
    // Also remove the 'fa-times' class from the hamburger menu icon
    hamMenuIcon.classList.toggle("fa-times");
  });
});

// Get a reference to the header element
let header = document.querySelector("header");

// Add a scroll event listener to the window
window.onscroll = () => {
  // Sticky Header: Add or remove 'sticky' class based on scroll position
  let pos = document.documentElement.scrollTop;
  if (pos > 0) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }

  // Scroll Top Button: Show or hide the scroll-to-top button based on scroll position
  if (pos > 300) {
    scrollTopBtn.style.display = "grid";
  } else {
    scrollTopBtn.style.display = "none";
  }

  // Add a click event listener to the scroll-to-top button
  scrollTopBtn.addEventListener("click", () => {
    // Scroll the document back to the top
    document.documentElement.scrollTop = 0;
  });
};
