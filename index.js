document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault(); // prevents the browser from automatically sending form input to backend server
  const input = document.querySelector("#message-input");
  // Using Base64 for encryption
  const encrypted = btoa(input.value)

  document.querySelector("#link-input").value = encrypted
});
