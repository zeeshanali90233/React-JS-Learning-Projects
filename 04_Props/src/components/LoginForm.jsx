import React from "react";

const LoginForm = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Email:", email);
    console.log("Password:", password);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        value={email}
        onChange={handleEmailChange}
        placeholder="Email"
      />
      <input
        type="password"
        value={password}
        onChange={handlePasswordChange}
        placeholder="Password"
      />

      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;
