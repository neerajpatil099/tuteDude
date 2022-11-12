import React from "react";
import navbrand from "../img/nav-brand.png";
import { FaUserCircle } from "react-icons/fa";
import { AiOutlineDown } from "react-icons/ai";
import './Section1.css'


const Section1 = () => {
  return (
    <>
      <div className="navbar">
        <div>
          <img className="nav-brand" src={navbrand} alt="" />
        </div>
        <div className="nav-heading">
          <li className="fade-head">My Assignment</li>
          <li className="fade-head">Chat with Mentor</li>
          <li className="user" >
            <FaUserCircle />  ProfileName  <AiOutlineDown/>
          </li>
        </div>
      </div>
      <div className="hero">
        <div className="refer">
          <p>UI/UX  &gt; Refer & Earn  &gt; Friends Refered </p>
        </div>
        <p className="go-back"><i className="fa-solid fa-arrow-left"></i> go back</p>
        <div className="third-sec">
          <div className="referal-code">
            <p>Your Referral Code</p>
            <h4 className="code">E D C H 5 4</h4>
          </div>
          <div className="wallet">
            <p>wallet Balance</p>
            <h4>₹ 500</h4>
          </div>
        </div>
          <h2 className="card-heading">Friends who enrolled <span>(3)</span></h2>
      </div>
          <div className="cards-component">
          <div className="cards">
            <div className="card card1 ">
                <h4 className="name">Dhiraj Saxena <span>14 sep, 2022</span> </h4>
                <p>Courses Enrolled (6)</p>
                <ul>
                    <li>UI/UX </li>
                <li>Photoshop</li>
                <li>Illustrator</li>
                <li>Python </li>
                <li>MERN</li>
                <li>Java</li>
                </ul>
                <h4 className="amount">Referral Amount <span>₹185</span> </h4>
            </div>
            <div className="card card1">
                <h4 className="name">Shubash Mishra<span>15 sep, 2022</span> </h4>
                <p>Courses Enrolled (23)</p>
                <ul>
                    <li>UI/UX </li>
                <li>Photoshop</li>
                <li>Illustrator</li>
                <li>Python </li>
                <li>MERN</li>
                <li>Java</li>
                <li>C++</li>
                </ul>
                <h4 className="amount">Referral Amount <span>₹485</span> </h4>
            </div>
            <div className="card ">
                <h4 className="name">Praful Kumar <span>14 sep, 2022</span> </h4>
                <p>Courses Enrolled (23)</p>
                <ul>
                    <li>UI/UX </li>
                <li>Photoshop</li>
                <li>Illustrator</li>
                <br />
                <li>Python </li>
                <li>MERN</li>
                <li>Java</li>
                </ul>
                <h4 className="amount">Referral Amount <span>₹485</span> </h4>
            </div>
          </div>
          </div>
          <p className="terms">Terms & Conditon</p>
    </>
  );
};

export default Section1;
