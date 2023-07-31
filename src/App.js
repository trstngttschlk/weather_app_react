import { useState } from "react";


export default function App() {
  const API_KEY = "fc1f03d2ec00c00d9883ed491ace1e1a";
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({});

  const [longitude, setLongitude] = useState(0)
  const [latitude, setLatitude] = useState(0)


async function fetchLongLat() {
  
  const res = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${query}&limit=5&appid=${API_KEY}`)

  const data = await res.json()

  setLongitude((data[0].lon))
  setLatitude((data[0].lat))

}

async function fetchWeather() {

  await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${API_KEY}`)
  .then(res => res.json())
  .then(data => setWeather(data))
  
}

function handleSubmit(e){
  e.preventDefault()

  fetchLongLat()

  fetchWeather()

}

  

  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Please enter city name"
          value={query}
          onChange={(e)=>setQuery(e.target.value)}
        />
        <button type="submit">Get Weather</button>
      </form>

      {weather.main ? <p>the current temperature in {query[0].toUpperCase() + query.slice(1)} is {weather.main.temp} °F</p> : null}
      
      <h2>Coordinates</h2>
      <p>Longitude: {longitude.toFixed(2)}</p>
      <p>Latitude: {latitude.toFixed(2)}</p>
    </div>
  );
}
