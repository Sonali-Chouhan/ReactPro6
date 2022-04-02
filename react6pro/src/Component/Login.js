import React, {useEffect } from "react";
import { useForm } from "react-hook-form"; 
import { useDispatch, useSelector } from "react-redux"
import { loginData } from "../Redux/Action/action"; 
import { useNavigate} from "react-router-dom";            
const Login = () => {
       const gettoken = useSelector((state) => state.reducer. Logintoken);
       const cake = useSelector((state) => state.reducer.error);
       console.log("cake",cake)
       const {register,formState: { errors },handleSubmit} = useForm();
       const dispatch = useDispatch();
       const navigate=useNavigate();
       const handleLogin = (item) => {
        dispatch(loginData(item));
       };
     useEffect(() => {
       if(gettoken){
        navigate("/dashboard")
        }
        else
        {
        navigate ("/userlogin")
        }
      
       
     }, [gettoken])
     
return (
   
   <div className="Login">
     {
       !cake ?
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
     :
     <div>
      <h3 className="heading">Enter Valid Email And Password</h3>
     </div>
     }
   
     </div>
  );
};
export default Login
