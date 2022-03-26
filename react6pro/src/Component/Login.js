import React, { useState } from "react";
import { set, useForm } from "react-hook-form"; 
import { useDispatch, useSelector } from "react-redux"
import { loginData } from "../Redux/Action/action"; 
import { useNavigate} from "react-router-dom";            
const Login = () => {
     const  [get,setget]=useState('')
      const gettoken = useSelector((state) => state.reducer.home);
      // const getToken = useSelector((state)=>state.reducer.logintoken) 
       const {register,formState: { errors },handleSubmit} = useForm();
       const dispatch = useDispatch();
       const navigate=useNavigate();
       const handleLogin = (item) => {
        dispatch(loginData(item));
       
        if(!gettoken){
          navigate("/dashboard")
          // setget(get)
        }
         else
        {// setget(!get)
        console.log("record not found ")
      //  {navigate("/userlogin")}
      }
         
         
      };
return (
   
   <div className="Login">
    
    {/* {
       get?( */}
      <form onSubmit={handleSubmit(handleLogin)}>
        <h1 >Sing In</h1>
        <div>
          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter Your Email"
            {...register("email", { required: true })}
          />
          {errors.email && <p>This is required.</p>}
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            name="password"
            placeholder="Enter Your Password"
            {...register("password", { required: true })}
          />
          {errors.password && <p>This is required.</p>}
        </div>
        
        <button type="submit" name="login">Login</button>
      </form>
     
     {/* ):(
      <h3>Check Your Email And Password</h3>
       )
   } */}
    
    </div>
  );
};
export default Login
// var item=localStorage.getItem("record")
//          var object=JSON.parse(item)
//          console.log("object",object)
//          object.map((e)=>{
//             if(e.email===data.email && (e.password===data.password)){
//               sethome(home)
//               navigate("/dashboard")
             
             
              
//             }
//             else{
             
//                   console.log("empty")
//                  sethome(!home)
//             }
//          })