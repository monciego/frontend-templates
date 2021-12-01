// mobile menu
const menuBtn = document.querySelector(".menu-btn");
const closeBtn = document.querySelector(".close-menu");
const mobileNav = document.querySelector(".mobile-nav");

menuBtn.addEventListener("click", () => {
  mobileNav.classList.add("active");
});

closeBtn.addEventListener("click", () => {
  mobileNav.classList.remove("active");
});

// nav dropdown
const dropdownLink = document.querySelector(".dropdown-link");
const dropdownContent = document.querySelector(".navlink-dropdown ");

dropdownLink.addEventListener("click", () => {
  dropdownContent.classList.toggle("active");
});

//  mobile dropdown
const mobileDropdownLink = document.querySelector(".mobile-dropdown-link");
const mobileDropdownContent = document.querySelector(".mobile-dropdown");

mobileDropdownLink.addEventListener("click", () => {
  mobileDropdownContent.classList.toggle("active");
  if (mobileDropdownLink.classList.contains("active")) {
    document.querySelector(".caret-right").style.transform = "rotate(90deg)";
  } else {
    document.querySelector(".caret-right").style.transform = "rotate(0deg)";
  }
});
