import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { PostLogin, RegLog } from '../Redux/AuthSlice';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const [formData, setFormData] = useState({});
  const { redirectReg } = useSelector((state) => state?.AuthData);

  const [error, setError] = useState();

  const navigate = useNavigate()
const dispatch = useDispatch()
  //----- Form Validtion
  const validation = () => {
    let error = {}

    if (!formData.email) {
        error.email = "Email is Required"
    } else if (
        !/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(formData.email)
    ) {
        error.email = "Enter a valid Email"
    }
    if (!formData.password) {
        error.password = "Password is Required"
    }

    return error
  }
  
  const formDetails = (e) => {
    const{name,value}=e.target
      
    setFormData({ params: { ...formData, [name]: value } });
   
    if (name === "email") {
      if (value.length === 0) {
        setError({ ...error, email: "*Email is Required" })
      } else {
        setError({ ...error, email: "" })
        setFormData({...formData,email:value})
      }
    }
    if (name === "password") {
      if (value.length === 0) {
          setError({ ...error, password: "*Password is Required" })
          setFormData({ ...formData, password: "" })
      } else {
          setError({ ...error, password: "" })
          setFormData({ ...formData, password: value })
      }
    }
    
  };

  // ----- Form handler ----
  const handleSubmit = async e => {
    e.preventDefault()
    let ErrorList = validation()
    setError(ErrorList)
    let data = {
        "email": formData.email,
        "password": formData.password,
    }
    dispatch(PostLogin({ params: data }))
  }

  //Redirect if get the token or not get the token 
  const redirectUser = () => {
    let token = localStorage.getItem("token")
    let isInLoginPage = window.location.pathname.toLowerCase() === "/login";

    if (token !== null && token !== undefined && token !== "") {
        // window.location.pathname = getPathname;
        isInLoginPage && navigate("/") ;
    }
}
useEffect(() => {
  redirectUser()
}, [redirectReg])
  
const logre=()=>{dispatch(RegLog())}
  console.log("Login Object",formData);
  return (
    <>
    
     <div>

  {/**/}
  <div className="search_main_section">
    <div className="container">
      <div className="row res_padd">
      </div>
    </div></div></div>

     <div className="main-center-div">
  <div className="top-border-div">
    <div className="login-from-area">
      <h2>Sign In</h2>
      <div>
        <input type="text" onChange={(e) => formDetails(e)} className="login-type" placeholder="Email or mobile number" name="email" />
        <span style={{ color: "red" }}>{error?.email}</span>

        <div className="clearfix" />
      </div>
      <div className="password-in">
        <input id="password-field" onChange={(e) => formDetails(e)} type="password" className="login-type" name="password" placeholder="password" />
        <span style={{ color: "red" }}>{error?.password}</span>

        <div className="clearfix" />
        <span toggle="#password-field" className="field-icon fa fa-fw fa-eye toggle-password" />
      </div>
      <div className="remmber-area">
        <label className="list_checkBox">Remember me
          <input type="checkbox" name="text" />
          <span className="list_checkmark" />
        </label>
        <a className="forgot-passwords" href="#">Forgot Password?</a>
      </div>
      {/*<p>By clicking Sign In or continue with Facebook or Google, you agree to all <a href=""> Terms of Service</a> and <a href="#"> Privacy Policy</a></p>*/}
      <button onClick={handleSubmit} type="submit" className="login-submit">Sign In</button>
    </div>
    <div className="or-area">
      <span>Or Continue with</span>
    </div>
    <div className="login-socials-area">
      <div className="socials-btns">
        <a href="#" className="common-btns facebook-btn">
          <img src="./images/login-facebook.png" alt="" /> Facebook
        </a>
        <a href="#" className="common-btns google-btn">
          <img src="./images/login-google.png" alt="" /> Google
        </a>
      </div>
    </div>
  </div>
  <div className="bottom-account-div">
    <p>Don't have an account? <Link  to={"/signup"}>Create Account</Link></p>
  </div>
</div>

          
      </>
  )
}

export default Login