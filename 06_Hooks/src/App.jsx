import { useState, useEffect, useMemo, useCallback } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");
  const [weather, setWeather] = useState(null);

  // useEffect: log count changes
  useEffect(() => {
    console.log(`Count changed: ${count}`);
  }, [count]);

  // useEffect: fetch weather data for Lahore
  useEffect(() => {
    fetch("https://p2pclouds.up.railway.app/v1/learn/weather?city=lahore")
      .then((res) => res.json())
      .then((data) => {
        setWeather(data);
      })
      .catch((err) => {
        console.error("Weather API error:", err);
      });
  }, []);

  // useMemo: expensive calculation
  const doubleCount = useMemo(() => {
    console.log("Calculating doubleCount");
    return count * 2;
  }, [count]);

  // useCallback: memoized function
  const Increment = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  const Decrement = useCallback(() => {
    setCount((prev) => prev - 1);
  }, []);

  // useState: input field
  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  return (
    <>
      <input
        type="text"
        value={name}
        onChange={handleNameChange}
        placeholder="Enter your name"
      />
      <p>Hello, {name || "Guest"}!</p>
      <button onClick={Increment}>Increment</button>
      <span style={{ margin: "0 10px" }}>{count}</span>
      <button onClick={Decrement}>Decrement</button>
      <p>Double Count (useMemo): {doubleCount}</p>
      {/* Weather info */}
      {weather ? (
        <div style={{ marginTop: "20px", padding: "10px", border: "1px solid #ccc", borderRadius: "8px", maxWidth: "300px" }}>
          <h3>Weather in {weather.location.name}</h3>
          <p>Temperature: {weather.current.temp_c}°C</p>
          <p>Condition: {weather.current.condition.text}</p>
          <img src={weather.current.condition.icon.replace('//', 'https://')} alt={weather.current.condition.text} />
        </div>
      ) : (
        <p>Loading weather...</p>
      )}
    </>
  );
}

export default App;
