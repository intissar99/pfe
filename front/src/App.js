import Register from "./components/Register"
import Login from "./components/Login"
import Loginad from "./components/Loginad"
import Home from "./components/Home"
import Contactus from "./components/Contactus"
import Services from "./components/Services"
import Profile from "./components/Profile"
import Navbar from "./components/Navbar"
import Dashboard from "./components/Dashboard"
import {ContextProvider} from "./context/Context"



import { BrowserRouter, Route, Routes } from "react-router-dom"



function App() {
  
  return (
    <ContextProvider >
      <BrowserRouter>
     <Navbar/>
     

    
        <Routes>
          <Route path="/Register" element={<Register />} />
          <Route path="/Login" element={<Login />}/>
          <Route path="/Loginad" element={<Loginad />} />
          <Route path="/" element={<Home />} />
          <Route path="/Contactus" element={<Contactus/>} />
          <Route path="/Services" element={<Services/>} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/Dashboard" element={<Dashboard />} />
        </Routes>


      </BrowserRouter>

    </ContextProvider >
  );
}

export default App;
