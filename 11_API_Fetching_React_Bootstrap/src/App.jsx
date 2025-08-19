import { useState } from "react";
import "./App.css";

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
      <button onClick={Increment}>Increment</button>
      <span>{count}</span>
      <button onClick={Decrement}>Decrement</button>
    </>
  );
}

export default App;
