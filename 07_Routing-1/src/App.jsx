import { useState } from "react";
import "./App.css";
import { NavLink } from "react-router";
import MyNavbar from "./components/Navbar";
import MyCard from "./components/Cards";

function App() {
  const [count, setCount] = useState(0);

  const Increment = () => {
    setCount(count + 1);
  };

  const Decrement = () => {
    setCount(count - 1);
  };

  return (
    <>
      <MyNavbar />
      <MyCard title={"Zeshan Ali"} description={"AI/Cloud Engineer"}/>
      <nav>
        <NavLink to="/" end>
          Home
        </NavLink>
        <NavLink to="/contactus" end>
          Contact Us
        </NavLink>
        <NavLink to="/about" end>
          About
        </NavLink>
      </nav>
      <button onClick={Increment}>Increment</button>
      <span>{count}</span>
      <button onClick={Decrement}>Decrement</button>
    </>
  );
}

export default App;
