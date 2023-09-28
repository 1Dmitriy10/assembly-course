export function animation() {
    let logo = document.querySelectorAll(".animation-logo");
    let rotation = 0;

    let animationRotation = setInterval(function () {
        rotation++
        logo.forEach(item => {
            item.style.transform = `rotate(${rotation}deg)`;
        })
        if (rotation >= 360) {
            rotation = 0
        }
        // logo.style.transform = `rotate(${rotation}deg)`;

    },
        10
    )
}
animation()