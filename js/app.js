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

function hideNav(){
    navbar.style.display = "none";
}

function buildList(data_nav){
    var node = document.createElement('li');
    node.textContent = data_nav;
    node.classList.add("menu__link");
    nav.appendChild(node);
}


/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
function buildNav(){
    for(var i = 0; i < sec.length; i++){
        var data = sec[i].getAttribute("data-nav");
        buildList(data);
    }
}


// Add class 'active' to section when near top of viewport
function active(cur){
    
    var act = document.getElementsByClassName("your-active-class");
    if (act.length >0){
        act[0].classList.remove("your-active-class");
    }
    var ele = document.getElementById(cur);
    ele.classList.add("your-active-class");
}


// Scroll to anchor ID using scrollTO event
function scrollID(nav_id){
    var ele = document.getElementById(nav_id);
    ele.scrollIntoView();
}


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 
document.getElementsByTagName("body").onload = buildNav();

// Scroll to section on link click
var nav_li = document.getElementsByClassName("menu__link");
nav_li[0].addEventListener("click",function(){scrollID("section1");});
nav_li[1].addEventListener("click",function(){scrollID("section2");});
nav_li[2].addEventListener("click",function(){scrollID("section3");});
nav_li[3].addEventListener("click",function(){scrollID("section4");});
 
// Set sections as active
nav_li[0].addEventListener("click",function(){active("section1");});
nav_li[1].addEventListener("click",function(){active("section2");});
nav_li[2].addEventListener("click",function(){active("section3");});
nav_li[3].addEventListener("click",function(){active("section4");});

// Hide nav bar while not scrolling
window.setInterval(hideNav, 3000);
window.onscroll = function(){
    navbar.style.display = "block";
};

