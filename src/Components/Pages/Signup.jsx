import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { Logout, PostSignup } from "../Redux/AuthSlice";
import "react-toastify/dist/ReactToastify.css";

const Signup = () => {
  const { redirectReg } = useSelector((state) => state?.AuthData);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({});
  const [error, setError] = useState();
  const dispatch = useDispatch();
  const log = () => {
    dispatch(Logout())
    navigate("/login")
  }

  //----------- Sign Up onChange Validation ------------
  const validation = () => {
    let error = {};

    if (!formData.name) {
      error.name = "Name is Required";
    }

    if (!formData.email) {
      error.email = "Email is Required";
    } else if (
      !/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        formData.email
      )
    ) {
      error.email = "Enter a valid Email";
    }

    if (formData.phone.length < 8 || formData.phone.length > 10) { 
      error.phone = "Cannot exceed 10 or not less than 8"; 
    }
    if (formData.phone.length > 10) {
      error.phone = "Cannot exceed 10";
    }
    if (!formData.password) {
      error.password = "Password is Required";
    }
    if (!formData.password_confirmation) {
      error.password_confirmation = "Confirm Password is Required";
    }
    if (formData.password !== formData.password_confirmation) {
      error.password_confirmation = "Password is not same";
    }
    if (formData.password.length < 8) {
      error.password = "Password must be 8 charchater";
    }

    return error;
  };

  let name, value;
  const formDetails = (e) => {
    name = e.target.name;
    value = e.target.value;
    setFormData({ ...formData, [name]: value });

    if (name === "name") {
      if (value.length === 0) {
        setError({ ...error, name: "*Name is Required" });
      } else {
        setError({ ...error, name: "" });
        setFormData({ ...formData, name: value });
      }
    }
    if (name === "email") {
      if (value.length === 0) {
        setError({ ...error, email: "*Email is Required" });
      } else {
        setError({ ...error, email: "" });
        setFormData({ ...formData, email: value });
      }
    }
    if (name === "phone") {
      if (value.length === 0) {
        setError({ ...error, phone: "*Phone is Required" });
        setFormData({ ...formData, phone: "" }); // Fix this line
      } else {
        setError({ ...error, phone: "" });
        setFormData({ ...formData, phone: value });
      }
    }

    if (name === "password") {
      if (value.length === 0) {
        setError({ ...error, password: "*Password is Required" });
        setFormData({ ...formData, password: "" });
      } else {
        setError({ ...error, password: "" });
        setFormData({ ...formData, password: value });
      }
    }
    if (name === "password_confirmation") {
      if (value.length === 0) {
        setError({
          ...error,
          password_confirmation: "*Confirm Password is Required",
        });
        setFormData({ ...formData, password_confirmation: "" });
      } else {
        setError({ ...error, password_confirmation: "" });
        setFormData({ ...formData, password_confirmation: value });
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let ErrorList = validation();
    setError(validation());
    let formDatas = new FormData();
    if (Object.keys(ErrorList).length === 0) {
      formDatas.append("name", formDatas.name);
      formDatas.append("email", formDatas.email);
      formDatas.append("phone", formDatas.phone);
      formDatas.append("password", formDatas.password);
      formDatas.append(
        "password_confirmation",
        formDatas.password_confirmation
      );
      dispatch(PostSignup({ params: formData }));
    }
  };

  const redirectUser = () => {
    let name = localStorage.getItem("name");
    let isInLoginPage = window.location.pathname.toLowerCase() === "/signup";
    if (name !== null && name !== undefined && name !== "") {
      isInLoginPage && navigate("/login");
    }
  };
  useEffect(() => {
    redirectUser();
  }, [redirectReg]);

  console.log("Sign Up JSX POST format", formData);
  // useEffect(() => {
  // },[])
  return (
    <>
      <div className="main-center-div">
        <div className="top-border-div" style={{ marginTop: "180px" }}>
          <div className="login-from-area">
            <h2>Create Account</h2>
            <div>
              <input
                onChange={(e) => formDetails(e)}
                type="text"
                value={formData.name}
                className="login-type"
                placeholder="Full name"
                name="name"
              />
              <span style={{ color: "red" }}>{error?.name}</span>

              <div className="clearfix" />
            </div>
            <div>
              <input
                onChange={(e) => formDetails(e)}
                type="text"
                value={formData.email}
                className="login-type"
                placeholder="Email"
                name="email"
              />
              <span style={{ color: "red" }}>{error?.email}</span>

              <div className="clearfix" />
            </div>
            <div>
              <input
                onChange={(e) => formDetails(e)}
                type="tel"
                value={formData.phone}
                className="login-type"
                placeholder="Mobile number"
                name="phone"
              />
              <span style={{ color: "red" }}>{error?.phone}</span>

              <div className="clearfix" />
            </div>
            <div className="password-in">
              <input
                onChange={(e) => formDetails(e)}
                value={formData.password}
                id="password-field"
                type="password"
                className="login-type"
                name="password"
                placeholder="password"
              />
              <span style={{ color: "red" }}>{error?.password}</span>

              <div className="clearfix" />
              <span
                toggle="#password-field"
                className="field-icon fa fa-fw fa-eye toggle-password"
              />
            </div>
            <div className="password-in">
              <input
                onChange={(e) => formDetails(e)}
                value={formData.password_confirmation}
                id="password-field key"
                type="password"
                className="login-type"
                name="password_confirmation"
                placeholder="Confirm password"
              />
              <span style={{ color: "red" }}>
                {error?.password_confirmation}
              </span>

              <div className="clearfix" />
              <span
                toggle="#password-field"
                className="field-icon fa fa-fw fa-eye toggle-password"
              />
            </div>
            <p>
              By clicking Sign In or continue with Facebook or Google, you agree
              to all <Link to={""}> Terms of Service</Link> and{" "}
              <Link to={""}> Privacy Policy</Link>
            </p>
            <button
              onClick={handleSubmit}
              type="submit"
              className="login-submit"
            >
              Sign up
            </button>
          </div>
          <div className="or-area">
            <span>Or Continue with</span>
          </div>
          <div className="login-socials-area">
            <div className="socials-btns">
              <Link to={""} className="common-btns facebook-btn">
                <img src="./images/login-facebook.png" alt="img" /> Facebook
              </Link>
              <Link to={""} className="common-btns google-btn">
                <img src="./images/login-google.png" alt="img" /> Google
              </Link>
            </div>
          </div>
        </div>
        <div className="bottom-account-div">
          <p>
            Already have an account? <Link onClick={log} to={"/login"}>Login</Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Signup;
