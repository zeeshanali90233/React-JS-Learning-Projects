import "./App.css";
import { NavLink } from "react-router";

function App() {
  return (
    <>
      <div>
        <h1>Welcome</h1>

        <p>You are on the right Place Just go login to go to dashboard</p>
        <NavLink to="/login" end>
          Go to Login
        </NavLink>
      </div>
    </>
  );
}

export default App;
