// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementById("myTopnav");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Get the video
var video = document.getElementById("myVideo");

// Get the button to the video
var btn = document.getElementById("myBtn");

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() 
{
  if (window.pageYOffset >= sticky) 
  {
    navbar.classList.add("sticky")
  } 
  else 
  {
    navbar.classList.remove("sticky");
  }
}
function myFunctions() 
{
  if (navbar.className === "topnav") 
  {
  navbar.className += " responsive";
  } else {
  navbar.className = "topnav";
  }
}
function myVideoControl()
{
  if (video.paused) 
  {
    video.play();
    btn.innerHTML = "Pause";
  } else {
    video.pause();
    btn.innerHTML = "Play";
  }
}