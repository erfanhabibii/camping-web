const navBtn = document.querySelector(".nav__btn")
const navMenu = document.querySelector(".nav__menu-mobile__wrapper")
const overlay = document.querySelector(".overlay")

let navOpen = false;

navBtn.addEventListener("click", function() {
    if (navOpen) {
        navBtn.classList.remove("nav__btn--open")
        navMenu.classList.remove("nav__menu-mobile__wrapper--open")
        overlay.classList.remove("overlay--show")
        navOpen = false
    } else {
        navBtn.classList.add("nav__btn--open")
        navMenu.classList.add("nav__menu-mobile__wrapper--open")
        overlay.classList.add("overlay--show")
        navOpen = true
    }
})

overlay.addEventListener("click", function(){
    navBtn.classList.remove("nav__btn--open")
    navMenu.classList.remove("nav__menu-mobile__wrapper--open")
    overlay.classList.remove("overlay--show")
    navOpen = false
})