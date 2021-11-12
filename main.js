//Navbar
const navMenu = document.getElementById("nav-menu");
const navToggle = document.getElementById("nav-toggle");
const navClose = document.getElementById("nav-close");

if (navMenu) {
    navToggle.addEventListener("click", () => {
        navMenu.classList.add("show_nav")
        navClose.classList.add("close");
    })
}
if (navClose) {
    navClose.addEventListener("click", () => {
        navMenu.classList.remove("show_nav")
        navClose.classList.remove("close");
    })
}
//Typing


// check for saved 'darkMode' in localStorage
let darkMode = localStorage.getItem('darkMode');

const darkModeToggle = document.querySelector('#toggle-theme');

const enableDarkMode = () => {
    // 1. Add the class to the body
    document.body.classList.add('theme');
    // 2. Update darkMode in localStorage
    localStorage.setItem('darkMode', 'enabled');
}

const disableDarkMode = () => {
    // 1. Remove the class from the body
    document.body.classList.remove('theme');
    // 2. Update darkMode in localStorage 
    localStorage.setItem('darkMode', null);
}

// If the user already visited and enabled darkMode
// start things off with it on
if (darkMode === 'enabled') {
    enableDarkMode();
}

// When someone clicks the button
darkModeToggle.addEventListener('click', () => {
    // get their darkMode setting
    darkMode = localStorage.getItem('darkMode');

    // if it not current enabled, enable it
    if (darkMode !== 'enabled') {
        enableDarkMode();
        // if it has been enabled, turn it off  
    } else {
        disableDarkMode();
    }
});