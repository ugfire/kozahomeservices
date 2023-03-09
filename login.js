const loginForm = document.querySelector("#login-form");
loginForm.addEventListener("submit", function(event) {
  event.preventDefault();
  const username = document.querySelector("#username").value;
  const password = document.querySelector("#password").value;
  axios.get("https://sheetdb.io/api/v1/<YOUR-API-KEY>/search?username=" + username + "&password=" + password)
  .then(function(response) {
    if (response.data.length > 0) {
      alert("Login successful!");
    } else {
      alert("Invalid username or password.");
    }
  })
  .catch(function(error) {
    alert("An error occurred. Please try again later.");
  });
});
