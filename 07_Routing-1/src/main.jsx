import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Routes, Route } from "react-router";
import ContactUs from "./pages/ContactUs/ContactUs.jsx";
import About from "./pages/About/About.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import ProductInfo from "./pages/Product/ProductInfo.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/contactus" element={<ContactUs />} />
      <Route path="/about" element={<About />} />
      <Route path="/products/:id" element={<ProductInfo />} />
    </Routes>
  </BrowserRouter>
);
