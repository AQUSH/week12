// Toggle between light and dark mode
const toggleBtn = document.getElementById("themeToggle");

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// Apply different styles to card container
function applyStyle(styleName) {
  const container = document.getElementById("cardContainer");
  container.classList.remove("style1", "style2", "style3");
  container.classList.add(styleName);
}
