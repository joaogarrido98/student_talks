document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");
    const element = document.body;

    //change the css styles for the burger menu button according to the click
    hamburger.addEventListener("click", () => {
        if (navMenu.classList.contains("active")) {
            hamburger.classList.remove("active");
            navMenu.classList.remove("active");
            element.classList.toggle("lock-scroll");
        } else {
            hamburger.classList.add("active");
            navMenu.classList.add("active");
            element.classList.toggle("lock-scroll");
        }
    });

    //change theme on checkbox change
    const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
    toggleSwitch.addEventListener('change', (event) => {
        if (event.target.checked) {
            document.documentElement.setAttribute('data-theme', 'light');
            localStorage.setItem('theme', 'light');
        }
        else {
            document.documentElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
        }
    });

    //check which theme is stored in the local storage and apply it
    const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null;
    if (currentTheme) {
        document.documentElement.setAttribute('data-theme', currentTheme);

        if (currentTheme === 'light') {
            toggleSwitch.checked = true;
        }
    }
});
