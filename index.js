// Extracting message from url
const { hash } = window.location
// Remove extra hash from url
const message = atob(hash.replace('#', ''))

if (message) {
  document.querySelector("#message-form").classList.add("hide")
  document.querySelector("#message-show").classList.remove("hide")

  document.querySelector("h1").innerHTML = message
}

document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault(); // prevents the browser from automatically sending form input to backend server

  document.querySelector("#message-form").classList.add("hide");
  document.querySelector("#link-form").classList.remove("hide");

  const input = document.querySelector("#message-input");
  // Using Base64 for encryption
  const encrypted = btoa(input.value);

  const input2 = document.querySelector("#link-input");

  input2.value = `${window.location}#${encrypted}`;
  input2.select();
});
