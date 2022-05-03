//Hamburger menu

//add on scroll even listener
window.addEventListener("scroll", function() {
    //get scroll position
    var scrollPos = window.scrollY;
    //get navbar
    if (scrollPos >= 400) {
        menu.style.left = '-100000px';
        document.getElementById("open").className = "uis uis-bars";
    }
    var cont = document.querySelector('.container');
    const rect = cont.getBoundingClientRect();
    console.log(scrollPos);
    console.log(rect);
});


var toggle = document.querySelector('#open');
var menu = document.querySelector('.menu');
state = "open";
toggle.addEventListener('click', function() {

    // if (state === "open") {
    //     menu.style.left = '0';
    // } else {
    //     menu.style.left = '-100000px';
    // }

    if (document.getElementById("open").className == "uis uis-bars") {
        state = "close";
        menu.style.left = '0';
        document.getElementById("open").className = "uis uis-multiply";
    } else {
        state = "open";
        menu.style.left = '-100000px';
        document.getElementById("open").className = "uis uis-bars";
    }
});
//light mode
var toggle_light = document.querySelector('#light');
toggle_light.addEventListener('click', function() {
    if (document.getElementById("light").className == "fa-solid fa-sun light") {

        document.getElementById("light").className = "fa-regular fa-moon light";
    } else {
        document.getElementById("light").className = "fa-solid fa-sun light";
    }
});


// //get elemnet by id vector
// var canvas = document.getElementById('canvas');
// var vector = document.getElementById('vector');

// function getCenter(element) {
//     const { left, top, width, height } = element.getBoundingClientRect();
//     return { x: left + width / 2, y: top + height / 2 }
// }

// const arrow = document.querySelector("#vector");
// const arrowCenter = getCenter(arrow);
// addEventListener("mousemove", ({ clientX, clientY }) => {
//     const angle = Math.atan2(clientY - arrowCenter.y, clientX - arrowCenter.x);
//     arrow.style.transform = `rotate(${angle}rad/*${angle * 180 / Math.PI}deg*/)`;
// });


// dots is an array of Dot objects,
// mouse is an object used to track the X and Y position
// of the mouse, set with a mousemove event listener below
var dots = [],
    mouse = {
        x: 0,
        y: 0
    };

// The Dot object used to scaffold the dots
var Dot = function() {
    this.x = 0;
    this.y = 0;
    this.node = (function() {
        var n = document.createElement("div");
        n.className = "trail";

        document.body.appendChild(n);

        return n;
    }());
};
// The Dot.prototype.draw() method sets the position of 
// the object's <div> node
Dot.prototype.draw = function() {
    this.node.style.left = this.x + "px";
    this.node.style.top = this.y + "px";
    this.node.style.transform = "translate(-50%, -50%)";
    this.node.style.transform = "rotate(" + Math.random() * 360 + "deg)";

};

// Creates the Dot objects, populates the dots array
for (var i = 0; i < 200; i++) {
    var d = new Dot();
    dots.push(d);
}

// This is the screen redraw function
function draw() {
    // Make sure the mouse position is set everytime
    // draw() is called.
    var x = mouse.x,
        y = mouse.y;

    // This loop is where all the 90s magic happens
    dots.forEach(function(dot, index, dots) {
        var nextDot = dots[index + 1] || dots[0];

        dot.x = x;
        dot.y = y;
        dot.draw();
        x += (nextDot.x - dot.x) * .6;
        y += (nextDot.y - dot.y) * .6;

    });
}

addEventListener("mousemove", function(event) {
    //event.preventDefault();
    mouse.x = event.pageX + 1;
    mouse.y = event.pageY + 1;
});

// animate() calls draw() then recursively calls itself
// everytime the screen repaints via requestAnimationFrame().
function animate() {

    draw();
    requestAnimationFrame(animate);
}

// And get it started by calling animate().
animate();


// check for saved 'darkMode' in localStorage
let darkMode = localStorage.getItem('darkMode');

const darkModeToggle = document.querySelector('#light');

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
