import React from 'react';
import { useNavigate} from "react-router-dom";
import Wrapper from './Wrapper'; 
import Header from './Header';
import Sidebar from './Sidebar';

const Logout = () => {
    const navigate=useNavigate();
    const handlelogout=()=>{
        console.log("ggg")
        localStorage.removeItem("Token")
        navigate("/userlogin")}
  return (
    <div
    id="main-wrapper"
    data-layout="vertical"
    data-navbarbg="skin5"
    data-sidebartype="full"
    data-sidebar-position="absolute"
    data-header-position="absolute"
    data-boxed-layout="full"
  >
    <Header/>
    <Sidebar/>

    <div className="page-wrapper">
       <Wrapper/>  
       <button onClick={handlelogout}>logout</button>


        <footer className="footer text-center">
          2021 © Ample Admin brought to you by
          <a href="https://www.wrappixel.com/">wrappixel.com</a>
        </footer>

     </div>
    </div>
    
    

    
  )
}

export default Logout