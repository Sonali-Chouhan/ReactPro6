import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Wrapper from "./Wrapper";
import { useSelector } from "react-redux";
import { Add_Context ,Updata_User} from "../Redux/Action/action";
import { useNavigate, useParams } from "react-router-dom";
const Profile = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const navigate=useNavigate();
  console.log("sona", id);
  const data = useSelector((state) => state.Profilereducer.user);
  const {
    register,
    formState: { errors },
    handleSubmit,
    setValue,
  } = useForm();
  const handleRegistration = (context) => {
    if (id) {
      dispatch(Updata_User(id, context));
    } else {
      dispatch(Add_Context(context));
    }
    navigate("/basic-table")
  };
  useEffect(() => {
    var book = data[id];
    if (book) {
      setValue("name", book.name);
      setValue("email", book.email);
      setValue("password", book.password);
      setValue("number", book.number);
    }
  }, [data]);
  const handleCancel=()=>{
    navigate("/profile")
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
      <Header />
      <Sidebar />
      <div className="page-wrapper">
        <div className="container-fluid">
          <Wrapper />
          <div className="row">
            <div className="col-lg-4 col-xlg-3 col-md-12">
              <div className="white-box">
                <div className="user-bg">
                  <img
                    width="100%"
                    alt="user"
                    src="../plugins/images/large/img1.jpg"
                  />
                  <div className="overlay-box">
                    <div className="user-content">
                      <a href="javascript:void(0)">
                        <img
                          src="../plugins/images/users/genu.jpg"
                          className="thumb-lg img-circle"
                          alt="img"
                        />
                      </a>
                      <h4 className="text-white mt-2">User Name</h4>
                      <h5 className="text-white mt-2">info@myadmin.com</h5>
                    </div>
                  </div>
                </div>
                <div className="user-btm-box mt-5 d-md-flex">
                  <div className="col-md-4 col-sm-4 text-center">
                    <h1>258</h1>
                  </div>
                  <div className="col-md-4 col-sm-4 text-center">
                    <h1>125</h1>
                  </div>
                  <div className="col-md-4 col-sm-4 text-center">
                    <h1>556</h1>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-8 col-xlg-9 col-md-12">
              <div className="card">
                <div className="card-body">
                  <form
                    className="form-horizontal form-material"
                    onSubmit={handleSubmit(handleRegistration)}
                  >
                    <div className="form-group mb-4">
                      <label className="col-md-12 p-0">Full Name</label>
                      <div className="col-md-12 border-bottom p-0">
                        <input
                          type="text"
                          placeholder="Enter Your Name"
                          {...register("name", { required: true })}
                        />
                        {errors.name && <p>This is required.</p>}
                      </div>
                    </div>
                    <div className="form-group mb-4">
                      <label for="example-email" className="col-md-12 p-0">
                        Email
                      </label>
                      <div className="col-md-12 border-bottom p-0">
                        <input
                          type="email"
                          placeholder="Enter Your Email"
                          name="email"
                          id="example-email"
                          {...register("email", { required: true })}
                        />
                        {errors.email && <p>This is required.</p>}
                      </div>
                    </div>
                    <div className="form-group mb-4">
                      <label className="col-md-12 p-0">Password</label>
                      <div className="col-md-12 border-bottom p-0">
                        <input
                          type="password"
                          name="password"
                          placeholder="Enter Your Password"
                          {...register("password", { required: true })}
                        />
                        {errors.password && <p>This is required.</p>}
                      </div>
                    </div>
                    <div className="form-group mb-4">
                      <label className="col-md-12 p-0">Phone No</label>
                      <div className="col-md-12 border-bottom p-0">
                        <input
                          type="text"
                          name="number"
                          placeholder="Enter Your Number"
                          {...register("number", { required: true })}
                        />
                        {errors.number && <p>This is required.</p>}
                      </div>
                    </div>
                    <div className="form-group mb-4">
                      <div className="col-sm-12">
                        {id ? (
                          <span>
                            <button type="submit">Save</button>{" "}
                            <button type="submit" onClick={handleCancel}>
                              Cancel
                            </button>
                          </span>
                        ) : (
                          <button type="submit" className="btn btn-success">
                            AddContext
                          </button>
                        )}
                      </div>
                    </div>
                  </form>
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
  );
};

export default Profile;
