import React from 'react'
import { NavLink } from 'react-router-dom'
import { IoSearch } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import "./index.scss"
import { Button } from '@chakra-ui/react';

const Header = () => {
  return (
    <header>
        <div className="header-top">
            <div className="container">
                <div className="left"><div>free shipping on all u.s orders over $50</div></div>
                <div className="right">
                    <ul>
                        <li>USD</li>
                        <li>English</li>
                        <li>My Account</li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="header-bottom">
            <div className="container">
            <div className="header-left">
                <h1>COLO<span>SHOP</span></h1>
            </div>
            <div className="header-middle">
                <ul>
                    <li><NavLink to={"/"}>Home</NavLink></li>
                    <li><NavLink to={"/shop"}>Shop</NavLink></li>
                    <li><NavLink to={"/promotion"}>Promotion</NavLink></li>
                    <li><NavLink to={"/blogs"}>Blogs</NavLink></li>
                    <li><NavLink to={"/contact"}>Contact</NavLink></li>
                </ul>
            </div>
            <div className="header-right">
                <div className="icons">
                    <div>
                <IoSearch /></div>
                <div> <FaUser /></div>
                <div><NavLink to={"/cart"}> <Button><FaShoppingCart /><sup>{}</sup></Button></NavLink></div>
                    </div>
                    </div>
                    </div>
        </div>
    </header>
)
}

export default Header