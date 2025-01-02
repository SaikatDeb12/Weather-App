const apiKey = "85736HARSRPA22DKSSPPU37JQ";
const city = "delhi";

async function checkWeather() {
    const cityName = document.querySelector('.input_city').value;

    const apiUrl = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${cityName}?unitGroup=metric&key=${apiKey}&contentType=json`;

    const response = await fetch(apiUrl);

    var data = await response.json();
    console.log(data);
    document.querySelector('.degree').innerHTML = data.currentConditions.temp;
    document.querySelector('.cityName').innerHTML = cityName;
    document.querySelector('.humid').innerHTML = data.currentConditions.humidity;
    document.querySelector('.wind-speed').innerHTML = data.currentConditions.windspeed;
    const conditions = data.currentConditions.conditions;
    if (conditions == "Clear") {
        document.querySelector('.temp-img').src = 'images/clear.png';
    }
    else if (conditions == "Partially cloudy") {
        document.querySelector('.temp-img').src = 'images/mist.png';
    }
    else if (conditions == "Overcast") {
        document.querySelector('.temp-img').src = 'images/clouds.png';
    }
}

const button = document.querySelector("button");
button.addEventListener("click", (e) => {
    checkWeather();
});