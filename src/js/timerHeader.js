
export function getTimerHeader() {
    //устанавливаем время обратного отсчета
    let totalTime = [
        {
            count: 2, title: "Дней"
        },
        {
            count: 0, title: "Часов"
        },
        {
            count: 0, title: "Минут"
        },
        {
            count: 0, title: "Секунд"
        },

    ]
    //берем блоки из верстки, куда будем подставлять время
    const day = document.querySelector('#day');
    const hours = document.querySelector('#hours');
    const minutes = document.querySelector('#minutes');
    const seconds = document.querySelector('#seconds');

    //переменные для времени
    let d = totalTime[0].count
    let h = totalTime[1].count
    let m = totalTime[2].count
    let s = totalTime[3].count


    // с интервалом в 1 секунду уменьшаем счетчик
    let timerId = setInterval(function () {
        if (s == 0) {
            if (m > 0) {
                m -= 1;
                s = 59;
            }

        }
        else {
            s--;
        }
        if (m == 0 && s == 0) {
            if (h > 0) {
                h -= 1;
                m = 59
                s = 59

            }

        }
        if (h == 0 && m == 0 && s == 0) {
            if (d > 0) {
                d -= 1;
                h = 23;
                m = 59;
                s = 59;

            }

        }
        if (d == 0 && h == 0 && m == 0 && s == 0) {
            clearInterval(timerId)
        }


        //подставляем в наши блоки значения
        seconds.innerHTML = `${s}`
        minutes.innerHTML = `${m}`
        hours.innerHTML = h
        day.innerHTML = d
    },
        1000)
}
getTimerHeader()

