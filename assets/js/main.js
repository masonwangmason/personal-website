// Back to Top Button Logic
document.addEventListener("DOMContentLoaded", () => {
  const backToTopButton = document.getElementById("backToTop");

  // Show/Hide Button on Scroll
  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      backToTopButton.style.display = "flex";
    } else {
      backToTopButton.style.display = "none";
    }
  });

  // Scroll Back to Top on Click
  backToTopButton.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
});
