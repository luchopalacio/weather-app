import { createElement } from "./domHelper";

export function renderWeather(data) {
    console.log(data);
    const weatherCard = document.getElementById('weather-card');

    weatherCard.innerHTML = '';

    const name = data.name;
    const tempCelsius = Math.round(data.main.temp - 273.15);
    const feelsLikeCelsius = Math.round(data.main.feels_like - 273.15);
    const humidityValue = data.main.humidity;
    const windValue = data.wind.speed;
    const description = data.weather[0].description;
    const iconCode = data.weather[0].icon;

    createElement('h2', weatherCard, { text: name });

    const iconContainer = createElement('div', weatherCard, { attributes: { id: 'weather-icon-container' } });
    createElement('img', iconContainer, { 
        attributes: { 
            src: `https://openweathermap.org/img/wn/${iconCode}@2x.png`,
            alt: description 
        } 
    });

    createElement('p', weatherCard, { text: `Weather: ${description}` });
    createElement('p', weatherCard, { text: `Temperature: ${tempCelsius}°C` });
    createElement('p', weatherCard, { text: `Humidity: ${humidityValue}%` });
    createElement('p', weatherCard, { text: `Feels like: ${feelsLikeCelsius}°C` });
    createElement('p', weatherCard, { text: `Wind: ${windValue} m/s` });

    weatherCard.classList.remove('card-hidden');
}

export function showErrorMessage() {
    const modal = document.getElementById('error-modal');
    modal.showModal();
}
