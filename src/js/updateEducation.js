const block = document.querySelector(".education__scheme");

export function getEducation() {
    if (document.documentElement.clientWidth < 700) {
        getNewResize()
    }
    window.addEventListener('resize', (e) => {
        // console.log(e)
        // outerWidth
        getNewResize()
    });
    function getNewResize(e) {
        console.log('ok')
        if (document.documentElement.clientWidth < 700) {
            block.innerHTML = "";
            block.insertAdjacentHTML("beforeend", `
            <div class="education__item education__item-left">
                            <h3 class="education__item-title">
                                Неделя №1
                            </h3>
                            <span class="education__item-text">
                                Красивая часть курса,
                                которая помогает в успехе
                            </span>
                        </div>
                        <div class="education__item education__item-right">
                            <h3 class="education__item-title">
                                Неделя №2
                            </h3>
                            <span class="education__item-text">
                                Красивая часть курса,
                                которая помогает в успехе
                            </span>
                        </div>
                        <div class="education__item education__item-left">
                            <h3 class="education__item-title">
                                Неделя №3
                            </h3>
                            <span class="education__item-text">
                                Красивая часть курса,
                                которая помогает в успехе
                            </span>
                        </div>
                        <div class="education__item education__item-right">
                            <h3 class="education__item-title">
                                Неделя №4
                            </h3>
                            <span class="education__item-text">
                                Красивая часть курса,
                                которая помогает в успехе
                            </span>
                        </div>
                        <div class="education__item education__item-left">
                            <h3 class="education__item-title">
                                Неделя №5
                            </h3>
                            <span class="education__item-text">
                                Красивая часть курса,
                                которая помогает в успехе
                            </span>
                        </div>
                        <div class="education__item education__item-right">
                            <h3 class="education__item-title">
                                Неделя №6
                            </h3>
                            <span class="education__item-text">
                                Красивая часть курса,
                                которая помогает в успехе
                            </span>
                        </div>
                        <div class="education__item education__item-left">
                            <h3 class="education__item-title">
                                Неделя №7
                            </h3>
                            <span class="education__item-text">
                                Красивая часть курса,
                                которая помогает в успехе
                            </span>
                        </div>
            `)
        } else if (document.documentElement.clientWidth > 700) {
            block.innerHTML = "";
            block.insertAdjacentHTML("beforeend", `
            <div class="education__scheme-left">
            <div class="education__item education__item-left">
                <h3 class="education__item-title">
                    Неделя №1
                </h3>
                <span class="education__item-text">
                    Красивая часть курса,
                    которая помогает в успехе
                </span>
            </div>
            <div class="education__item education__item-left">
                <h3 class="education__item-title">
                    Неделя №3
                </h3>
                <span class="education__item-text">
                    Красивая часть курса,
                    которая помогает в успехе
                </span>
            </div>
            <div class="education__item education__item-left">
                <h3 class="education__item-title">
                    Неделя №5
                </h3>
                <span class="education__item-text">
                    Красивая часть курса,
                    которая помогает в успехе
                </span>
            </div>
            <div class="education__item education__item-left">
                <h3 class="education__item-title">
                    Неделя №7
                </h3>
                <span class="education__item-text">
                    Красивая часть курса,
                    которая помогает в успехе
                </span>
            </div>
        </div>
        <div class="education__scheme-column"></div>
        <div class="education__scheme-right">
            <div class="education__item education__item-right">
                <h3 class="education__item-title">
                    Неделя №2
                </h3>
                <span class="education__item-text">
                    Красивая часть курса,
                    которая помогает в успехе
                </span>
            </div>
            <div class="education__item education__item-right">
                <h3 class="education__item-title">
                    Неделя №4
                </h3>
                <span class="education__item-text">
                    Красивая часть курса,
                    которая помогает в успехе
                </span>
            </div>
            <div class="education__item education__item-right">
                <h3 class="education__item-title">
                    Неделя №6
                </h3>
                <span class="education__item-text">
                    Красивая часть курса,
                    которая помогает в успехе
                </span>
            </div>
        </div>
            `)
        }
    }
}
getEducation()