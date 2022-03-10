let btn = document.querySelector(".goUp");
btn.addEventListener("click", goUp);

export function goUp() {
    window.scrollTo(0, 0);
}