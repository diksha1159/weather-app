const apiKey = '8e426f05823b8c25be752a88d501d66e';  // Replace with your OpenWeatherMap API key
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather';

document.getElementById('search-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const city = document.getElementById('city-input').value;
    if (city) {
        getWeather(city);
    }
});

function getWeather(city) {
    fetch(`${apiUrl}?q=${city}&appid=${apiKey}&units=metric`)
        .then(response => response.json())
        .then(data => {
            if (data.cod === 200) {
                displayWeather(data);
            } else {
                alert('City not found');
            }
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
            alert('Error fetching weather data');
        });
}

function displayWeather(data) {
    document.getElementById('weather').style.display = 'block';
    document.getElementById('city-name').textContent = data.name;
    document.getElementById('temperature').textContent = `Temperature: ${data.main.temp} °C`;
    document.getElementById('humidity').textContent = `Humidity: ${data.main.humidity} %`;
    document.getElementById('wind-speed').textContent = `Wind Speed: ${data.wind.speed} m/s`;
}

