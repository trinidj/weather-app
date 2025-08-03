import axios from 'axios';

const apiKey = import.meta.env.VITE_WEATHER_API_KEY;
const apiUrl = `https://api.tomorrow.io/v4/weather/forecast?location=toronto&apikey=${apiKey}`;

export const getForecastData = async () => {
  try {
    const response = await axios.get(apiUrl);

    return response.data;
  } catch (error) {
    console.error('Failed to fetch forecast data:', error);
    return null;
  }
}