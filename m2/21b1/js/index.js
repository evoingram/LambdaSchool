// Your code goes here
document.querySelector('.container > .intro > img').addEventListener("mouseover", mouseoverEL);
document.querySelector('.container > .intro > img').addEventListener("mouseout", mouseoutEL);
document.querySelector('.container > .intro > p').addEventListener("pointerout", pointeroutEL);
document.querySelector('.container > .intro > p').addEventListener("pointerover", pointeroverEL);
document.querySelectorAll('.content-section > .img-content > img')[0].addEventListener("mouseenter", mouseenterEL);
document.querySelectorAll('.content-section > .img-content > img')[0].addEventListener("mouseleave", mouseleaveEL);
document.querySelectorAll('.content-destination > h2')[0].addEventListener("load", loadEL);
document.querySelectorAll('.content-pick > .destination > .btn')[0].addEventListener("mousedown", mousedownEL);
document.querySelectorAll('.content-pick > .destination > .btn')[0].addEventListener("mouseup", mouseupEL);
document.querySelectorAll('.content-pick > .destination > .btn')[2].addEventListener("click", clickEL);

function mouseoverEL() {
    document.querySelector('.container > .intro > img').style.filter = "blur(8px)";
}
function mouseoutEL() {
    document.querySelector('.container > .intro > img').style.filter = "none";
 }

function pointeroutEL() {
    document.querySelector('.intro > p').style.background = "white";
 }

function pointeroverEL() {
    document.querySelector('.container > .intro > p').style.background = "blue";
}


function mouseenterEL() { 
    document.querySelectorAll('.content-section > .img-content > img')[0].style.filter = "blur(8px)";
}

function mouseleaveEL() {
    document.querySelectorAll('.content-section > .img-content > img')[0].style.filter = "none";
 }


function loadEL() { 
    document.querySelectorAll('.content-destination > h2')[0].style.color = "red";
}

function mousedownEL() {
    document.querySelectorAll('.content-pick > .destination > .btn')[0].style.background = "blue";
    document.querySelectorAll('.content-pick > .destination > .btn')[0].style.color = "red";
}

function mouseupEL() {
    document.querySelectorAll('.content-pick > .destination > .btn')[0].style.background = "black";
    document.querySelectorAll('.content-pick > .destination > .btn')[0].style.color = "white";
 }

function clickEL() {
    document.querySelectorAll('.content-pick > .destination > .btn')[2].style.background = "red";
    document.querySelectorAll('.content-pick > .destination > .btn')[2].style.color = "blue";
}




//  Nest two similar events somewhere in the site and prevent the event propagation properly
$("img").mouseover(function (event) {
    event.stopPropagation();
    alert("A picture was moused over.");
});

$(".btn").click(function (event) {
    event.stopPropagation();
    alert("A button was clicked.");
});



// Stop the navigation items from refreshing the page by using preventDefault()
document.querySelector('.nav-link').addEventListener("click", function(event){
  event.preventDefault()
});

//  Go look at GSAP and implement the animations found in that library with your custom events.
gsap.to(".logo-heading", {duration: 3, x: 100});


gsap.to(".intro > h2", {duration: 3, x: 250});

gsap.to("h2", {duration: 1, opacity: 0.3});