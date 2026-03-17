import './styles.css';
import { getWeatherData } from './api.js';
import { renderWeather, showErrorMessage } from './dom.js';
const spinner = document.getElementById('loading-spinner');
const weatherCard = document.getElementById('weather-card');

const form = document.getElementById('weather-form');
const input = document.getElementById('city-input');

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const city = input.value.trim();
    
    if (city) {
        spinner.classList.remove('spinner-hidden');
        weatherCard.classList.add('card-hidden'); 

        try {
            const data = await getWeatherData(city);
            
            if (data) {
                renderWeather(data);
            } else {
                showErrorMessage();
            }
        } catch (error) {
            showErrorMessage();
        } finally {
            spinner.classList.add('spinner-hidden');
        }
    }
});

const closeButton = document.getElementById('close-button');
const modal = document.getElementById('error-modal');

closeButton.addEventListener('click', () => {
    modal.close();
});