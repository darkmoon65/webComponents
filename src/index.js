import "./css/global.css";
import "./components/task-item/task-item.js";
import "./components/auth-login/auth-login.js";
import "./components/task-form/task-form.js";
import "./components/web-header/web-header.js";
import "./components/task-filter/task-filter.js";
import "./components/task-trash/task-trash.js";
import "./components/task-all/task-all.js";
import "./components/more-task/more-task.js";
import "./components/board-task/board-task.js";
import "./components/create-task/create-task.js";
import "./components/modal-trash/modal-trash.js";

document.addEventListener("DOMContentLoaded", () => {
  const app = document.querySelector("#app");

  const loginTemplate = document.querySelector("#loginTemplate");
  const dashboardTemplate = document.querySelector("#dashboardTemplate");

  const isLoggedIn = sessionStorage.getItem("loggedIn");

  if (isLoggedIn) {
    renderTemplate(dashboardTemplate);
  } else {
    renderTemplate(loginTemplate);
  }

  app.addEventListener("login-success", () => {
    console.log("succeesss");
    renderTemplate(dashboardTemplate);
  });

  app.addEventListener("logout-success", () => {
    console.log("succeesss");
    renderTemplate(loginTemplate);
  });

  function renderTemplate(template) {
    app.innerHTML = "";
    const clone = template.content.cloneNode(true);
    app.appendChild(clone);
  }
});

function initializeUsers() {
  if (!localStorage.getItem("users")) {
    const initialUsers = [
      { username: "admin", password: "123456" },
      { username: "user", password: "password" },
    ];
    localStorage.setItem("users", JSON.stringify(initialUsers));
  }
}
initializeUsers();
