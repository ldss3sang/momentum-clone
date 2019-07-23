const clockContainer = document.querySelector(".js-clock"),
    clockTitle = clockContainer.querySelector("h1");

function getTime() {
    const date = new Date();
    const minutes = date.getMinutes().toString();
    const hours = date.getHours().toString();
    const seconds = date.getSeconds().toString();
    clockTitle.innerText = `${hours.padStart(2, "0")}:${minutes.padStart(2, "0")}:${seconds.padStart(2, "0")}`;
}

function init() {
    getTime();
    setInterval(getTime, 1000);
}

init();