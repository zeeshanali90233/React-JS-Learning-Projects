import "./App.css";
import Header from "./components/Header";
import LoginForm from "./components/LoginForm";
import Footer from "./components/Footer";

function App() {
  const myName = "Zeeshan Ali";
  const companyInfo = {
    name: "P2PClouds",
    address: "Arfa Tower Lahore",
    contact: "info@p2pclouds.net",
  };
  return (
    <>
      <Header myName={myName} />
      <LoginForm />
      <Footer companyInfo={companyInfo} />
    </>
  );
}

export default App;
