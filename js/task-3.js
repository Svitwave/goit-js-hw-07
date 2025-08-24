const userName = document.querySelector("#name-input");
const outputEl = document.querySelector("#name-output");
userName.addEventListener("input", handleInput);
function handleInput() {
  if (userName.value.trim() === "") {
    outputEl.textContent = "Anonymous";
  } else {
    outputEl.textContent = userName.value.trim();
  }
}
