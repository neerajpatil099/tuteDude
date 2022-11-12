import React from 'react'
import navbrand from "../img/nav-brand.png";
import { FaUserCircle } from "react-icons/fa";
import { AiOutlineDown } from "react-icons/ai";
import './Section2.css'

const Section2 = () => {
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
        <div className="third-section df">
            <div className="referral-section dfc">
                <div className="referral-info df">
                    <div>
                        <p>Referral Earning</p>
                        <h3>₹ 2,500</h3>
                    </div>
                    <div>
                        <p>Total Referrals</p>
                        <h3>7</h3>
                    </div>
                    <div>
                        <p>Wallet Balance</p>
                        <h3>₹ 500</h3>
                    </div>
                </div>
                <p className='withdraw-btn'>withdraw Balance</p>
            </div>
            <div className="referral-code-section">
                <h3>Your Referral Code </h3>
                <p>EDCH54</p>
            </div>
        </div>
        <h3 className='suggestion-heading'>How does it work ?</h3>
        <div className="suggestion-section df">
            <div className="suggestion df">
              <div className="icon-bg">
                <i className="fa-solid fa-2x   fa-users" id='icons'></i>
              </div>
                <p> <span>Invite your Friends</span> <br/>
                Share the link tutedude.com with
                your friends
                </p>
            </div>
            <div className="suggestion df">
            <div className="icon-bg">
            <i className="fa-solid fa-2x fa-tag" id='icons'></i>
            </div>
                <p> <span>Friend purchases any course</span> <br/>
                Using your REFERRAL CODE in the payments page
                </p>
            </div>
            <div className="suggestion df">
            <div className="icon-bg">
            <i className="fa-solid fa-2x fa-indian-rupee-sign" id='icons'></i>
            </div>
                <p> <span>You get ₹ 200 as referral money</span> <br/>
                On total purchase the friend makes, into your wallet
                </p>
            </div>
            <div className="suggestion df">
            <div className="icon-bg">
            <i className="fa-solid fa-2x  fa-percent" id='icons'></i>
            </div>
                <p> <span>Your Friend gets ₹ 200 Off </span> <br/>
                On his overall fee on successful purchase using your referral code 
                </p>
            </div>
            <div className="suggestion df">
            <div className="icon-bg">
            <i className="fa-solid  fa-2x fa-wallet" id='icons'></i>
            </div>
                <p> <span>Transfer money from wallet</span> <br/>
                When the wallet balance reaches
               ₹200 or more, you can withdraw it
                </p>
            </div>
        </div>
        <p className='foot1'>Friends Who Enrolled</p>
        <p className='foot1'>Terms & Conditions</p>
      </div>
    </>
  )
}

export default Section2