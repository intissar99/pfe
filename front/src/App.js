import Register from "./components/Register"
import Login from "./components/Login"
import Home from "./components/Home"
import ContactUs from "./components/ContactUs"
import Navbar from "./components/Navbar"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import './App.css'
function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/Register" element={<Register />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/" element={<Home />} />
          <Route path="/ContactUs" element={<ContactUs />} />
        </Routes>


      </BrowserRouter>

    </div>
  );
}

export default App;
