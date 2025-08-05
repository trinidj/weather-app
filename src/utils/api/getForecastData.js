import axios from 'axios';

const apiKey = import.meta.env.VITE_WEATHER_API_KEY;

export const getForecastData = async (location = 'Toronto') => {
  const apiUrl = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${location}&days=5&aqi=no&alerts=no`;

  try {
    const response = await axios.get(apiUrl);

    return response.data;
  } catch (error) {
    console.error('Failed to fetch forecast data:', error);
    return null;
  }
}