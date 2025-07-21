import axios from "axios";

const API_URL = "https://api.openweathermap.org/data/2.5/weather";
const GEO_API_URL = "https://api.openweathermap.org/geo/1.0/direct";
const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

// Fetch weather data for a city
export const getWeather = async (city) => {
  try {
    if (!API_KEY) throw new Error("API key missing! Check your .env file.");
    
    const response = await axios.get(API_URL, {
      params: {
        q: city,
        appid: API_KEY,
        units: "metric",
      },
    });

    return response.data;
  } catch (error) {
    console.error("Error fetching weather:", error.response?.data || error.message);
    return null;
  }
};

// Fetch city suggestions for autocomplete
export const getCitySuggestions = async (query) => {
  try {
    if (!query) return [];

    const response = await axios.get(GEO_API_URL, {
      params: {
        q: query,
        limit: 5,
        appid: API_KEY,
      },
    });

    return response.data.filter((city) => city.country === "IN");
  } catch (error) {
    console.error("Error fetching city suggestions:", error.response?.data || error.message);
    return [];
  }
};
