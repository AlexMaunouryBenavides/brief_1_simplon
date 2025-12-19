import { redirectIfNoCurrentUser, renderCurrentUser } from "./profile.js";

const currentUser = JSON.parse(localStorage.getItem("currentUser"));
const showUser = document.getElementById("userprofile");

redirectIfNoCurrentUser(currentUser);

renderCurrentUser(currentUser, showUser);

const disconnectBtn = document.getElementById("disconnect");
disconnectBtn.addEventListener("click", (e) => {
  localStorage.removeItem("currentUser");
  window.location.href = "./index.html";
});
