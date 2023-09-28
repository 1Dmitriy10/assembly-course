import img1 from "../img/profession/profession-icon-1.svg"
import img2 from "../img/profession/profession-icon-2.svg"
import img3 from "../img/profession/profession-icon-3.svg"




const block = document.querySelector('.profession__item-box');

let items = [
    {
        img: img1,
        h3: "Только практические навыки в работе",
        p: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Netus eget velit quisque accumsan amet tortor. Velit, volutpat egestas fringilla mi porttitor tempus. Placerat dui."
    },
    {
        img: img2,
        h3: "Работа на самом современном оборудовании",
        p: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Netus eget velit quisque accumsan amet tortor. Velit, volutpat egestas fringilla mi porttitor tempus. Placerat dui."
    },
    {
        img: img3,
        h3: "Сертификация по окончании обучения",
        p: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Netus eget velit quisque accumsan amet tortor. Velit, volutpat egestas fringilla mi porttitor tempus. Placerat dui."
    },

]

export function renderProfessionItem() {
    items.forEach(item => {
        block.insertAdjacentHTML("beforeend", `
<div class="profession__item">
    <img src="${item.img}">
    <h3 class="profession__item-title">${item.h3}</h3>
    <p class="profession__item-text">${item.p}</p>
</div>
`)
    })
}