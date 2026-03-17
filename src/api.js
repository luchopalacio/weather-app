const API_KEY = 'bae3ea6e2fb5b7ceb505506521c79dcf';

export async function getWeatherData(city) {
    try {
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
        );
        if (!response.ok) throw new Error('City not found');
        
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
        return null;
    }
}