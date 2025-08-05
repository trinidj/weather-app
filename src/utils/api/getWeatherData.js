import axios from 'axios';

const apiKey = import.meta.env.VITE_WEATHER_API_KEY

export const getWeatherData = async (location = 'Toronto') => {
  const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}&aqi=no`

  try {
    const response = await axios.get(apiUrl);

    return response.data;
  } catch (error) {
    console.error('Failed to fetch weather data:', error);
    return null;
  }
}