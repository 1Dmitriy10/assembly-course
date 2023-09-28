import img1 from "../img/footer/footer-vk.svg"
import img2 from "../img/footer/footer-youtube.svg"
import img3 from "../img/footer/footer-facebook.svg"
import img4 from "../img/footer/footer-instagram.svg"





const block = document.querySelector('.footer__social-box');

let items = [
    {
        img: img1,

    },
    {
        img: img2,

    },
    {
        img: img3,

    },
    {
        img: img4,

    },

]

export function renderSocialItem() {
    items.forEach(item => {
        block.insertAdjacentHTML("beforeend", `
    <div class="footer__social-item">
        <a href="#"><img src="${item.img}"></a>
    </div>
`)
    })
}