import React from "react";
import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useAuth } from "react-use-auth"
import Home from "./Component/Home";
import Registration from "./Component/Registration";
import Login from "./Component/Login";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import "./App.css";
function App() {
  return (
    <div className="App">
      <ToastContainer />

      <Router>
        <div className="header">
          <Link to="/">Home</Link>
          <Link to="/userlogin">LoginForm</Link>
          <Link to="/user-registration">Registration</Link>
          
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/userlogin" element={<Login />} />
          <Route path="/user-registration" element={<Registration />} />
        </Routes>
      </Router>
    </div>
  );
}
export default App;
