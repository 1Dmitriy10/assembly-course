

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
const day = document.querySelector('#day');
const hours = document.querySelector('#hours');
const minutes = document.querySelector('#minutes');
const seconds = document.querySelector('#seconds');


let d = totalTime[0].count
let h = totalTime[1].count
let m = totalTime[2].count
let s = totalTime[3].count


export function getTimerHeader() {
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

        // }
        // if (h == 0) {
        //     if (d > 0) {
        //         d -= 1;
        //         h = 23;
        //     }

        // }
        if (d == 0 && h == 0 && m == 0 && s == 0) {
            clearInterval(timerId)
        }



        seconds.innerHTML = `${s}`
        minutes.innerHTML = `${m}`
        hours.innerHTML = h
        day.innerHTML = d
    },
        1000)



}

