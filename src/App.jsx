import React, { useState } from 'react';
import './App.css';
import Header from './Components/Header';
import WeatherForm from './Components/WeatherForm';
import WeatherData from './Components/WeatherData';

function App() {
  const [coordinates, setCoordinates] = useState({ lat: 0, lon: 0 , name: ''});
  //Need to fix this
  const apiKey = "";
  

  const handleFormSubmit = (cityName) => {
    // Make the API request here using cityName and set the coordinates in state.
    console.log(cityName)
    fetch(`http://api.openweathermap.org/geo/1.0/zip?zip=${cityName},US&appid=${apiKey}`)
      .then((response) => response.json())
      .then((data) => {
        const lat = data.lat;
        const lon = data.lon;
        const name = data.name;
        setCoordinates({ lat, lon, name });
      })
      .catch((error) => {
        console.error('API request failed:', error);
      });
  };

  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <WeatherForm onFormSubmit={handleFormSubmit} />
        <div className='divback' style={{ margin: '0 auto' }}>
          <WeatherData coordinates={coordinates} />
        </div>
      </header>
    </div>
  );
}

export default App;
