import React,{useEffect} from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import Wrapper from './Wrapper';
import { useDispatch,useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {Delete_Context} from "../Redux/Action/action"


const Table = () => {
    const pass= useSelector((state)=>state.Profilereducer.user);
    // console.log("pass",pass)
    const dispatch=useDispatch();
    const navigate=useNavigate();
    const data = localStorage.getItem("Profile")
    const obj=JSON.parse(data)
    useEffect(()=>{
      
    },[pass])
    const handleDelete=(id)=>{
      dispatch( Delete_Context(id))
    }

    const handleEdit=(id)=>{
    navigate(`/profile/${id}`)
    }
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
        <div className="container-fluid">
         
          <div className="row">
            <div className="col-sm-12">
              <div className="white-box">
                <h3 className="box-title">Basic Table</h3>
                <p className="text-muted">Add class <code>.table</code></p>
                <div className="table-responsive">
                  {pass ?
                  <table className="table text-nowrap">
                    <thead>
                      <tr>
                        <th className="border-top-0">Id</th>
                        <th className="border-top-0">First Name</th>
                        <th className="border-top-0">Email</th>
                        <th className="border-top-0">Contact</th>
                        <th className="border-top-0" colSpan={2}>Action</th>
                        
                      </tr>
                    </thead>
                    <tbody>
                      {
                          pass.map((item,id)=>{
                            return(
                                <tr key={id}>
                                     <td>{id}</td>
                                    <td>{item.name}</td>
                                    <td>{item.email}</td>
                                    <td>{item.number}</td>
                                    
                                      <td><button onClick={()=>handleDelete(id)}>Delete</button>
                                    </td>
                                    <td><button onClick={()=>handleEdit(id)}>Edit</button>
                                    </td>
                                </tr>
                            )
                          })
                      }
                    </tbody>
                  </table>
                  : 
                  <h3>not Record</h3>
                  }
                </div>
              </div>
            </div>
          </div>
          </div>
        <footer className="footer text-center">
          2021 © Ample Admin brought to you by
          <a href="https://www.wrappixel.com/">wrappixel.com</a>
        </footer>
       </div>
    

    </div>
  )
}

export default Table