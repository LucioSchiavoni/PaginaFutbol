const menu = document.querySelector(".nav-menu_visible")
const openmenubtn = document.querySelector(".open__menu")
const closemenubtn = document.querySelector(".close__menu")

function toggleMenu() {
    menu.classList.toggle("menu__opened");
}

openmenubtn.addEventListener("click", toggleMenu)
closemenubtn.addEventListener("click", toggleMenu)