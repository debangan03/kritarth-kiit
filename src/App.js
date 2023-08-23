import logo from "./logo.svg";
import "./App.css";
import About from "./About";
import Navbar from "./Navbar";
import Home from "./component/Home";
import background from "./images/Background_Image.png";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contact from "./component/Contact";
import Empty from "./component/Empty";

function App() {
  return (
    <BrowserRouter className="overflow-x-hidden">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contacts" element={<Empty />} />
      </Routes>

      <Contact />
    </BrowserRouter>
  );
}

export default App;
