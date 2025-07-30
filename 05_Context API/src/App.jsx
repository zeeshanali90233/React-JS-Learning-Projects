import { createContext, useState } from "react";
import "./App.css";

export const AuthContext = createContext();
function App() {
  const [userName, setUserName] = useState("Zeeshan");

  return (
    <>
      <AuthContext.Provider value={{ userName, setUserName }}>
        <Parent />
      </AuthContext.Provider>
    </>
  );
}

export default App;
