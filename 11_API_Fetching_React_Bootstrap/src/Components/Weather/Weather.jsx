import React, { useState } from "react";
import { Card, Spinner, Alert, Form, Button } from "react-bootstrap";
import axios from "axios";

const Weather = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleFetchWeather = (e) => {
    e.preventDefault();
    if (!city) {
      setError({ message: "Please enter a city name." });
      return;
    }

    setLoading(true);
    setWeather(null);
    setError(null);

    axios
      .get(`https://p2pclouds.up.railway.app/v1/learn/weather?city=${city}`)
      .then((response) => {
        setWeather(response.data);
        setLoading(false);
      })
      .catch((error) => {
        if (error.response) {
          setError({
            message: `Error: ${
              error.response.data.message || "City not found"
            }`,
          });
        } else if (error.request) {
          setError({
            message: "Network Error: Could not retrieve weather data.",
          });
        } else {
          setError({ message: error.message });
        }
        setLoading(false);
      });
  };

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Title>Search Weather</Card.Title>
        <Form onSubmit={handleFetchWeather}>
          <Form.Group className="mb-3">
            <Form.Control
              type="text"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              placeholder="Enter city"
            />
          </Form.Group>
          <Button variant="primary" type="submit" disabled={loading}>
            {loading ? (
              <Spinner
                as="span"
                animation="border"
                size="sm"
                role="status"
                aria-hidden="true"
              />
            ) : (
              "Get Weather"
            )}
          </Button>
        </Form>

        {error && (
          <Alert variant="danger" className="mt-3">
            {error.message}
          </Alert>
        )}

        {weather && (
          <div className="mt-3">
            <Card.Title>Weather in {weather.location.name}</Card.Title>
            <Card.Text>
              <strong>Temperature:</strong> {weather.current.temp_c}°C
            </Card.Text>
          </div>
        )}
      </Card.Body>
    </Card>
  );
};

export default Weather;
