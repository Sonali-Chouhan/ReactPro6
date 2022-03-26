import React from "react";
import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from "./Component/Home";
import Registration from "./Component/Registration";
import Login from "./Component/Login";
import { useSelector } from "react-redux";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import Deshboard from "./Component/Deshboard";
import  Profile  from "./Component/Profile";
import Loginpage from "./Component/Loginpage";
import Table  from "./Component/Table";
import Page from "./Component/Page"
import "./App.css";
function App() {
  const gettoken = useSelector((state) => state.reducer.Logintoken);
  
 
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
                <Route path="/profile.html" element={<Profile />} />
                <Route path="/blank.html" element={<Loginpage />} />
                <Route path="/basic-table.html" element={<Table />} />
                <Route path="/fontawesome.html" element={<Page />} />
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