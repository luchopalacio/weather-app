# Weather App

A weather dashboard built with vanilla JavaScript, CSS, HTML and Webpack. This project was developed as part of **The Odin Project** curriculum to practice working with APIs, asynchronous data handling, and dynamic DOM manipulation.

## Live Demo
[View Live Project]()

## Features
- **Real-time Data:** Fetches live weather information from the OpenWeather API.
- **Dynamic Search:** Find weather details for any city worldwide.
- **Loading States:** Features a custom CSS spinner during data fetching.
- **Error Handling:** Custom modal feedback for invalid city names or network issues.
- **Modular Design:** Separation of concerns using ES6 Modules (`api.js`, `dom.js`, `domHelper.js`).
- **Responsive Design:** Fully optimized for mobile, tablet, and desktop views.

## Built With
* **JavaScript (ES6+):** Modular patterns and Async/Await.
* **Webpack:** Asset bundling and development server.
* **OpenWeather API:** For fetching global weather data.
* **CSS3:** Custom styling with Flexbox and Grid.
* **HTML5:** Semantic markup and `<dialog>` elements for modals.

## Getting Started

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed on your machine.

### Installation

1. **Clone the repository:**
```bash
git clone [https://github.com/YOUR_USERNAME/weather-app.git](https://github.com/YOUR_USERNAME/weather-app.git)
 ```
2. **Navigate to the project directory:**
```bash
cd weather-app
```

3. **Install dependencies:**
```Bash
npm install
```

4. **Run the development server:**
```Bash
npm start
```

5. **Build for production:**
```Bash
npm run build
```

## Future Improvements (v2) 
- User Location: Use the Geolocation API to show local weather on startup.
- Unit Toggle: Switch between Celsius and Fahrenheit.
- Extended Forecast: Add weather data for the next 3 or 5 days.
- Dynamic Backgrounds: Change the UI theme based on weather conditions (sunny, rainy, snowy).
- UI refactor and design improvements.

## Security Disclaimer
I'm conscious that the API key is exposed in this version. This project is a practical exercise for API usage. Future versions will address this by implementing proper environment variable management or a proxy server to keep credentials secure.

## License
This project is licensed under the MIT License - see the LICENSE file for details.

## Author
[Luciano Palacio](https://github.com/luchopalacio)