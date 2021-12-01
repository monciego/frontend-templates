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
