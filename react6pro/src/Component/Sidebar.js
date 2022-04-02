import React from 'react';

import {Link} from "react-router-dom";

const Sidebar = () => {
   
    
  return (
    <div>
      <aside className="left-sidebar" data-sidebarbg="skin6">
         
         <div className="scroll-sidebar">
            
             <nav className="sidebar-nav">
                 <ul id="sidebarnav">
                   
                     <li className="sidebar-item pt-2">
                       <Link className="sidebar-link waves-effect waves-dark sidebar-link"
                              to="/dashboard"
                              aria-expanded="false">
                              <i className="far fa-clock" aria-hidden="true"></i>
                              <span className="hide-menu">Dashboard</span>
                        </Link>
                     </li>
                     <li className="sidebar-item">
                        <Link className="sidebar-link waves-effect waves-dark sidebar-link"
                              to="/profile"
                              aria-expanded="false">
                              <i className="far fa-clock" aria-hidden="true"></i>
                              <span className="hide-menu">Profile</span>
                        </Link>
                     </li>
                     <li className="sidebar-item">
                     <Link className="sidebar-link waves-effect waves-dark sidebar-link"
                              to="/basic-table"
                              aria-expanded="false">
                              <i className="far fa-clock" aria-hidden="true"></i>
                              <span className="hide-menu">Basic-Table</span>
                        </Link>
                     </li>
                     <li className="sidebar-item">
                     <Link className="sidebar-link waves-effect waves-dark sidebar-link"
                              to="/fontawesome"
                              aria-expanded="false">
                              <i className="far fa-clock" aria-hidden="true"></i>
                              <span className="hide-menu">Page</span>
                        </Link>
                     </li>
                     <li className="sidebar-item">
                     <Link className="sidebar-link waves-effect waves-dark sidebar-link"
                              to="/logout"
                              aria-expanded="false">
                              <i className="far fa-clock" aria-hidden="true"></i>
                              <span className="hide-menu">logout</span>
                        </Link>
                         
                     </li>
                     <li className="sidebar-item">
                     <Link className="sidebar-link waves-effect waves-dark sidebar-link"
                              to="/blank"
                              aria-expanded="false">
                              <i className="far fa-clock" aria-hidden="true"></i>
                              <span className="hide-menu">Loginpage</span>
                        </Link>
                     </li>
                     <li className="sidebar-item">
                     <Link className="sidebar-link waves-effect waves-dark sidebar-link"
                              to="/404"
                              aria-expanded="false">
                              <i className="far fa-clock" aria-hidden="true"></i>
                              <span className="hide-menu">Error 404</span>
                        </Link>
                        </li>
                     <li className="text-center p-20 upgrade-btn">
                         <a href="https://www.wrappixel.com/templates/ampleadmin/"
                          className="btn d-grid btn-danger text-white" target="_blank">
                             Upgrade to Pro</a>
                     </li>
                 </ul>

             </nav>
          </div>
         
     </aside>


    </div>
  )
}

export default Sidebar;