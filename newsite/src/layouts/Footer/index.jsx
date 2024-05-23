import React from 'react'
import { TiSocialFacebook } from "react-icons/ti";
import { FaTwitter } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";
import { FaSkype } from "react-icons/fa6";
import { FaPinterest } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import "./index.scss"


const Footer = () => {
  return (
    <footer>
      <div className="container">
      <div className="footer-top">
        <div className="left">
        <ul>
          <li><a href="#">Blog</a></li>
          <li><a href="#">FAQs</a></li>
          <li><a href="#">Contact us</a></li>
        </ul>
      </div>
      <div className="right">
        <div className="icons">
          <div>
        <TiSocialFacebook /></div>
        <div><FaTwitter /></div>
        <div><IoLogoInstagram /></div>
        <div><FaSkype /></div>
        <div><FaPinterest /></div>
        </div>
      </div>
      </div>
      <div className="footer-bottom">
        <div>©2018 All Rights Reserverd. This template is made with <CiHeart style={{marginRight:"650px",}}/>by Colorlib</div>
      </div>
      </div>
    </footer>
  )
}

export default Footer