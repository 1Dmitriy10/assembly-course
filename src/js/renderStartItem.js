import img1 from "../assets/img/start/start-100%.svg"
import img2 from "../assets/img/start/start-75%.svg"
import img3 from "../assets/img/start/start-50%.svg"
import img4 from "../assets/img/start/result.svg"
import img5 from "../assets/img/start/start-logo.svg"




const block = document.querySelector('.start__list');
const logo = document.querySelector('.start__logo');
logo.style.backgroundImage = `url(${img5})`

let items = [
    {
        img: img1, h3: "100%", p: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Netus eget velit quisque accumsan amet tortor. Velit, volutpat egestas fringilla mi porttitor tempus. Placerat dui."
    },
    {
        img: img2, h3: "75%", p: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Netus eget velit quisque accumsan amet tortor. Velit, volutpat egestas fringilla mi porttitor tempus. Placerat dui."
    },
    {
        img: img3, h3: "50%", p: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Netus eget velit quisque accumsan amet tortor. Velit, volutpat egestas fringilla mi porttitor tempus. Placerat dui."
    },
    {
        img: img4, h3: "Итог", p: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Netus eget velit quisque accumsan amet tortor. Velit, volutpat egestas fringilla mi porttitor tempus. Placerat dui."
    },
]

export function renderStartItem() {
    items.forEach(item => {
        block.insertAdjacentHTML("beforeend", `
<div class="start__item">
    <h3 class="start__item-title">${item.h3}</h3>
    <img src="${item.img}">
    <p class="start__item-text">${item.p}</p>
</div>
`)
    })
}