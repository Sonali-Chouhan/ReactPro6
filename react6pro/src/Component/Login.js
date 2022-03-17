import React, { useState } from "react";
import { useForm } from "react-hook-form"; 
import { useNavigate} from "react-router-dom";          
const Login = () => {
       const[show,setshow]=useState(false);
       const[home,sethome]=useState(true)

       const {register,formState: { errors },handleSubmit} = useForm();
       let navigate =useNavigate();
       const handleLogin = (data) => {
         var item=localStorage.getItem("record")
         var object=JSON.parse(item)
         object.map((e)=>{
            if(e.email==data.email && (e.password==data.password)){
              navigate("/")
            }
            else{
                 console.log("empty")
            }
         })
      
        
        //  if(!email||!password){
        //    setshow(true)
        //    console.log("hhhhh");
        //   }
        //   else if(password!==pass||email!==Email)
        //   {
        //     setshow(true)
        //   }
        //   else{
        //     sethome(!home)
        //     setshow(false)
        //   }
        
        };
return (
   
   <div className="Login">
     
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
    
    
    </div>
  );
};
export default Login