function signup() {
  let user = document.getElementById("newUser").value;
  let pass = document.getElementById("newPass").value;

  if (!user || !pass) {
    alert("Please fill all fields");
    return;
  }

  localStorage.setItem("user", user);
  localStorage.setItem("pass", pass);

  alert("Account created successfully 🎉");
  window.location.href = "login.html";
}

function login() {
  let user = document.getElementById("username").value;
  let pass = document.getElementById("password").value;

  let savedUser = localStorage.getItem("user");
  let savedPass = localStorage.getItem("pass");

  if (user === savedUser && pass === savedPass) {
    alert("Login successful ✅");
    window.location.href = "index.html";
  } else {
    alert("Invalid credentials ❌");
  }
}
