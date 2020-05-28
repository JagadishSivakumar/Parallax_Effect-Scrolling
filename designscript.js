let bg = document.getElementById("bg");
let moon = document.getElementById("moon");
let mountain = document.getElementById("mountain");
let road = document.getElementById("road");
let text = document.getElementById("text");

//Scroll Event Listener
window.addEventListener('scroll' , myFunction);

function myFunction() {
    let value = window.scrollY;
    bg.style.top = value * 0.5 + 'px';
    moon.style.left = -value * 0.5 + 'px';
    mountain.style.left = value * 0.15 + 'px';
    road.style.left = value * 0.15 + 'px';
    text.style.top = value * 1 + 'px';
}