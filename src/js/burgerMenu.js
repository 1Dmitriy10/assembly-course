export function burgerMenu() {
    const logoMenu = document.querySelector('.btn-menu')
    logoMenu.addEventListener('click', getMenu);
    function getMenu() {
        const menu = document.querySelector('.burger-menu');
        const logo = document.querySelector('.menu-burger-logo')
        menu.classList.toggle('active')
        logo.classList.toggle('active')
    }
}