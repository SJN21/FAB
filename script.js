// let navBar=document.querySelector(".navbar");
let val;
let nav=document.querySelector("nav");
window.onscroll = function(){
    if(document.documentElement.scrollTop>15){
        nav.classList.add("sticky");
    }
    else{
        nav.classList.remove("sticky");
    }
}
