import axios from "axios"

export const getWeatherData = async () => {
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=London&appid={API key}`

  try {
    const response = await axios.get(apiUrl);

    console.log('Weather Data:', response.data);
  } catch (error) {
    console.error('Failed to fetch weather data:', error);
  }
}