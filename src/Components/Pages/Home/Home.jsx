import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FetchHome } from "../../Redux/HomeSlice";
import { Link } from "react-router-dom";
import LatestProduct from "./LatestProduct";
import { axiosInstance } from "../../../Api/AxiosInstance";

const Home = () => {
  const { commondata, status } = useSelector((state) => state?.homeData);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(FetchHome());
  }, []);
  console.log("Satatus", status, "commondata", commondata?.result?.categories);
  return (
    <>
      
      <div>
        {/*banner*/}
        <section className="banner">
          <div id="demo" className="carousel slide" data-ride="carousel">
            {/* Indicators */}
            <div className="container">
              <div className="row res_padd">
                <ul className="carousel-indicators">
                  <li
                    data-target="#demo"
                    data-slide-to={0}
                    className="active"
                  />
                  <li data-target="#demo" data-slide-to={1} />
                  <li data-target="#demo" data-slide-to={2} />
                </ul>
              </div>
            </div>
            {/* The slideshow */}
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src="images/banner1.jpg" alt="" />
                <div className="container">
                  <div className="row res_padd">
                    <div className="sliderr_ttxt">
                      <div className="carousel-caption">
                        <h3>Quality Assurance</h3>
                        <p>Free weighting Machine for our members.</p>
                        <a href="#">Call For Enquiry</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <img src="images/banner2.jpg" alt="" />
                <div className="container">
                  <div className="row res_padd">
                    <div className="sliderr_ttxt">
                      <div className="carousel-caption">
                        <h3>Simply Dummy Caption Here</h3>
                        <p>Free weighting Machine for our members.</p>
                        <a href="#">Call For Enquiry</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <img src="images/banner3.jpg" alt="" />
                <div className="container">
                  <div className="row res_padd">
                    <div className="sliderr_ttxt">
                      <div className="carousel-caption">
                        <h3>Quality Assurance</h3>
                        <p>Free weighting Machine for our members.</p>
                        <a href="#">Call For Enquiry</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*ABOUT*/}
        <div className="about_us_area">
          <div className="container">
            <div className="row res_padd">
              <h1>Welcom To BazarMoynaguri</h1>
              <h2>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse vitae pharetra erat. Fusce quis suscipit leo. Nulla
                scelerisque erat in nam at efficitur tortor, vitae porttitor mi.
                Morbi sit amet velit nec leo imperdiet porttitor mi. Morbi sit
                amet velit nec leo imperdiet.
              </h2>
              <img src="images/icon05.jpg" alt="" />
              <div className="linee" />
              <div className="aboput_boxx line_left">
                <img src="images/icon12.png" alt="" />
                <h3>Best Quality Product</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  eiusmod tempor incididunt ut labore et dolore magna.
                </p>
              </div>
              <div className="aboput_boxx">
                <img src="images/icon11.png" alt="" />
                <h3>Free Shipping</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  eiusmod tempor incididunt ut labore et dolore magna.
                </p>
              </div>
              <div className="aboput_boxx border_none line_right">
                <img src="images/icon10.png" alt="" />
                <h3>On Time Delivery</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  eiusmod tempor incididunt ut labore et dolore magna.
                </p>
              </div>
              <a href="#">Quality product at your door step</a>
            </div>
          </div>
        </div>
        {/*ABOUT*/}
        {/*slider*/}
        <div className="slider_one_area">
          <div className="container">
            <div className="row res_padd">
              <div
                id="offer"
                className="owl-carousel testimonial-carousel-main"
              >
                <div className="item">
                  <div className="boxx_sg">
                    <img src="images/icon06.JPG" alt="" />
                    <div className="containtt_one">
                      <h1>Simply dummy Offer text here</h1>
                      <h2>100% Organic Vegetable</h2>
                      <span>
                        <img src="images/cruve.png" alt="" />
                        <a href="#">
                          CALL FOR Enquiry <img src="images/icon07.png" alt="" />
                        </a>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="boxx_sg">
                    <img src="images/icon08.jpg" alt="" />
                    <div className="containtt_two">
                      <span>
                        <h1>Simply dummy Offer text here</h1>
                        <h2>100% Organic Vegetable</h2>
                        <a href="#">Call For Enquiry</a>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="boxx_sg">
                    <img src="images/icon33.jpg" alt="" />
                    <div className="containtt_one">
                      <h1>Simply dummy Offer text here</h1>
                      <h2>100% Organic Vegetable</h2>
                      <span>
                        <img src="images/cruve.png" alt="" />
                        <a href="#">
                          CALL FOR Enquiry <img src="images/icon07.png" alt="" />
                        </a>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="boxx_sg">
                    <img src="images/icon34.jpg" alt="" />
                    <div className="containtt_two">
                      <span>
                        <h1>Simply dummy Offer text here</h1>
                        <h2>100% Organic Vegetable</h2>
                        <a href="#">Call For Enquiry</a>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="boxx_sg">
                    <img src="images/icon35.jpg" alt="" />
                    <div className="containtt_one">
                      <h1>Simply dummy Offer text here</h1>
                      <h2>100% Organic Vegetable</h2>
                      <span>
                        <img src="images/cruve.png" alt="" />
                        <a href="#">
                          CALL FOR Enquiry <img src="images/icon07.png" alt="" />
                        </a>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="boxx_sg">
                    <img src="images/icon36.jpg" alt="" />
                    <div className="containtt_two">
                      <span>
                        <h1>Simply dummy Offer text here</h1>
                        <h2>100% Organic Vegetable</h2>
                        <a href="#">Call For Enquiry</a>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*slider END*/}
        {/*Our Products*/}
        <div className="our_products">
          <div className="container">
            <div className="row res_padd2">
              <h1>Our Products</h1>
              <h3>Shoping made easy or some caption text show here</h3>
              <img src="images/icon05.jpg" alt="" />
              <div className="linee" />
              {commondata?.result?.categories
                ?.slice(0, 8)
                .map((item, index) => {
                  return (
                    <>
                      <div key={index + 1} className="product_box">
                        <div className="pro_image">
                          <Link to={""} key={index + 1}>
                            <img
                              src={`images/search0${index + 1}.jpg`}
                              alt=""
                            />
                          </Link>
                          <span className="enq01">
                            <Link to={""}>Call For Enquiry</Link>
                          </span>
                        </div>
                        <div className="pro_desc">
                          <Link to={""}>{item?.name}</Link>
                          <p>Rs.40.00 </p>
                          <span className="pro_line">
                            <strong />
                          </span>
                        </div>
                      </div>
                    </>
                  );
                })}
            </div>
          </div>
        </div>
        {/*Our Products END*/}
        <div className="small_banner">
          <div className="container">
            <div className="row rellati res_padd">
              <h1>If you have any quary please fell free to contact us</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <Link to={""}>Contact Us</Link>
            </div>
          </div>
        </div>
        {/* <LatestProduct/> */}
      </div>
    </>
  );
};

export default Home;
