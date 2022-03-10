let logo = document.querySelectorAll(".animation-logo");
let rotation = 0;
export function animation() {
    let animationRotation = setInterval(function () {
        rotation++
        logo.forEach(item => {
            item.style.transform = `rotate(${rotation}deg)`;
        })
        // logo.style.transform = `rotate(${rotation}deg)`;

    },
        10
    )


}