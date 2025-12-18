const form = document.getElementById("registerForm");

const users = JSON.parse(localStorage.getItem("users")) || [];

function validation(firstname, lastname, email, password) {
  if (!firstname || !lastname || !email || !password) {
    alert("All fields are required");
    return false;
  }

  if (password.length < 3 || password.length > 12) {
    alert("Password must be between 3 and 12 characters");
    return false;
  }

  if (!email.includes("@")) {
    alert("Email must contain an @ .");
    return false;
  }
  return true;
}

function register(firstname, lastname, email, password) {
  if (!validation(firstname, lastname, email, password)) {
    return;
  }

  const userExist = users.some((user) => user.email === email);
  if (userExist) {
    alert("This email is already used please login");
    return;
  }

  users.push({ firstname, lastname, email, password });
  localStorage.setItem("users", JSON.stringify(users));

  window.location.href = "login.html";
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const firstname = document.getElementById("firstname").value.trim();
  const lastname = document.getElementById("lastname").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  register(firstname, lastname, email, password);
});
