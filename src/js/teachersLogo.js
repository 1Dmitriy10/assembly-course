import img from "../img/teachers/teachers-logo.svg"

export function getTeachersLogo() {
    const logo = document.querySelector('.teacher__logo ');
    logo.style.backgroundImage = `url(${img})`
}