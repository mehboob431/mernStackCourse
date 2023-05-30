function signIn() {
  const username = document.getElementById("signin-username").value;
  const password = document.getElementById("signin-password").value;

  if (username.length === 0 || password.length === 0) {
    alert("Please enter both username and password.");
    return;
  }

  // Your sign-in logic here

  alert("Sign-in successful!");
}

function signUp() {
  const username = document.getElementById("signup-username").value;
  const password = document.getElementById("signup-password").value;
  const confrm_password = document.getElementById("confirm-password").value;

  if (username.length === 0 || password.length === 0) {
    alert("Please enter both username and password.");
    return;
  }
  if (password.length <= 8) {
    alert("Your  password is Lessthen 8 Characters");
    return;
  } else {
    if (password !== confrm_password) {
      alert("Your Password is Don't Same Please Enter Correct Password ");
    } else {
      alert("Sign-up successful!");
    }
  }
}
