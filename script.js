// let navBar=document.querySelector(".navbar");
let val;
let nav=document.getElementsByClassName("header");
window.onscroll = function(){
    if(document.documentElement.scrollTop>15){
        nav.add("sticky");
    }
    else{
        nav.remove("sticky");
    }
}

function myFunction() {
  var x = document.getElementById("Head");
  if (x.className === "header") {
    x.className += " responsive";
  } else {
    x.className = "header";
  }
}

function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}
