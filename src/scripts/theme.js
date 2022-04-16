const bodyElement = document.body;
const themeToggleButton = document.querySelector("#themeToggle");

function setButtonInfo() {
  if (bodyElement.classList.contains("light")) {
    themeToggleButton.innerHTML = "🔅";
    themeToggleButton.title = "Dark Mode";
  } else {
    themeToggleButton.innerHTML = "🔆";
    themeToggleButton.title = "Light Mode";
  }
}

function setInitialTheme() {
  if (
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: light)").matches
  ) {
    bodyElement.classList.add("light");
  }
  setButtonInfo();
}

themeToggleButton.addEventListener("click", function toggleTheme() {
  bodyElement.classList.toggle("light");
  setButtonInfo();
});

window.onload = setInitialTheme();
