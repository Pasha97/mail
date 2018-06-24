import "./module.components.ts";
import "./select.components.ts";

let width: number, color: number[], elem: HTMLElement, lenta: HTMLElement;

setTimeout(function dateTime(): void {
    let d = new Date(),
        day: string[] = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"],
        month: string[] = ["января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря"],
        date: HTMLElement = document.getElementById("date");

    date.innerHTML = `${d.getDate()} ${month[d.getMonth()]}, ${day[d.getDay()]}   ${(d.getHours() < 10 ? '0' : '')}${d.getHours()}:${(d.getMinutes() < 10 ? '0' : '')}${d.getMinutes()}:${(d.getSeconds() < 10 ? '0' : '')}${d.getSeconds()}`;

    setTimeout(dateTime, 1000);
}, 1000);


function   goToTop(scrollPosition: number): void {
    let up: HTMLElement = document.querySelector(".up");

    if (scrollPosition >= 500) {
        up.style.visibility = "visible";
        up.style.transition = "3s";
        up.style.opacity = "1";
        up.onclick = function UpPage() {
            window.scrollBy(0, -100);
            if (window.pageYOffset > 0) {
                requestAnimationFrame(UpPage);
                up.style.transition = "";
                up.style.opacity = "";
                up.style.visibility = "";
            }
        }
    } else {
        up.style.transition = "";
        up.style.opacity = "";
        up.style.visibility = "";
    }
}

let onScroll = debounce(async function (){
    try {
        let bottom: HTMLElement = document.querySelector(".container__bottom"),
            scrollMax: number = Math.max(
                document.body.scrollHeight, document.documentElement.scrollHeight,
                document.body.offsetHeight, document.documentElement.offsetHeight,
                document.body.clientHeight, document.documentElement.clientHeight,
            ),
            ScrollPosition: number = Math.round(document.documentElement.scrollTop);

        goToTop(ScrollPosition);

        if ((ScrollPosition + window.innerHeight) === scrollMax) {
            let loader: HTMLElement = document.querySelector(".loader");
            loader.style.visibility = "visible";
            loader.style.opacity = "1";

            createLenta();

            let promise = new Promise((resolve, reject) => {
                setTimeout(() => resolve(bottom.appendChild(lenta)), 2000)
            });

            await promise;
            clearStyle(loader, "opacity, visibility");
            // clearStyle(loader,"visibility");
        }
    } catch (err) {
        alert("Error");
    }
}, 250);

addEventListener("scroll", onScroll);


//HELPS

function getRandomWidth(): number {
    let allwidth: number[] = [200, 300, 250];
    return allwidth[Math.floor(Math.random() * allwidth.length)];

}

function getRandomColor(): number[] {
    let r: number = Math.floor(Math.random() * 255),
        g: number = Math.floor(Math.random() * 255),
        b: number = Math.floor(Math.random() * 255);
    return [r, g, b];
}

function createElem(): HTMLElement {
    width =  getRandomWidth();
    color = getRandomColor();
    elem = document.createElement("div");
    elem.className = "lenta__elem";
    elem.style.width =  getRandomWidth() + "px";
    elem.style.background = "rgb(" + color[0] + "," + color[1] + "," + color[2] + ")";
    return elem;

}

function createLenta(): void {
    lenta = document.createElement("div");
    lenta.className = "lenta";
    for (let i = 0; i < 3; i++) {
        lenta.appendChild(createElem());
    }
}

let element: HTMLElement, styles: string;

// function clearStyle(a: HTMLElement): any {
//
//     return a.setAttribute("style", " ");
// }

function clearStyle(element: HTMLElement, styles: string): void {
    let getStyleBlock: CSSStyleDeclaration = getComputedStyle(element),
        arrStyle: string[] = styles.split(", ");
    for (let i = 0; i < getStyleBlock.length; i++) {
        for (let j = 0; j < arrStyle.length; j++) {
            if (getStyleBlock[i] === arrStyle[j]) {
                getStyleBlock[i]
            }
        }
    }
}


//debounce//
function debounce(func: any, wait: number) {
    let timeout: number;
    return function () {
        let context = this,
            args = arguments;
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(context, args), wait);
    }
}


let login: HTMLElement = document.querySelector(".login-yandex");

login.addEventListener('mousemove', debounce(function () {
    console.log("debaunce");
}, 250));


//throttle//
function throttle(func: any, limit: number) {
    let lastFunc: any,
        lastRan: number;
    return function () {
        const context = this;
        const args = arguments;
        if (!lastRan) {
            func.apply(context, args);
            lastRan = Date.now()
        } else {
            clearTimeout(lastFunc);
            lastFunc = setTimeout(function () {
                if ((Date.now() - lastRan) >= limit) {
                    func.apply(context, args);
                    lastRan = Date.now()
                }
            }, limit - (Date.now() - lastRan))
        }
    }
}

login.addEventListener('touchmove', throttle(function () {
    console.log("trottle");
}, 2000));


//resize//
function resize(func: any, limit: number) {
    let timeout: number;
    return function () {
        if (timeout) clearTimeout(timeout);
        timeout = setTimeout(func, limit);
    };
}


window.addEventListener('resize', resize(function () {
    console.log("resize");
}, 1000));
