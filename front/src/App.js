import Register from "./components/Register"
import Login from "./components/Login"
import Loginad from "./components/Loginad"
import Home from "./components/Home"
import Contactus from "./components/ContactUs"
import Services from "./components/Services"
import Profile from "./components/Profile"
import Navbar from "./components/Navbar"
import Dashboard from "./components/Dashboard"
import { ContextProvider, Context } from "./context/Context"
import { React, useContext } from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom"
import Users from "./components/users/Users"



function App() {
  const { admin } = useContext(Context)
  return (
    <ContextProvider >
      <BrowserRouter>
        <Navbar />


        <Routes>
          <Route path="/Register" element={<Register />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Loginad" element={<Loginad />} />
          <Route path="/" element={<Home />} />
          <Route path="/Contactus" element={<Contactus />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/users" element={<Users />} />
        </Routes>


      </BrowserRouter>

    </ContextProvider >
  );
}

export default App;
