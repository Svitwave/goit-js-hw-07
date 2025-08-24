const form = document.querySelector(".login-form");
form.addEventListener("submit", handlerSubmit);
function handlerSubmit(event) {
  event.preventDefault();
  const email = event.currentTarget.elements.email.value;
  const password = event.currentTarget.elements.password.value;
  if (email.trim() === "" || password.trim() === "") {
    alert("All form fields must be filled in");
  } else {
    const info = {
      email: event.currentTarget.elements.email.value,
      password: event.currentTarget.elements.password.value,
    };
    form.reset();
    console.log(info);
  }
}
