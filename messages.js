(function() {
    // Get form input fields
    let name = document.getElementById("name");
let email = document.getElementById("email");
let phone = document.getElementById("phone");
let message = document.getElementById("message");
let form = document.getElementById("contact-form");

form.addEventListener("submit", function(event) {
  event.preventDefault();

  // Send GET request to SheetDB API to get number of existing rows
  let xhrGet = new XMLHttpRequest();
  xhrGet.open("GET", "https://sheetdb.io/api/v1/xk4526495z3zp", true);
  xhrGet.setRequestHeader("Content-Type", "application/json");
  xhrGet.onreadystatechange = function() {
    if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
      let response = JSON.parse(this.responseText);
      let rowCount = response.length;

      // Generate ID value based on number of existing rows
      let id = rowCount + 1;

      // Create data object with auto-incremented ID
      let data = {
        id: id,
        name: name.value,
        email: email.value,
        phone: phone.value,
        message: message.value,
        date: new Date().toISOString()
      };

      // Send POST request to SheetDB API with data
      let xhrPost = new XMLHttpRequest();
      xhrPost.open("POST", "https://sheetdb.io/api/v1/xk4526495z3zp", true);
      xhrPost.setRequestHeader("Content-Type", "application/json");
      xhrPost.send(JSON.stringify(data));

      // Reset form fields after submitting data
      name.value = "";
      email.value = "";
      phone.value = "";
      message.value = "";

      // Display success message to user
      alert("Thank you for your message!");
    }
  };
  xhrGet.send();
});
})();