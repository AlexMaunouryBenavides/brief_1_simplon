const form = document.getElementById("registerForm");

const users = JSON.parse(localStorage.getItem("users")) || [];

function toggleError(inputId, message, show) {
  const input = document.getElementById(inputId);
  const errorMessage = input.nextElementSibling;

  if (show) {
    errorMessage.textContent = message;
    errorMessage.classList.add("visible");
  } else {
    errorMessage.classList.remove("visible");
  }
}

function validation(firstname, lastname, email, password) {
  let isValid = true;
  if (!firstname) {
    toggleError("firstname", "Firstname is required", true);
    isValid = false;
  } else {
    toggleError("firstname", "", false);
  }

  if (!lastname) {
    toggleError("lastname", "lastname is required", true);
    isValid = false;
  } else {
    toggleError("lastname", "", false);
  }

  if (password.length < 3 || password.length > 12) {
    toggleError("password", "password must be between 3 and 12 caracters", true);
    isValid = false;
  } else {
    toggleError("password", "", false);
  }

  if (!email || !email.includes("@")) {
    toggleError("email", "email must contains an @", true);
    isValid = false;
  } else {
    toggleError("email", "", false);
  }
  return isValid;
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
