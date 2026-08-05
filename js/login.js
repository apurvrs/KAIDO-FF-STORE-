/* ==========================================================
   KAIDO FF STORE
   login.js
========================================================== */

document.addEventListener("DOMContentLoaded", () => {

    const form = document.getElementById("loginForm");

    form.addEventListener("submit", (e) => {

        e.preventDefault();

        const username =
        document.getElementById("username").value.trim();

        const password =
        document.getElementById("password").value;

        if (
            username === "admin" &&
            password === "kaido123"
        ) {

            localStorage.setItem(
                "adminLoggedIn",
                "true"
            );

            window.location.href =
            "admin.html";

        }
        else{

            alert("Invalid Username or Password");

        }

    });

});
