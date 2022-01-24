//Navbar
const navMenu = document.getElementById("nav-menu");
const navToggle = document.getElementById("nav-toggle");
const navClose = document.getElementById("nav-close");
const navlinks = document.getElementsByClassName("nav-link");
if (navMenu) {
    navToggle.addEventListener("click", () => {
        navMenu.classList.add("show_nav")
        navClose.classList.add("close");
        navToggle.style.display = "none";
        navClose.style.display = "block";
    })
}
if (navClose) {
    navClose.addEventListener("click", () => {
        navMenu.classList.remove("show_nav")
        navClose.classList.remove("close");
        navClose.style.display = "none";
        navToggle.style.display = "block";
    })

}
if (navlinks) {
    for (var i = 0; i < navlinks.length; i++) {
        navlinks[i].addEventListener("click", () => {
            navMenu.classList.remove("show_nav")
            navClose.classList.remove("close");
            navClose.style.display = "none";
            navToggle.style.display = "block";
        })
    }
}



//light mode


// check for saved 'darkMode' in localStorage
let darkMode = localStorage.getItem('darkMode');

const darkModeToggle = document.querySelector('#toggle-light');

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


function countdown(dateEnd) {
    var timer, days, hours, minutes, seconds;

    dateEnd = new Date(dateEnd);
    dateEnd = dateEnd.getTime();

    if (isNaN(dateEnd)) {
        return;
    }

    timer = setInterval(calculate, 1000);

    function calculate() {
        var dateStart = new Date();
        var dateStart = new Date(dateStart.getUTCFullYear(),
            dateStart.getUTCMonth(),
            dateStart.getUTCDate(),
            dateStart.getUTCHours(),
            dateStart.getUTCMinutes(),
            dateStart.getUTCSeconds());
        var timeRemaining = parseInt((dateEnd - dateStart.getTime()) / 1000)

        if (timeRemaining >= 0) {
            days = parseInt(timeRemaining / 86400);
            timeRemaining = (timeRemaining % 86400);
            hours = parseInt(timeRemaining / 3600);
            timeRemaining = (timeRemaining % 3600);
            minutes = parseInt(timeRemaining / 60);
            timeRemaining = (timeRemaining % 60);
            seconds = parseInt(timeRemaining);

            document.getElementById("days").innerHTML = parseInt(days, 10);
            document.getElementById("hours").innerHTML = ("0" + hours).slice(-2);
            document.getElementById("minutes").innerHTML = ("0" + minutes).slice(-2);
            document.getElementById("seconds").innerHTML = ("0" + seconds).slice(-2);
        } else {
            return;
        }
    }

    function display(days, hours, minutes, seconds) {}
}



countdown('02/01/2022 03:14:07 AM');