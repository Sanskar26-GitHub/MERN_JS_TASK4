function validateForm() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var usernameError = document.getElementById("usernameError");
    var passwordError = document.getElementById("passwordError");
    
    usernameError.textContent = "";
    passwordError.textContent = "";

    if (username === "") {
      usernameError.textContent = "Username is required";
      return false;
    }
    
    if (password === "") {
      passwordError.textContent = "Password is required";
      return false;
    }
  }