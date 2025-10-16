import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router";
import Login from "./Pages/Login/Login.jsx";
import Dashboard from "./Pages/Dashboard/Dashboard.jsx";
import App from "./App.jsx";
import RouteGuard from "./Guard/RouteGuard.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <RouteGuard>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </RouteGuard>
  </BrowserRouter>
);
