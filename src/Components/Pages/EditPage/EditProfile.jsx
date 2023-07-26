import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FetchEditProfile } from '../../Redux/ProfileSlice';
import { PostLogin } from '../../Redux/AuthSlice';
const EditProfile = () => {
  const name = localStorage.getItem("name") || sessionStorage.getItem("name");
  const email = localStorage.getItem("email") || sessionStorage.getItem("email");
  const phone = localStorage.getItem("phone") || sessionStorage.getItem("phone");
  const [profileData, setProfileData] = useState({ name: name, email: email, phone:phone});
  const [error, setError] = useState();
  const dispatch = useDispatch()

   //----------- Profile onChange Validation ------------
   const validation = () => {
    let error = {}
    if (!name) {
        error.name = "Name is Required"
    }
    if (!email) {
        error.email = "Email is Required"
    } else if (
        !/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)
    ) {
        error.email = "Enter a valid Email"
    }

    if (!phone) {
        error.phone = "Phone is Required"
    }
    return error
  }

  const formDetails = (e) => {
    const{name,value}=e.target
    setProfileData({ ...profileData, [name]: value });
   
    if (name === "name") {
      if (value.length === 0) {
        setError({ ...error, name: "*Name is Required" })
      } else {
        setError({ ...error, name: "" })
        setProfileData({...profileData,name:value})
      }
    }
    if (name === "email") {
      if (value.length === 0) {
        setError({ ...error, email: "*Email is Required" })
      } else {
        setError({ ...error, email: "" })
        setProfileData({...profileData,email:value})
      }
    }
    if (name === "phone") {
      if (value.length === 0) {
        setError({ ...error, phone: "*Phone is Required" })
      } else {
        setError({ ...error, phone: "" })
        setProfileData({...profileData,phone:value})
      }
    }
    if (name === "about_me") {
      if (value.length === 0) {
        setError({ ...error, about_me: "*About me is Required" })
      } else {
        setError({ ...error, about_me: "" })
        setProfileData({...profileData,about_me:value})
      }
    }
    if (name === "date_of_birth") {
      if (value.length === 0) {
        setError({ ...error, date_of_birth: "*DOB is Required" })
      } else {
        setError({ ...error, date_of_birth: "" })
        setProfileData({...profileData,date_of_birth:value})
      }
    }
    
 };
 
 const handleSubmit = (e) => {
   e.preventDefault()
   let ErrorList = validation()
   setError(ErrorList)
   dispatch(FetchEditProfile(profileData))
  };
  console.log(profileData);
  return (
      <>
      <div className="col-lg-9 col-md-12 col-sm-12 pr-0">
              <div className="dasbordRightlink">
                <h1>Edit Profile</h1>
                <div className="dasbordRightBody">							
                  <div className="editProformBx">
                    <form action="edit-profile-service-offered.html">
                      <div className="editProformir">
                        <div className="row">                                            
                          <div className="col-md-4 col-sm-12">
                            <div className="iputBx">
                              <label>Name</label>
                              <input onChange={(e) => formDetails(e)} name='name' type="text" value={profileData?.name}  placeholder="Enter here" />
        <span style={{ color: "red" }}>{error?.name}</span>


                            </div>
                          </div>
                          <div className="col-md-4 col-sm-12">
                            <div className="iputBx">
                              <label>Email</label>
                              <input onChange={(e) => formDetails(e)} name='email' type="text" value={profileData?.email} placeholder="Enter here" />
        <span style={{ color: "red" }}>{error?.email}</span>

                            </div>
                          </div>
                          <div className="col-md-4 col-sm-12">
                            <div className="iputBx">
                              <label>Phone</label>
                              <input onChange={(e) => formDetails(e)} name='phone' value={profileData?.phone} type="text"  placeholder="Enter here" />
        <span style={{ color: "red" }}>{error?.phone}</span>

                            </div>
                          </div>
                          <div className="col-sm-12">
                            <div className="iputBx">
                              <label>About me</label>
        <span style={{ color: "red" }}>{error?.about_me}</span>

                              <textarea onChange={(e) => formDetails(e)} name='about_me' placeholder="Enter your description here..." defaultValue={""} />
                            </div>
                          </div>
                          <div className="col-md-5 col-sm-6">
                            <div className="iputBx">
                              <label>Date of Birth</label>
                              <input onChange={(e) => formDetails(e)} name='date_of_birth' type="text" className="datepicker" placeholder="Enter here" />
        <span style={{ color: "red" }}>{error?.date_of_birth}</span>

                            </div>
                          </div>
                          <div className="col-md-4 col-sm-6">
                            <div className="genfil">
                              <span>Gender</span>
                              <ul>
                                <li>
                                  <input type="radio" id="radio1" name="gender" onChange={(e) => formDetails(e)} value="M"  />
                                  <label htmlFor="radio1">Male</label>
                                </li>
                                <li>
                                  <input type="radio" id="radio2" name="gender" onChange={(e) => formDetails(e)} value="F" />
                                  <label htmlFor="radio2">Female</label>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="col-sm-12">
                            <div className="form_group edt_checkk">
                              <label className="search_label" name="get_around_by" >Travel</label>
                              <ul className="c_ul">
                                <li>
                                  <label className="contect_container_checkBox">Bus
                                    <input type="checkbox" value="Bus"  onChange={(e) => formDetails(e)}  name="get_around_by" />
                                    <span className="contect_checkmark" />
                                  </label>
                                </li>
                                <li>
                                  <label className="contect_container_checkBox">Car
                                    <input type="checkbox" onChange={(e) => formDetails(e)} name="get_around_by" value="Car" />
                                    <span className="contect_checkmark" />
                                  </label>
                                </li>
                                <li>
                                  <label className="contect_container_checkBox">Track
                                    <input type="checkbox" onChange={(e) => formDetails(e)} name="get_around_by" value="Track" />
                                    <span className="contect_checkmark" />
                                  </label>
                                </li>
                                <li>
                                  <label className="contect_container_checkBox">Walk
                                    <input type="checkbox" onChange={(e) => formDetails(e)} name="get_around_by" value="Walk" />
                                    <span className="contect_checkmark" />
                                  </label>
                                </li>
                                <li>
                                  <label className="contect_container_checkBox">Scooter
                                    <input type="checkbox" onChange={(e) => formDetails(e)} name="get_around_by" value="Scooter" />
                                    <span className="contect_checkmark" />
                                  </label>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="col-sm-12">
                          <div className="form_fild_area_m frm_grp arro">
                              <label>Language : </label>
                              <select name='language_id' className="slectt" >
                                <option >Select Languge</option>
                                <option>Hindi</option>
                                <option>English</option>
                                <option>Bengali</option>
                                <option>Punjabi</option>
                                <option>Tamil</option>
                                <option>Telgu</option>
                              </select>
                            </div>
                          </div>                               
                          <div className="col-sm-12">
                            <div className="uplodimg">
                              <span>Profile Image</span>
                              <div className="uplodimgfil">
                                <input type="file" name="file-1[]" id="file-1" className="inputfile inputfile-1" data-multiple-caption="{count} files selected" multiple />
                                <label htmlFor="file-1">Click here to Upload Profile Image<img src="images/clickhe.png" alt="" /></label>
                              </div>
                              <div className="uplodimgfilimg">
                                <em><img src="images/uplodimg.jpg" alt="" /></em>
                              </div>	
                            </div>
                          </div>
                        </div>
                        <div className="locatioSec">
                          <h3>Location</h3>
                          <div className="row">
                            <div className="col-md-4 col-sm-6">
                              <div className="iputBx">
                                <label>Country</label>
                          <select onChange={(e) => formDetails(e)} name='country_id'>
                          <option >Select Country</option>
                            
                                  <option>1</option>
                                  <option>2</option>
                                </select>
                              </div>
                            </div>
                            <div className="col-md-4 col-sm-6">
                              <div className="iputBx">
                                <label>State</label>
                                <input type="text" name='state' onChange={(e) => formDetails(e)} placeholder="Enter here" />
                              </div>
                            </div>
                            <div className="col-md-4 col-sm-12">
                              <div className="iputBx">
                                <label>City</label>
                                <input type="text" name="city" onChange={(e) => formDetails(e)} placeholder="Enter your full address" />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="locatioSec">
                          <h3>Change password</h3>
                          <div className="row">
                            <div className="col-md-4 col-sm-6">
                              <div className="iputBx">
                                <label>Current password</label>
                                <input type="password" onChange={(e) => formDetails(e)} name='password' placeholder="Enter here" />
                              </div>
                            </div>
                            <div className="col-md-4 col-sm-6">
                              <div className="iputBx">
                                <label>New password</label>
                                <input type="password" onChange={(e) => formDetails(e)} name='new_password' placeholder="Enter here" />
                              </div>
                            </div>
                            <div className="col-md-4 col-sm-12">
                              <div className="iputBx">
                                <label>Confirm password</label>
                                <input type="password" onChange={(e) => formDetails(e)} name='confirm_password' placeholder="Enter here" />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="footdashSec">
                          <input type="submit" onClick={handleSubmit} defaultValue="Save all changes" className="subbtn" />
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
      </>
  )
}

export default EditProfile