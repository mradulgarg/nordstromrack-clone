import { BrowserRouter, Routes, Route, Navigate, Outlet } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/home-page/Home";
import SignIn from "./components/auth/SignIn";
import Registration from "./components/auth/Registration";
import MensProductPage from "./productPages/mensProductPage";
import { useState } from "react";

function App() {

  const [auth, setAuth] = useState({token: false});

  const login = () => {
    setAuth({token: true});
  }
  const logout = () => {
    setAuth({token: false});
  }
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home login={login} />} />
        <Route path="/signin" element={<SignIn login={login} />} />
        <Route path="/registration" element={<Registration login={login} />} />
        <Route element={<PrivateRoutes auth = {auth} />}>
        <Route path="/mensproduct" element={<MensProductPage />} />
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

const PrivateRoutes = ({auth}) => {
  return auth.token ? <Outlet /> : <Navigate to ='/signin'/>
}

export default App;