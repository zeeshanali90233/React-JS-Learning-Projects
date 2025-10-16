import { useState } from "react";
import "./App.css";
import Weather from "./Components/Weather/Weather";
import Chatbot from "./Components/Chatbot/Chatbot";
import { Card, Button, Container, Row, Col } from "react-bootstrap";

function App() {
  const [show, setShow] = useState(null);

  return (
    <Container className="mt-5">
      <Row>
        <Col>
          <Card style={{ width: "18rem" }}>
            <Card.Body>
              <Card.Title>Weather</Card.Title>
              <Card.Text>
                Check the current weather in Lahore.
              </Card.Text>
              <Button variant="primary" onClick={() => setShow("weather")}>
                Check Weather
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: "18rem" }}>
            <Card.Body>
              <Card.Title>Chatbot</Card.Title>
              <Card.Text>
                Chat with our Gemini-powered chatbot.
              </Card.Text>
              <Button variant="primary" onClick={() => setShow("chatbot")}>
                Open Chatbot
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="mt-5">
        <Col>
          {show === "weather" && <Weather />}
          {show === "chatbot" && <Chatbot />}
        </Col>
      </Row>
    </Container>
  );
}

export default App;
