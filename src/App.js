import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Register from "./Pages/Register";
import Welcome from "./Pages/Welcome";
import React from "react";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}>
          {" "}
        </Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/welcome" element={<Welcome />}></Route>
      </Routes>
    </>
  );
}

export default App;
