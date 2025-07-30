import { useState } from "react";
import "./App.css";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior - Stops from page reload
    console.log("Email:", email);
    console.log("Password:", password);
    // Here you can add logic to handle form submission, like sending data to a server
  };
  return (
    <>
      <form onSubmit={handleSubmit} className="form">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={handleEmailChange}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={handlePasswordChange}
        />

        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default App;
