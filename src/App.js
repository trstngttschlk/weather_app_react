import { useEffect, useState } from "react";

export default function App() {
  const API_KEY = "8752560f395246d7a25cc701074accaf";
  const [city, setCity] = useState("Berlin");
  const [cityData, setCityData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(
    function () {
      async function fetchData() {
        setIsLoading(true);
        
        const res = await fetch(
          `http://api.weatherbit.io/v2.0/current/?key=${API_KEY}&city=${city}/`
        );

        const data = await res.json();

        setCityData(data.data);
        console.log(cityData);
      }

      fetchData();
    },
    [city]
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Please enter city name"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      {isLoading ? <p>The temperature in {city} is: x</p> : ""}
    </div>
  );
}
