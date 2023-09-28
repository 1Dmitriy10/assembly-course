export function goUp() {
    let btn = document.querySelector(".goUp");
    btn.addEventListener("click", goUp);
    window.scrollTo(0, 0);
}
goUp()