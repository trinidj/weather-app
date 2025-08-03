import axios from "axios"

const apiKey = import.meta.env.VITE_WEATHER_API_KEY
const apiUrl = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=Toronto&aqi=no`

export const getWeatherData = async () => {
  try {
    const response = await axios.get(apiUrl);

    return response.data;
  } catch (error) {
    console.error('Failed to fetch weather data:', error);
    return null;
  }
}