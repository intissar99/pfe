import Register from "./components/Register"
import Login from "./components/Login"
import Home from "./components/Home"
import Navbar from "./components/Navbar"
import { BrowserRouter, Route, Routes } from "react-router-dom"
function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/Register" element={<Register />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/" element={<Home />} />
        </Routes>


      </BrowserRouter>

    </div>
  );
}

export default App;
