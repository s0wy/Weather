function convertDayToString(day) {
    switch (day) {
        case 0: return "Воскресенье"
        case 1: return "Понедельник"
        case 2: return "Вторник"
        case 3: return "Среда"
        case 4: return "Четверг"
        case 5: return "Пятница"
        case 6: return "Суббота"
    }
}

function convertMonthToString(month) {
    switch (month) {
        case 0: return "Январь"
        case 1: return "Февраль"
        case 2: return "Март"
        case 3: return "Апрель"
        case 4: return "Май"
        case 5: return "Июнь"
        case 6: return "Июль"
        case 7: return "Август"
        case 8: return "Сентябрь"
        case 9: return "Октябрь"
        case 10: return "Ноябрь"
        case 11: return "Декабрь"
    }
}

async function getData (url) {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    document.querySelector(".weather__temperatureContent").innerHTML = data.main.temp;
    infoBoxes[0].innerHTML = data.wind.speed;
    infoBoxes[1].innerHTML = data.main.humidity;
    infoBoxes[2].innerHTML = data.main.feels_like;
    infoBoxes[3].innerHTML = data.main.temp_min;
    infoBoxes[4].innerHTML = data.main.temp_max;
    infoBoxes[5].innerHTML = data.main.pressure;
    weatherRightBlockCity.innerHTML = city;
    weatherRightBlockDate.textContent = `${convertMonthToString(today.getMonth())}, ${convertDayToString(today.getDay())} ${today.getDate()}`
}


const today = new Date();
const api = '546581bc91fbd50be401c18d0836a347';
let city = "Минск";
let url = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${api}`;
const inputField = document.getElementById("weather__city");
const weatherRightBlock = document.querySelector(".weather__search")
const button = document.getElementById("weather__searchButton");
const infoBoxes = document.querySelectorAll(".block_content");
const weatherRightBlockCity = document.querySelector(".weather__name");
const weatherRightBlockDate = document.querySelector(".weather__date");

button.addEventListener("click",(event) => {
    city = inputField.value;
    url = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${api}`;
    getData(url); 
});

getData(url);