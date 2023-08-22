import logo from "./logo.svg";
import "./App.css";
import About from "./About";
import Navbar from "./Navbar";
import background from "./images/Background_Image.png";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter className="overflow-x-hidden">
      <Navbar />

      <Routes>
        <Route path="/" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
