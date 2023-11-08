const menuIcon = document.querySelector(".burger");
const menu = document.querySelector(".menu");
const link = document.querySelectorAll(".top-menu__link");

menuIcon.addEventListener("click", () => {
    menu.classList.toggle("menu_open");

});

for (let i=0; i < link.length; i++) {
    let item = link[i];
    item.addEventListener("click", () => {
        menu.classList.remove("menu_open");
    });
}

