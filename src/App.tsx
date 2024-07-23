// Import the functions you need from react and react file
import React from "react";
import {BrowserRouter as Router, Route, Routes,} from "react-router-dom";
import "./App.css"; 
import { Login } from "./pages/login/login";
import { Navbar } from "./components/navbar";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
