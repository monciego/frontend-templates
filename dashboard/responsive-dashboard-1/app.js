const searchBtn = document.querySelector(".search-icon");
const mobileSearchInput = document.querySelector(".mobile-search");

searchBtn.onclick = () => {
  mobileSearchInput.classList.toggle("active");
};
