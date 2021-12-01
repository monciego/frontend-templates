const searchBtn = document.querySelector(".search-icon");
const mobileSearchInput = document.querySelector(".mobile-search");

searchBtn.onclick = () => {
  mobileSearchInput.classList.toggle("active");
};

// user dropdowm
const userDropDown = document.querySelector(".user-dropdown");
const userDropDownContent = document.querySelector(".user-dropdown-content");

userDropDown.addEventListener("click", () => {
  userDropDownContent.classList.toggle("active");
});