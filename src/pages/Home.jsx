import { useState } from "react";
import { getWeather } from "../services/weatherApi";
import SearchBar from "../components/SearchBar";
import WeatherCard from "../components/WeatherCard";
import ThemeToggle from "../components/ThemeToggle";

const Home = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);

  const handleSearch = async () => {
    if (!city.trim()) {
      setError("Please enter a city name.");
      return;
    }
    setError(null);

    const data = await getWeather(city);
    if (data) {
      setWeather(data);
      setCity("");
    } else {
      setError("City not found. Please enter a valid city.");
    }
  };

  return (
    <div className="flex items-center flex-col justify-center min-h-screen px-4 bg-base-200 transition-all duration-300">
      <ThemeToggle />
      <div className="w-full max-w-xl p-8 text-center bg-base-100 rounded-3xl shadow-xl">
        <h2 className="text-xl sm:text-4xl font-bold text-primary mb-6 drop-shadow-md">
          Weather App 🌤️
        </h2>

        <SearchBar city={city} setCity={setCity} onSearch={handleSearch} />
        {error && <p className="text-error font-medium mt-3">{error}</p>}
        <WeatherCard weather={weather} />
      </div>
    </div>
  );
};

export default Home;
