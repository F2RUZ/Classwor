let chooseBtn = document.getElementById("choose");
let receiveBtn = document.getElementById("receive");
let contactForm = document.getElementsByClassName("contactform_name")[0];
let text = document.getElementsByTagName("h2")[0];
let modal = document.querySelector(".modal");
let btn = document.querySelectorAll(".main_tel_title")[0];
let title = document.querySelector(".text-center");
let phone = document.querySelector("h2");
let closeBtn = document.querySelector(".close");
// let message = document.getElementsByName('message')
// contactForm.addEventListener('input', function() {
//     message.value = `Karrochche meni ismim ${contactForm.value} va men nmani hohlaymanki :`
// })




















receiveBtn.addEventListener("click", function() {
    modal.style.display = "block";
});
closeBtn.addEventListener("click", function() {
    modal.style.display = "none";
});