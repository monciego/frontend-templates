// mobile menu
const menuBtn = document.querySelector(".menu");
const closeBtn = document.querySelector(".close-menu");
const mobileMenu = document.querySelector(".mobile-menu");

menuBtn.addEventListener("click", () => {
  mobileMenu.classList.add("active");
});

closeBtn.addEventListener("click", () => {
  mobileMenu.classList.remove("active");
});

// mobile search
const searchBtn = document.querySelector(".search-icon");
const mobileSearchInput = document.querySelector(".mobile-search");

searchBtn.onclick = () => {
  mobileSearchInput.classList.toggle("active");
};

// user dropdown
const userDropDown = document.querySelector(".user-dropdown");
const userDropDownContent = document.querySelector(".user-dropdown-content");

userDropDown.addEventListener("click", () => {
  userDropDownContent.classList.toggle("active");
});

// notification
const notificationBtn = document.querySelector(".notifications");
const notificationsContent = document.querySelector(".notifications-content");

notificationBtn.addEventListener("click", () => {
  notificationsContent.classList.toggle("active");
});
