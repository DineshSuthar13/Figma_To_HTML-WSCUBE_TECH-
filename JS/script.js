//* Menu bar show and hide
let hamburgar = document.querySelector(".hamburgar");
let hamburgarIcon = document.querySelector(".hamburgar>i");
let Btn = document.querySelector(".Btn");

hamburgar.addEventListener("click", ()=>{
    Btn.classList.toggle("showModal");
    hamburgarIcon.classList.toggle("fa-xmark");
});