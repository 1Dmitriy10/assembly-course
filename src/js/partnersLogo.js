import img from "../assets/img/partners/partners-logo.svg"

export function getPartnersLogo() {
    const logo = document.querySelector('.partners__logo');
    logo.style.backgroundImage = `url(${img})`
}