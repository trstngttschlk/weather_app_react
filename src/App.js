import { useEffect, useState } from "react";

export default function App() {
  const API_KEY = "8752560f395246d7a25cc701074accaf";
  const [city, setCity] = useState("");
  useEffect;

  // https://www.weatherbit.io/api/weather-current

  return (
    <div>
      <input
        type="text"
        placeholder="Please enter city name"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
    </div>
  );
}
