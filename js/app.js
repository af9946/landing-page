/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/

const sec = document.getElementsByTagName("section");
const nav = document.getElementById('navbar__list');
const navbar = document.getElementsByClassName("navbar__menu")[0];

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

// Make navbar invisible in window

function hideNav() {
    navbar.style.display = "none";
}

// Add list node for each section in nav and add event listener to it
// When click the list, the page will scroll to corresponding section

function buildList(data, i) {
    var node = document.createElement('li');
    var sec_num = i + 1;
    node.textContent = data;
    node.classList.add("menu__link");
    node.addEventListener("click", function (event) {
        scrollID("section" + sec_num);
        event.preventDefault();
    });
    nav.appendChild(node);
}

// Determine if given section in viewport
function isInViewPort(ele) {
    var rect = ele.getBoundingClientRect();
    return rect.top > 0;
}


/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// Build the nav
function buildNav() {
    for (var i = 0; i < sec.length; i++) {
        var data = sec[i].getAttribute("data-nav");
        buildList(data, i);
    }
}


// Add class 'active' to section when near top of viewport
function active() {
    var navlist = document.getElementsByClassName("menu__link");
    var act_sec = document.getElementsByClassName("your-active-class");
    var act_link = document.getElementsByClassName("active__link");
    if (act_sec.length > 0) {
        act_sec[0].classList.remove("your-active-class");
    }
    if (act_link.length > 0) {
        act_link[0].classList.remove("active__link");
    }
    for (i = 0; i < sec.length; i++) {
        var ele = sec[i];
        if (isInViewPort(ele)) {
            ele.classList.add("your-active-class");
            navlist[i].classList.add("active__link");
            break;
        }
    }
}


// Scroll to anchor ID using scrollTO event
function scrollID(nav_id) {
    var ele = document.getElementById(nav_id);
    ele.scrollIntoView({ behavior: "smooth", block: "center" });
}


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 
document.getElementsByTagName("body").onload = buildNav();

// Set sections as active
// And hide nav bar while not scrolling
//window.setInterval(hideNav, 3000);
window.onscroll = function () {
    navbar.style.display = "block";
    this.active();
};