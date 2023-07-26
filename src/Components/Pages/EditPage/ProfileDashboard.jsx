import React from 'react'
import EditProfile from './EditProfile'
import { useDispatch, useSelector } from 'react-redux';
import { Logout, RegLog } from '../../Redux/AuthSlice';
import { Link, useNavigate } from 'react-router-dom';

const ProfileDasboard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const { Logouttoggle } = useSelector((state) => state?.AuthData);
  
  const log = () => {
    dispatch(Logout())
    navigate("/login")
  }
  return (
      <>
     <div>
  <div className="wrapper">
   
    <section className="mainDasbordsec">
      <div className="container">
        <div className="mainDasbordInr">
          <div className="row">
            <div className="col-lg-3 col-md-12 col-sm-12 pl-0">
              <div className="dasbordLeftsec">
                <a href="#url" className="showmeu" data-toggle="collapse" data-target="#demo"><i className="fa fa-bars" />Show Menus</a>
                <div className="dasbordLeft ">						
                  <div className="profibx">
                    <em><img src="images/dachprofi.jpg" alt="" /></em>
                    <strong>Rabin Mnna</strong>
                    <ul>
                      <li><a href="#"><img src="images/star1.png" alt="" /></a></li>
                      <li><a href="#"><img src="images/star1.png" alt="" /></a></li>
                      <li><a href="#"><img src="images/star1.png" alt="" /></a></li>
                      <li><a href="#"><img src="images/star1.png" alt="" /></a></li>
                      <li><a href="#"><img src="images/star2.png" alt="" /></a></li>
                      <li><span>(410)</span></li>
                    </ul>
                  </div>
                  <div className="dasbordLeftlink">
                    <ul>
                      <li><a href="#">
                          <span>
                            <img src="images/dashico1.png" alt="" className="dashico1" />
                          </span>
                          Dashboard
                        </a></li>
                      <li><a href="#" className="activ">
                          <span>
                            <img src="images/dashico2.png" alt="" className="dashico1" />
                          </span>
                          Edit Profile
                        </a></li>
                      <li><a href="#">
                          <span>
                            <img src="images/dashico3.png" alt="" className="dashico1" />
                          </span>
                          My Order
                        </a></li>
                      <li><a href="#">
                          <span>
                            <img src="images/dashico10.png" alt="" className="dashico1" />
                          </span>
                          My Favorite
                        </a></li>
                      <li><a href="#">
                          <span>
                            <img src="images/dashico4.png" alt="" className="dashico1" />
                          </span>
                          Reviews
                        </a></li>
                      <li><a href="#">
                          <span>
                            <img src="images/dashico7.png" alt="" className="dashico1" />
                          </span>
                          Messages<em>10</em>
                        </a></li>
                      <li><a href="#">
                          <span>
                            <img src="images/dashico8.png" alt="" className="dashico1" />
                          </span>
                          Notifications
                          <em>14</em>
                        </a></li>
                      <li onClick={log}><Link to={""}>
                          <span>
                            <img src="images/dashico9.png" alt="" className="dashico1" />
                          </span>
                          Log Out
                        </Link></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
<EditProfile/>
          </div>
        </div>
      </div>
    </section> 
  </div>
      </div>
      </>
  )
}

export default ProfileDasboard