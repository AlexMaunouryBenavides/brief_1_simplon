const currentUser = JSON.parse(localStorage.getItem("currentUser"));
const showUser = document.getElementById("userprofile");

if (!currentUser) {
  window.location.href = "login.html";
}

showUser.innerHTML = `
<section class="userprofile-container">
<div class="userprofile-titles">
<h1>Hello ${currentUser.firstname}</h1>
<p>${currentUser.lastname}</p>
</div>

<div class="userprofile-content">
<p>Your mail is ${currentUser.email}</p>
<p>
And i could show whatever info you gave me,</br> like your password :<span class ="showpassword">${currentUser.password}</span>
          </p>
          </div>
          
          <button id="disconnect" class="btn btn-red">Disconnect</button>
          </section>
          `;
const disconnectBtn = document.getElementById("disconnect");

disconnectBtn.addEventListener("click", (e) => {
  localStorage.removeItem("currentUser");
  window.location.href = "/";
});
