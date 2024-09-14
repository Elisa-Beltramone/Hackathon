async function getWeatherData() {
    try {
        const response = await fetch('/weather-data');
        const data = await response.json();

        // Mostrar los datos en la consola
        console.log(data);

        // Opcionalmente, mostrar los datos en la página web
        const weatherDiv = document.getElementById('weatherData');
        data.forEach(observation => {
            const weatherInfo = document.createElement('p');
            weatherInfo.innerText = `Station: ${observation.ubi} | Temperature: ${observation.ta}°C`;
            weatherDiv.appendChild(weatherInfo);
        });

    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

// Llama a la función para obtener y mostrar los datos del clima
document.addEventListener('DOMContentLoaded', () => {
    getWeatherData();
});
