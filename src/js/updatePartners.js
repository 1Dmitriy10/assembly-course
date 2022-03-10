const block = document.querySelector(".partners__item-box");


export function getPartners() {
    console.log(document.documentElement.clientWidth)
    if (document.documentElement.clientWidth < 967 && document.documentElement.clientWidth > 450) {
        block.innerHTML = ""
        block.insertAdjacentHTML("beforeend", `
                    <div class="partners__box-row ">
                        <div class="partners__item"></div>
                        <div class="partners__item"></div>
                    </div>
                    <div class="partners__box-row">
                        <div class="partners__item"></div>
                        <div class="partners__item"></div>
                    </div>
                    <div class="partners__box-row">
                        <div class="partners__item"></div>
                        <div class="partners__item"></div>
                    </div>
                    <div class="partners__box-row">
                        <div class="partners__item"></div>
                        <div class="partners__item"></div>
                    </div>
        `)
    }
    else if (document.documentElement.clientWidth < 450) {
        block.innerHTML = ""
        block.insertAdjacentHTML("beforeend", `
                    <div class="partners__box-row ">
                        <div class="partners__item"></div>
                    </div>
                    <div class="partners__box-row">
                        <div class="partners__item"></div>
                    </div>
                    <div class="partners__box-row">
                        <div class="partners__item"></div>
                    </div>
                    <div class="partners__box-row">
                        <div class="partners__item"></div>
                    </div>
                    <div class="partners__box-row">
                        <div class="partners__item"></div>
                    </div>
                    <div class="partners__box-row">
                        <div class="partners__item"></div>
                    </div>
                    <div class="partners__box-row">
                        <div class="partners__item"></div>
                    </div>
                    <div class="partners__box-row">
                        <div class="partners__item"></div>
                    </div>
        `)
    }

}