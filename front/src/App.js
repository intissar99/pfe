import Register from "./components/Register"
import Login from "./components/Login"
import Home from "./components/Home"
import Contactus from "./components/Contactus"
import Services from "./components/Services"
import Profile from "./components/Profile"
import Navbar from "./components/Navbar"



import { BrowserRouter, Route, Routes } from "react-router-dom"

function App() {
  return (
    <div >
      <BrowserRouter>
     <Navbar/>

    
        <Routes>
          <Route path="/Register" element={<Register />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/" element={<Home />} />
          <Route path="/Contactus" element={<Contactus/>} />
          <Route path="/Services" element={<Services/>} />
          <Route path="/Profile" element={<Profile />} />
        </Routes>


      </BrowserRouter>

    </div>
  );
}

export default App;
