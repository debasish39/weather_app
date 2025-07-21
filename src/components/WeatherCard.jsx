const WeatherCard = ({ weather }) => {
  if (!weather) return null;

  const {
    name,
    weather: weatherInfo,
    main: { temp, humidity },
    wind: { speed },
  } = weather;

  const iconUrl = `https://openweathermap.org/img/wn/${weatherInfo[0].icon}@2x.png`;

  return (
    <div className="card max-w-sm mx-auto mt-10 bg-base-100 shadow-2xl backdrop-blur-md border border-white/20">
      <div className="card-body items-center text-center">
        <img
          src={iconUrl}
          alt="Weather Icon"
          className="w-20 h-20 drop-shadow-md"
        />
        <h2 className="card-title text-primary text-3xl font-bold mt-2">{name}</h2>
        <p className="capitalize text-sm text-gray-500 tracking-wide">
          {weatherInfo[0].description}
        </p>
        <h1 className="text-5xl font-extrabold text-neutral-content my-4">{temp}°C</h1>

        <div className="flex gap-4 mt-2">
          <div className="badge badge-info badge-lg">
            Humidity: {humidity}%
          </div>
          <div className="badge badge-accent badge-lg">
            Wind: {speed} m/s
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
