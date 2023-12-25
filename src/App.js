import  React, { useState } from 'react';
import './App.css';

const api={
  key:'c449aa3c71540a8688fad1f44da67d01',
  base:'https://api.openweathermap.org/data/2.5/',
}
function App() {
  const [search, setSearch] = useState("");
  const [weather, setWeather] = useState({});

  const searchPress = () => {
    console.log("working");//checking working or not
    console.log(search);//gives name of city
    fetch(`${api.base}weather?q=${search}&units=metric&APPID=${api.key}`)
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        setWeather(result);
      });
  };
  
  return (
    <div className="App">
      <h2>Weather-App</h2>
      <input className='search'
        type="text"
        placeholder="Search Location..."
        onChange={(e) => setSearch(e.target.value)}
      />
      <button className='butt' onClick={searchPress}>Search</button><br></br>

     <div  className="container">
      {weather.cod === '404' ? (
        <p>City not found</p>
      ):"" }
      {/* If weather is not undefined display results from API */}
      {typeof weather.main !== "undefined" ? (
          <div>
          <span className='in'>City:-</span>
            <p className='in'>{weather.name}</p><br></br>
           <span className='in'>Temperature:-</span>
            <p className='in'>{weather.main.temp}°C</p><br></br>
            <span className='in'>Humidity:-</span>
            <p className='in'>{weather.main.humidity}%</p><br></br>
            <span className='in'>Wind speed:-</span>
             <p className='in'>{weather.wind.speed} Km/h</p><br></br>
             <span className='in'>Weather Condition:-</span>
            <p className='in'>{weather.weather[0].main}</p>
          </div>
        ) : (
          ""
        )}
        </div>
    </div>
  );
}


export default App;
{/* <input type='text' placeholder='search...'
      onChange={(e)=>setSearch(e.target.value)}
     ></input>
     <button onClick={searchPress}>Search</button>
     <p>{Weather.name}</p>
     <p>{Weather.main.temp}°C</p>
     <p>{Weather.weather[0].main}</p>
     <p>{Weather.wind.speed}</p> */}
