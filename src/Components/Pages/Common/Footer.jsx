import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
      <>
      {/*footer*/}
  <br/>
  <br/>
<footer className="fotter_area">
  <div className="container">
    <div className="row res_padd">
      <div className="footer_lft">
        <Link to={""}><img src="images/logo1.png" alt="img" /></Link>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris egestas sem tellus, ac consectetur mi gravida nunc sit amet ante vitae ante facilisis</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris egestas sem tellus, ac consectetur mi </p>
        <Link to={""} className="moree">Read more <img src="images/icon32.png" alt="img" /></Link>
      </div>
      <div className="footer_rght">
        <div className="foot_01">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to={""}>Home</Link></li>
            <li><Link to={""}>About Bazer Maynaguri</Link></li>
            <li><Link to={""}>Contact Us</Link></li>
            <li><Link to={""}>FAQ</Link></li>
          </ul>
        </div>
        <div className="foot_02">
          <ul>
            <li><Link to={""}>Enquiry Us</Link></li>
            <li><Link to={""}>B2B Information</Link></li>
          </ul>
        </div>
        <div className="foot_03 xxmt01">
          <h4>Contact Us</h4>
          <ul>
            <li>
              <span><img src="images/icon33.png" alt="img" /></span>
              <p>Sarkar shoss exclusive <br />
                Natun Bazar turminal complex, <br />
                PO : Maynaguri,<br />
                Dist : Jalpaiguri, Pin : 753224.</p></li>
            <li className="no1"><Link to={""}><span><img src="images/icon34.png" alt="img" /></span> <p>+91 7797813261</p></Link></li>
            <li className="no2"><Link to={""}><span><img src="images/icon35.png" alt="img" /></span> <p>dhrubadjs.mng@gmail.com</p></Link></li>
          </ul>
        </div>
        <div className="popular_catt">
          <h5>Popular Categories</h5>
          <ul>
            <li><Link to={""}>Vegetable</Link></li>
            <li><Link to={""}>Fruits</Link></li>
            <li><Link to={""}>Dairy products</Link></li>
            <li><Link to={""}>Organic Products</Link></li>
            <li><Link to={""}>Grocery Items</Link></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <div className="copy_fot">
    <div className="container">
      <div className="row res_padd">
        <p> © Copyright 2020 bazermaynaguri.com  |   All Rights Reserved.</p>
        <ul>
          <li>Follow us on :</li>
          <li><Link to={""}><img src="images/icon23.png" alt="img" /></Link></li>
          <li><Link to={""}><img src="images/icon25.png" alt="img" /></Link></li>
        </ul>
      </div>
    </div>
  </div>
</footer>
{/*wrapper end*/}

      </>
  )
}

export default Footer