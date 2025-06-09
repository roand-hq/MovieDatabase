import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Welcome } from "./pages/Welcome";
import { Home } from "./pages/Home";
import { AddMovie } from "./pages/AddMovie";
import { Toaster } from "react-hot-toast";
import "./App.css";
function App() {
  return (
    <>
      <Toaster position="top-right" />
      <Router>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Add-movie" element={<AddMovie />} />
          <Route path="/movie/:id" element={<AddMovie />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
