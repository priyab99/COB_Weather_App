import React, { useState } from 'react';
import './WeatherApp.css';

const WeatherApp = () => {
  let api_key = "cd4f96733a40ba87a1de3cb6dab5c79b";

  const [weatherData, setWeatherData] = useState({
    humidity: '',
    windSpeed: '',
    temperature: '',
    location: '',
  });

  const search = async () => {
    const element = document.getElementsByClassName("city");
    if (element[0].value === "") {
      return 0;
    }
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${api_key}`;

    let res = await fetch(url);
    let data = await res.json();
    setWeatherData({
      humidity: data.main.humidity + "%",
      windSpeed: data.wind.speed + " km/h",
      temperature: data.main.temp + "°C",
      location: data.name,
    });
  }

  return (
    <div className='container'>
      <div className='top-bar'>
        <input type="text" placeholder='search' className='city' />
        <div className="srch"><img src="https://img.freepik.com/free-vector/illustration-magnifying-glass-icon_53876-5613.jpg?w=740&t=st=1695140608~exp=1695141208~hmac=d65bf2a10e71c9b2a6a905b32bb0386a3e954828f89ba6a0990ae5aa8d0ead99" className="search-icon" onClick={() => { search() }} alt="" /></div>
      </div>

      <div className='temperature'>{weatherData.temperature}</div>
      <div className='location'>{weatherData.location}</div>
      <div className='data-container'>
        <div className="element">
          <div className="data">
            <div className="humidity-per">{weatherData.humidity}</div>
            <div className="text">Humidity</div>
          </div>
        </div>
        <div className="element">
          <div className="data">
            <div className="wind-rate">{weatherData.windSpeed}</div>
            <div className="text">Wind Speed</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherApp;
