export function redirectIfNoCurrentUser(user, location = window.location) {
  if (!user) {
    location.href = "login.html";
  }
}

export function renderCurrentUser(user, container) {
  container.innerHTML = `
<section class="userprofile-container">
<div class="userprofile-titles">
<h1>Hello ${user.firstname}</h1>
<p>${user.lastname}</p>
</div>

<div class="userprofile-content">
<p>Your mail is ${user.email}</p>
<p>
And i could show whatever info you gave me,</br> like your password :<span class ="showpassword">${user.password}</span>
          </p>
          </div>
          
          <button id="disconnect" class="btn btn-red">Disconnect</button>
          </section>
          `;
}
