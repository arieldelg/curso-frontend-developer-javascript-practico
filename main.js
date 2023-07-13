const menuEmail = document.querySelector('.navbar-email')
const desktopMenu = document.querySelector('.desktop-menu')
const menuNavBar = document.querySelector('.menu')
const menuHamburguesa = document.querySelector('.mobile-menu')

const iniciar = () => {
    menuEmail.addEventListener('click', showOrHide)
    menuNavBar.addEventListener('click', menuMobile)
}

const menuMobile = () => {
    menuHamburguesa.classList.toggle('inactive');
}

const showOrHide = () => {
    desktopMenu.classList.toggle('inactive');
}

window.addEventListener('load', iniciar)
