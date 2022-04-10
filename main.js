//Navbar
const navMenu = document.getElementById("nav-menu");
const navToggle = document.getElementById("nav-toggle");
const navClose = document.getElementById("nav-close");
const navlinks = document.getElementsByClassName("nav-link");
if (navMenu) {
    navToggle.addEventListener("click", () => {
        //get the style of the navbar
        const navStyle = window.getComputedStyle(navMenu);
        //get the display property of the navbar
        const navDisplay = navStyle.getPropertyValue("top");

        //if the navbar is hidden
        if (navDisplay === "-300px") {
            //show the navbar
            navMenu.style.top = "80px";
        }
        if (navDisplay === "80px") {
            //show the navbar
            navMenu.style.top = "-300px";
        }


    })
}



if (navlinks) {
    for (var i = 0; i < navlinks.length; i++) {
        navlinks[i].addEventListener("click", () => {
            navMenu.classList.remove("show_nav")
            navClose.classList.remove("close");
        })
    }
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