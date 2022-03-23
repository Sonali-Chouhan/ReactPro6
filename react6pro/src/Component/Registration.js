import React,{useEffect} from "react";
import { useForm } from "react-hook-form";     
import { addData } from "../Redux/Action/action"; 
import { useDispatch,useSelector} from "react-redux";
import { toast } from "react-toastify";  
import { useNavigate} from "react-router-dom";      

const Registration = () => {
    const {register,formState: { errors },handleSubmit} = useForm();
    const dispatch = useDispatch();
    const navigate=useNavigate();
    const Record = useSelector((state) => state.reducer.List);
    const handleRegistration = (data) => {
      
      toast.success("Successfully Registered", {
        icon: "🚀"
      });
      dispatch(addData(data));
      navigate("/userlogin")
      
   };
   useEffect(() => {
    if(Record){
        var item=Record
        localStorage.setItem("record", JSON.stringify(item));
      }

    },[Record])

  return (
    <div className="Registration">
      <form onSubmit={handleSubmit(handleRegistration)}>
      <div>
          <label>Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter Your Name"
            {...register("name", { required: true })}
          />
          {errors.name && <p>This is required.</p>}
        </div>
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
        <div>
          <label>Contact</label>
          <input
            type="number"
            name="number"
            placeholder="Enter Your Number"
            {...register("number", { required: true })}
          />
          {errors.number && <p>This is required.</p>}
        </div>
        <button type="submit" name="Registration">Registration</button>
      </form>
    </div>
  );
};

export default Registration;
