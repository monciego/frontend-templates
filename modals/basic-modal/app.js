const modalBtn = document.querySelector(".modal-btn");
const modal = document.querySelector(".modal-container");
const closeBtn = document.querySelector(".close-modal");
const buttons = document.querySelectorAll(".modal-cta button");
const overlay = document.getElementById("overlay");

modalBtn.addEventListener("click", () => {
  modal.classList.add("active");
  overlay.classList.add("active");
});

const remove = () => {
  modal.classList.remove("active");
  overlay.classList.remove("active");
};

closeBtn.addEventListener("click", () => {
  remove();
});

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    remove();
  });
});

window.addEventListener("click", (e) => {
  if (e.target === overlay) {
    remove();
  }
});
