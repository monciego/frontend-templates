const closeBtns = document.querySelectorAll(".close");
const alert = document.querySelector(".alert");

closeBtns.forEach((closeBtn) => {
  closeBtn.addEventListener("click", () => {
    closeBtn.closest(".alert").style.display = "none";
  });
});
