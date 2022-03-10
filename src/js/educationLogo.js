import img from "../assets/img/education/education-logo.svg"

export function getEducationLogo() {
    const logo = document.querySelector('.education__logo');
    logo.style.backgroundImage = `url(${img})`
}