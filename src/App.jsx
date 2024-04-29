import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/home-page/Home";
import SignIn from "./components/auth/SignIn";
import Registration from "./components/auth/Registration";
import MensProductPage from "./productPages/mensProductPage";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/mensproduct" element={<MensProductPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;