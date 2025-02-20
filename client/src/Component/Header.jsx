import React, { useContext, useEffect, useState } from "react";
// import { Link } from "react-router-dom";
import { IoReorderThreeOutline } from "react-icons/io5";
import logo from '../Images/logo.jpg'
// import {  } from '@mui/material'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import Button from '@mui/material/Button';
import { FaAngleDown } from "react-icons/fa6";
import { IoIosSearch } from "react-icons/io";
import { FaRegUser } from "react-icons/fa";
import { IoBagHandleOutline } from "react-icons/io5";
import { IoMenuOutline } from "react-icons/io5";
import Dialog from '@mui/material/Dialog';
import { IoCloseOutline } from "react-icons/io5";
import Slide from '@mui/material/Slide';
import { MyContext } from "../App";
import Body from "./Body";
import { Link } from "react-router-dom";


const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

function Header() {

    const context = useContext(MyContext)
    const [menuOpen, setMenuOpen] = useState(false);
    const [isOpenModal, setisOpenModal] = useState(false)
    const [selectedTab, setselectedTab] = useState(null)
    const selectCountry = (index) => {
        setselectedTab(index)
        setisOpenModal(false)
    }

    return (
        <>
            <div className="headerwrapper">
              
                <div className="top-strip bg-blue">
                    <div className="container">
                        <p className="mb-0 mt-0 text-center">
                            Due to the <b>COVID-19</b> epidemic, orders may be processed with a slight delay
                        </p>
                    </div>
                </div>

             
                <div className="header">
                    <div className="container">
                        <div className="row align-items-center">
                      
                            <div className="col-6 col-md-2 d-flex align-items-center">
                                <Link to="/">
                                    <img src={logo} alt="Logo" className="img-fluid" />
                                </Link>
                            </div>

                            
                            <div className="col-6 col-md-10 d-flex align-items-center justify-content-end" >
                         
                                {context.countryList.length !== 0 &&
                                    <Button className="country d-none d-md-flex align-items-center" style={{ border: "1px solid #ccc" }} onClick={() => setisOpenModal(true)}>
                                        <div className="info" >
                                            <span style={{ fontSize: "12px", color: "black" }}>Your Location</span>
                                            <span style={{ fontSize: "14px", fontWeight: 700 }}>India</span>
                                        </div>
                                        <FaAngleDown className="ml-auto" />
                                    </Button>}

                                <Dialog open={isOpenModal} TransitionComponent={Transition} onClose={() => setisOpenModal(false)} className="location">
                                    <h5 className="mb-0">Choose your Delivery Location</h5>
                                    <p>Enter your address and we will specify the offer for your area.</p>
                                    <Button className="close" onClick={() => setisOpenModal(false)}><IoCloseOutline /></Button >
                                    <div
                                        className="search  w-100"
                                        style={{
                                            width: "50%",
                                            position: "relative",
                                            margin: "0 0px",
                                        }}
                                    >
                                        <input
                                            type="text"
                                            placeholder="Search Your Area..."
                                            style={{
                                                width: "100%",
                                                height: "40px",
                                                borderRadius: "5px",
                                                border: "1px solid #ccc",
                                                padding: "0 20px",
                                                outline: "none",
                                            }}
                                        />
                                        <Button
                                            sx={{
                                                position: "absolute",
                                                top: "5px",
                                                right: "10px",
                                                minWidth: "30px",
                                                height: "30px",
                                                borderRadius: "50%",
                                                color: "black",
                                                fontSize: "20px",
                                            }}
                                        >
                                            <IoIosSearch />
                                        </Button>

                                    </div>
                                    <ul className="countarylist mt-3">
                                        {
                                            context.countryList?.length !== 0 && context.countryList?.map((item, index) => {
                                                return (
                                                    <li key={index}><Button onClick={() => selectCountry(index)} className={`${selectedTab === index ? 'active' : ''}`}>{item.country}</Button></li>
                                                )
                                            })
                                        }

                                    </ul>
                                </Dialog>


                              
                                <div
                                    className="search d-none d-md-flex"
                                    style={{
                                        width: "60%",
                                        position: "relative",
                                        margin: "0 20px",
                                    }}
                                >
                                    <input
                                        type="text"
                                        placeholder="Search for products..."
                                        style={{
                                            width: "100%",
                                            height: "40px",
                                            borderRadius: "5px",
                                            border: "1px solid #ccc",
                                            padding: "0 20px",
                                            outline: "none",
                                        }}
                                    />
                                    <Button
                                        sx={{
                                            position: "absolute",
                                            top: "5px",
                                            right: "10px",
                                            minWidth: "30px",
                                            height: "30px",
                                            borderRadius: "50%",
                                            color: "black",
                                            fontSize: "20px",
                                        }}
                                    >
                                        <IoIosSearch />
                                    </Button>
                                </div>

                                <div className="d-flex align-items-center justify-content-end">
                         
                                    <Button
                                        className="mr-3"
                                        sx={{
                                            width: { xs: "32px", md: "40px" }, 
                                            height: { xs: "32px", md: "40px" },
                                            borderRadius: "20%",
                                            border: "1px solid black",
                                            color: "black",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                        }}
                                        aria-label="User Profile"
                                    >
                                        <Link to="/signin" className="cart-icon" ><FaRegUser style={{ fontSize: "15px" }} /></Link>
                                    </Button>

              
                                    <div className="cart d-flex align-items-center">
                                        <span
                                            className="d-none d-md-block"
                                            style={{
                                                fontSize: "15px",
                                                fontWeight: 700,
                                                marginRight: "10px",
                                            }}
                                        >
                                            $3.33
                                        </span>
                                        <Button
                                            sx={{
                                                width: { xs: "35px", md: "40px" },
                                                height: { xs: "35px", md: "40px" },
                                                borderRadius: "20%",
                                                border: "1px solid #ea2b0f",
                                                color: "#ea2b0f",
                                                backgroundColor: "#fff1ee",
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                            }}
                                            aria-label="Shopping Cart"
                                        >
                                            <Link to="/cart" className="cart-icon" ><IoBagHandleOutline style={{ fontSize: "18px" }} /></Link>
                                        </Button>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

 
                <nav className="bg-white">
                    <div className="container">
                        <div className="row align-items-center">
                  
                            <div className="col-12 col-md-3 mb-2 mb-md-0">
                                <Button
                                    sx={{
                                        background: "#2bbef9",
                                        padding: "10px 15px",
                                        color: "#fff",
                                        borderRadius: "30px",
                                        fontWeight: 600,
                                        width: "90%",
                                    }}
                                >
                                    <IoMenuOutline className="mr-2" />
                                    ALL CATEGORIES
                                    <FaAngleDown className="ml-2" style={{ fontSize: "12px" }} />
                                </Button>
                            </div>



                            <div className="col-12 col-md-9">
                                <div className="d-flex d-md-none justify-content-between align-items-center">


                                    <IoReorderThreeOutline
                                        style={{
                                            fontSize: "28px",
                                            cursor: "pointer",
                                            marginLeft: "auto",
                                        }}
                                        onClick={() => setMenuOpen(!menuOpen)}
                                    />
                                </div>

                                <ul
                                    className={`list list-inline ${menuOpen ? "d-flex" : "d-none"
                                        } d-md-flex justify-content-between justify-content-md-end`}
                                    style={{
                                        flexDirection: menuOpen ? "column" : "row", 
                                        padding: menuOpen ? "10px 0" : "0",
                                    }}
                                >
                                    {[
                                        "Home",
                                        "Fashion",
                                        "Men",
                                        "Women",
                                        "Kids",
                                        "Jewellery & Accessories",
                                        "Electronics",
                                        "Contact Us",
                                    ].map((item, index) => (
                                        <li key={index} className="list-inline-item">
                                            <Link
                                                to="/"
                                                style={{
                                                    color: "black",
                                                    textDecoration: "none",
                                                    padding: "10px 15px",
                                                    borderRadius: "25px",
                                                    transition: "0.2s",
                                                    cursor: "pointer",
                                                }}
                                                onMouseEnter={(e) => {
                                                    e.target.style.color = "#2bbef9";
                                                    e.target.style.backgroundColor = "#f0faff";
                                                }}
                                                onMouseLeave={(e) => {
                                                    e.target.style.color = "black";
                                                    e.target.style.backgroundColor = "transparent";
                                                }}
                                            >
                                                {item}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                    {/* </div> */}
                </nav>
            </div>
        </>
    );
}

export default Header;
