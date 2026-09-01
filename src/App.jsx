import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Events from "./pages/Events";
import Contact from "./pages/Contact";

function App() {
  return (
    <Routes>
      <Route element={<Home />} path="/" />
      <Route element={<Events />} path="/events" />
      <Route element={<Contact />} path="/contact" />
    </Routes>
  );
}

export default App;
