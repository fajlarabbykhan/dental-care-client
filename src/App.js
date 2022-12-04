import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Pages/Shared/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Login from "./Pages/Login/Login";
import Appointment from "./Pages/Appointment/Appointment";
import Review from "./Pages/Review/Review";
import Contact from "./Pages/Contact/Contact";
// border-none px-5 py-2 bg-[ #0071c2] text-white font-bold rounded cursor-pointer bg-gradient-to-r from-[#5651e5] to-[#709dff]
function App() {
  return (
    <div className="">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/appoinment" element={<Appointment></Appointment>} />
        <Route path="/review" element={<Review></Review>} />
        <Route path="/contact" element={<Contact></Contact>} />
        <Route path="/about" element={<About></About>} />
        <Route path="/login" element={<Login></Login>} />
      </Routes>
    </div>
  );
}

export default App;
