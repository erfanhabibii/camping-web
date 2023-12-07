const navBtn = document.querySelector(".nav__btn")
const navMenu = document.querySelector(".nav__menu-mobile__wrapper")

let navOpen = false;

navBtn.addEventListener("click", function() {
    if (navOpen) {
        navBtn.classList.remove("nav__btn--open")
        navMenu.classList.remove("nav__menu-mobile__wrapper--open")
        navOpen = false
    } else {
        navBtn.classList.add("nav__btn--open")
        navMenu.classList.add("nav__menu-mobile__wrapper--open")
        navOpen = true
    }
})
