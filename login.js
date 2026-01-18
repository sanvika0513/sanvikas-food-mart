/* =========================
   SIGNUP FUNCTION
========================= */
function signup() {
  const user = document.getElementById("newUser").value.trim();
  const pass = document.getElementById("newPass").value.trim();

  if (!user || !pass) {
    alert("Please fill all fields");
    return;
  }

  // Save user credentials
  localStorage.setItem("user", user);
  localStorage.setItem("pass", pass);

  alert("Account created successfully 🎉");

  // Redirect to LOGIN page (index.html)
  window.location.href = "index.html";
}


/* =========================
   LOGIN FUNCTION
========================= */
function login() {
  const user = document.getElementById("username").value.trim();
  const pass = document.getElementById("password").value.trim();

  const savedUser = localStorage.getItem("user");
  const savedPass = localStorage.getItem("pass");

  if (!savedUser || !savedPass) {
    alert("No account found. Please sign up first ❗");
    return;
  }

  if (user === savedUser && pass === savedPass) {
    alert("Login successful ✅");

    // Redirect to FOOD MENU page
    window.location.href = "home.html";
  } else {
    alert("Invalid credentials ❌");
  }
}
