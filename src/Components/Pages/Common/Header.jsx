import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link,useNavigate } from 'react-router-dom'
import { Logout } from '../../Redux/AuthSlice';

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const { Logouttoggle } = useSelector((state) => state?.AuthData);
  const name = localStorage.getItem("name");
  
  const log = () => {
    dispatch(Logout())
    navigate("/login")
  }
  return (
    <>
    <header>
    <div className="two_in_one">
      <div className="top_head">
        <div className="container">
          <div className="row ">
            <div className="head_contact">
              <ul>
                <li><img src="images/icon04.png" alt="img" /> Sarkar shoss exclusive Natun Bazar turminal complex, PO : Maynaguri, Dist : Jalpaiguri, Pin : 753224.</li>
              </ul>
            </div>
            <div className="head_log_area ml-auto">
              <ul>
                <li><Link to={""}><img src="images/icon03.png" alt="img" />dhrubadjs.mng@gmail.com</Link></li>
                <li><a href="tel:7797813261"><img src="images/icon02.jpg" alt="img" /> +91 7797813261</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="middle_head">
        <div className="container">
          <div className="row res_padd">
            <span className="logo"><a href="index.html"><img src="images/logo.png" alt="img" /></a></span>
            <div className="right_search ml-auto">
              <div className="left_search">
                <form>
                  <input type="text"  className="search_type mobill010" placeholder="Search for Products" />
                  <button type="submit" value className="search_submit" />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="for_all_cat_sub_cat">
        <div className="menu_area">
          <div className="container">
            <div className="row res_padd relet">
              {/*CATEGORY MENU*/}                
              <div className="adjust_rm01">
                <div className="off_canvas_animate slide off_canvas_container left_menu_1">
                  <div className="off_canvas_animate slide off_canvas_top_menu">
                    <div className="off_canvas_toggles">
                      <span className="nav_prev_btn"><i className="icon-left" />Back</span>
                      <span className="nav_close_btn"><i className="icon-cancel" /></span>
                    </div>
                  </div>
                </div>
                <div className="content_animate slide content">
                  <div className="content_animate slide">
                    <span className="nav_toggle"><i className="icon-menu" /></span>
                    <nav className="dropdown">
                      <ul>
                        {/* <li><a href="javascript:void(0);" className="adjust_rm02">All Categories <i className="fa fa-caret-down" aria-hidden="true" /></a>
                          <ul>                            
                            <li>
                              <a href="javascript:void(0);">Vegetable <i className="fa fa-angle-right" aria-hidden="true" /></a>
                              <ul>
                                <li><a href="javascript:void(0);">Sub Category One</a></li>
                                <li><a href="javascript:void(0);">Abc Sub Category Here</a></li>
                                <li><a href="javascript:void(0);">Sub Category three</a></li>
                                <li><a href="javascript:void(0);">Dummy Sub Category name</a></li>
                                <li><a href="javascript:void(0);">Sub Category One</a></li>
                                <li><a href="javascript:void(0);">Abc Sub Category Here</a></li>
                                <li><a href="javascript:void(0);">Sub Category three</a></li>
                                <li><a href="javascript:void(0);">Dummy Sub Category name</a></li>
                                <li><a href="javascript:void(0);">Sub Category three</a></li>
                                <li><a href="javascript:void(0);">Dummy Sub Category name</a></li>
                              </ul>
                            </li>
                            <li>
                              <a href="javascript:void(0);">Fruits<i className="fa fa-angle-right" aria-hidden="true" /></a>
                              <ul>
                                <li><a href="javascript:void(0);">Sub Category One</a></li>
                                <li><a href="javascript:void(0);">Sub Category three</a></li>
                                <li><a href="javascript:void(0);">Dummy Sub Category name</a></li>
                                <li><a href="javascript:void(0);">Sub Category One</a></li>
                                <li><a href="javascript:void(0);">Abc Sub Category Here</a></li>
                                <li><a href="javascript:void(0);">Sub Category three</a></li>
                                <li><a href="javascript:void(0);">Dummy Sub Category name</a></li>
                                <li><a href="javascript:void(0);">Sub Category One</a></li>
                                <li><a href="javascript:void(0);">Abc Sub Category Here</a></li>
                                <li><a href="javascript:void(0);">Sub Category three</a></li>
                                <li><a href="javascript:void(0);">Dummy Sub Category name</a></li>
                              </ul>
                            </li>
                            <li>
                              <a href="javascript:void(0);">Dairy products <i className="fa fa-angle-right" aria-hidden="true" /></a>
                              <ul>
                                <li><a href="javascript:void(0);">Sub Category One</a></li>
                                <li><a href="javascript:void(0);">Abc Sub Category Here</a></li>
                                <li><a href="javascript:void(0);">Sub Category three</a></li>
                                <li><a href="javascript:void(0);">Dummy Sub Category name</a></li>
                                <li><a href="javascript:void(0);">Sub Category One</a></li>
                                <li><a href="javascript:void(0);">Abc Sub Category Here</a></li>
                                <li><a href="javascript:void(0);">Sub Category three</a></li>
                                <li><a href="javascript:void(0);">Dummy Sub Category name</a></li>
                                <li><a href="javascript:void(0);">Sub Category One</a></li>
                                <li><a href="javascript:void(0);">Abc Sub Category Here</a></li>
                                <li><a href="javascript:void(0);">Sub Category three</a></li>
                                <li><a href="javascript:void(0);">Dummy Sub Category name</a></li>
                              </ul>
                            </li>
                            <li>
                              <a href="javascript:void(0);">Organic Products <i className="fa fa-angle-right" aria-hidden="true" /></a>
                              <ul>
                                <li><a href="javascript:void(0);">Sub Category One</a></li>
                                <li><a href="javascript:void(0);">Dummy Sub Category name</a></li>
                                <li><a href="javascript:void(0);">Sub Category One</a></li>
                                <li><a href="javascript:void(0);">Abc Sub Category Here</a></li>
                                <li><a href="javascript:void(0);">Sub Category three</a></li>
                                <li><a href="javascript:void(0);">Dummy Sub Category name</a></li>
                                <li><a href="javascript:void(0);">Sub Category One</a></li>
                                <li><a href="javascript:void(0);">Abc Sub Category Here</a></li>
                                <li><a href="javascript:void(0);">Sub Category three</a></li>
                                <li><a href="javascript:void(0);">Dummy Sub Category name</a></li>
                              </ul>
                            </li>
                            <li>
                              <a href="javascript:void(0);">Grocery Items <i className="fa fa-angle-right" aria-hidden="true" /></a>
                              <ul>
                                <li><a href="javascript:void(0);">Sub Category One</a></li>
                                <li><a href="javascript:void(0);">Abc Sub Category Here</a></li>
                                <li><a href="javascript:void(0);">Sub Category three</a></li>
                                <li><a href="javascript:void(0);">Dummy Sub Category name</a></li>
                                <li><a href="javascript:void(0);">Sub Category One</a></li>
                                <li><a href="javascript:void(0);">Abc Sub Category Here</a></li>
                                <li><a href="javascript:void(0);">Sub Category three</a></li>
                                <li><a href="javascript:void(0);">Dummy Sub Category name</a></li>
                                <li><a href="javascript:void(0);">Sub Category One</a></li>
                                <li><a href="javascript:void(0);">Abc Sub Category Here</a></li>
                                <li><a href="javascript:void(0);">Sub Category three</a></li>
                              </ul>
                            </li>
                          </ul>
                        </li> */}
                      </ul>
                    </nav>
                  </div>
                </div>
              </div>
              {/*CATEGORY MENU END*/} 
              <nav className="navbar navbar-expand-md navbar-light">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav mr-auto">
                    {/*<li class="nav-item dropdown ">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
               Fruits
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <a class="dropdown-item" href="fruits.html">Foodgrains</a>
                <a class="dropdown-item" href="vagetables.html"> Oil</a>
                <a class="dropdown-item" href="leaves.html">Masala</a>
              </ul>
            </li>*/}
                    {/* <li className="nav-item">
                      <a className="nav-link" href="#">About Bazar Maynaguri</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">B2B Information</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">FAQ</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">Contact Us</a>
                    </li> */}
                    <li className="nav-item">
                      <Link className="nav-link" to={"/"}>Home</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to={"/editprofile"}>Profile</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to={"/search"}>Search</Link>
                        </li>
                        {Logouttoggle ?
                          <>
                            <li className="nav-item">
                              <Link className="nav-link" style={{color:"Yellow"}} to={"/login"}>Hi ! {name}</Link>
                            </li>
                            <li className="nav-item">
                              <Link className="nav-link" onClick={log} >Logout</Link>
                            </li>
                          </> :
                          <>
                            <li className="nav-item">
                      <Link className="nav-link" to={"/login"}>Login</Link>
                    </li>
                            <li className="nav-item">
                      <Link className="nav-link" to={"/signup"}>Signup</Link>
                    </li>
                          </>}                    
                  </ul>
                </div>
              </nav>	
            </div>
          </div> 
        </div>
      </div>
    </div>
  </header> 
  
    </>
  )
}

export default Header