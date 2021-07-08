document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");

    hamburger.addEventListener("click", () => {
        if (navMenu.classList.contains("active")) {
            hamburger.classList.remove("active");
            navMenu.classList.remove("active");
        } else {
            hamburger.classList.add("active");
            navMenu.classList.add("active");
        }
    });
});