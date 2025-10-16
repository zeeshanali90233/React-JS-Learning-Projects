import React, { useState } from 'react';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { Form, Button, Container, Row, Col, Card, Spinner } from 'react-bootstrap';
import './Chatbot.css';

const Chatbot = () => {
  const [message, setMessage] = useState('');
  const [chat, setChat] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!message) return;

    setLoading(true);
    const userMessage = { role: 'user', text: message };
    setChat(prevChat => [...prevChat, userMessage]);

    try {
      // IMPORTANT: Replace with your actual API key
      const genAI = new GoogleGenerativeAI('YOUR_GEMINI_API_KEY');
      const model = genAI.getGenerativeModel({ model: 'gemini-pro' });
      const result = await model.generateContent(message);
      const response = await result.response;
      const text = response.text();
      const botMessage = { role: 'bot', text: text };
      setChat(prevChat => [...prevChat, botMessage]);
    } catch (error) {
      console.error('Error fetching from Gemini API:', error);
      const errorMessage = { role: 'bot', text: 'Sorry, I am having trouble connecting. Please try again later.' };
      setChat(prevChat => [...prevChat, errorMessage]);
    } finally {
      setLoading(false);
      setMessage('');
    }
  };

  return (
    <Container>
      <Row>
        <Col>
          <Card>
            <Card.Header>Gemini Chatbot</Card.Header>
            <Card.Body className="chat-window">
              {chat.map((msg, index) => (
                <div key={index} className={`message ${msg.role}`}>
                  {msg.text}
                </div>
              ))}
              {loading && <Spinner animation="border" size="sm" />}
            </Card.Body>
            <Card.Footer>
              <Form onSubmit={handleSubmit}>
                <Form.Group className="d-flex">
                  <Form.Control
                    type="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Type your message..."
                  />
                  <Button variant="primary" type="submit" disabled={loading}>
                    Send
                  </Button>
                </Form.Group>
              </Form>
            </Card.Footer>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Chatbot;