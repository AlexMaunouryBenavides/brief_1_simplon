const loginForm = document.getElementById("loginForm");

const users = JSON.parse(localStorage.getItem("users")) || [];

function login(email, password) {
  const user = users.find((id) => id.email === email);
  if (!user) {
    alert("Email not found");
    return;
  }

  if (user.password !== password) {
    alert("Wrong password");
    return;
  }
  localStorage.setItem("currentUser", JSON.stringify(user));

  window.location.href = "profile.html";
}

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  if (!email || !password) {
    alert("All fields are required");
    return;
  }
  login(email, password);
});
