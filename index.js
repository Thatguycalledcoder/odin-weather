const API_KEY = "a33ef00e85da46e4901203555231711";
const url = "http://api.weatherapi.com/v1";

const getCurrentWeather = async (q, url, key) => {
    const api_location = "/current.json";
    const endpoint = `${url}${api_location}?key=${key}&q=${q}`;
    const response = await fetch(endpoint, {mode: "cors"});
    const data = await response.json();
    console.log(data.current.condition.icon);
    document.querySelector("body").style["background-image"] = "url(" + data.current.condition.icon + ")";
}

const getWeatherForecast = (q, url, key) => {
    const api_location = "/forecast.json";
    const endpoint = `${url}${api_location}?key=${key}&q=${q}`;
}

getCurrentWeather("Paris", url, API_KEY);