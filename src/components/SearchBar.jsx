import { useState } from "react";
import { getCitySuggestions } from "../services/weatherApi";

const SearchBar = ({ city, setCity, onSearch }) => {
  const [suggestions, setSuggestions] = useState([]);

  const handleChange = async (e) => {
    const value = e.target.value;
    setCity(value);

    if (value.length > 2) {
      const cities = await getCitySuggestions(value);
      setSuggestions(cities);
    } else {
      setSuggestions([]);
    }
  };

  const handleSelect = (selectedCity) => {
    setCity(selectedCity.name);
    setSuggestions([]);
  };

  return (
    <div className="relative mb-4">
      <div className="flex gap-2">
        <input
          type="text"
          placeholder="Enter city"
          value={city}
          onChange={handleChange}
          className="w-full px-4 py-2 rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={onSearch}
          className="px-5 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition-all font-semibold"
        >
          Search
        </button>
      </div>

      {suggestions.length > 0 && (
        <ul className="absolute z-10 w-full bg-white shadow-md rounded-md mt-1 max-h-60 overflow-y-auto border border-gray-200">
          {suggestions.map((city, index) => (
            <li
              key={index}
              onClick={() => handleSelect(city)}
              className="px-4 py-2 cursor-pointer hover:bg-gray-100 text-blue transition"
            >
              {city.name}, {city.country}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;
