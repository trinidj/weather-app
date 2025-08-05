import axios from 'axios';

const apiKey = import.meta.env.VITE_WEATHER_API_KEY

export const getWeatherData = async (location = 'toronto') => {
  const apiUrl = `https://api.tomorrow.io/v4/weather/realtime?location=${location}&apikey=${apiKey}`

  try {
    const response = await axios.get(apiUrl);

    return response.data;
  } catch (error) {
    console.error('Failed to fetch weather data:', error);
    return null;
  }
}