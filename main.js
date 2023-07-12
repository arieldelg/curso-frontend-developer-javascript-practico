const menuEmail = document.querySelector('.navbar-email')
const desktopMenu = document.querySelector('.desktop-menu')

const iniciar = () => {
    menuEmail.addEventListener('click', showOrHide)
}

const showOrHide = () => {
    desktopMenu.classList.toggle('inactive');
}



window.addEventListener('load', iniciar)