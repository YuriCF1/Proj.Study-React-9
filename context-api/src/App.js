import './App.css';

// import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import NavBar from "./components/Navbar"
import About from "./pages/About"

function App() {
  return (
    <div className="App">
      <h1>Context API</h1>

      <BrowserRouter>
        <NavBar />
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
