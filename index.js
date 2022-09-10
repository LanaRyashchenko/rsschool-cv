const menuIcon = document.querySelector(".burger");
const menu = document.querySelector(".menu");

menuIcon.addEventListener("click", () => { 
    menu.classList.toggle("menu_open");
});