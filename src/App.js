import "./App.css";
import * as React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Viewprofile from "./pages/Viewprofile";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Viewprofile/:userName" element={<Viewprofile />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
