import React from "react";
import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from "./Component/Home";
import Registration from "./Component/Registration";
import Login from "./Component/Login";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import Deshboard from "./Component/Deshboard";
import  Profile  from "./Component/Profile";
import Loginpage from "./Component/AddContext";
import Table  from "./Component/Table";
import Page from "./Component/Page";
import Logout from "./Component/Logout";
import "./App.css";
function App() {
const gettoken=localStorage.getItem("Token")
  
 
  return (
    <div className="App">
      <ToastContainer />
    
      <Router>
        <div className="header">
          <Link to="/">Home</Link>
          <Link to="/userlogin">LoginForm</Link>
          <Link to="/user-registration">Registration</Link>
          
        </div>
       
         
          {
          gettoken ?
         
          <>
         
           <Routes>
                <Route path="/dashboard" element={<Deshboard />} />
                <Route path="/logout" element={<Logout />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/profile/:id" element={<Profile />} />
                <Route path="/blank" element={<Loginpage />} />
                <Route path="/basic-table" element={<Table />} />
                <Route path="/fontawesome" element={<Page />} />
                </Routes>
          </>
         :
          <>
         <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/userlogin" element={<Login />} />
        <Route path="/user-registration" element={<Registration />} />
        </Routes>
      </>
        }
        
        {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Deshboard />} />
        <Route path="/userlogin" element={<Login />} />
        <Route path="/user-registration" element={<Registration />} />
      </Routes> */}

      </Router> 
    </div>
  );
}
export default App;