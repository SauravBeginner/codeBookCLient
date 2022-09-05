import "./App.css";
import "./style.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Profile from "./components/pages/Profile";
// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
import Login from "./components/pages/account/Login";
import Register from "./components/pages/account/Register";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/profile/:userId" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
