import React from 'react';
import './UserSideBar.css'
import {useState, useEffect} from 'react';
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useUserAuthContext } from "../../context/userAuthContext"


const UserSideBar = (props) => {
    const { userDetails } = useUserAuthContext();

  return (
    <>

    <div className='sidebar'>
    <nav>
      <ul>
      {userDetails && userDetails.isValid ? (
                <>
                <p style={{color:"teal",fontSize:"25px",fontWeight:"500"}}>{userDetails.name}</p>
                </>
              ) : (
                <>
                  <h2>User</h2>
                </>
              )}
        <li><Link to="/userProfile" style={{textDecoration: "none", color:"black"}} >{props.opt1}</Link></li>
        <div style={{ border: "1px solid darkslategrey", margin: "10px 0" }}></div>
        <li><Link to="/myCauses" style={{textDecoration: "none", color: "black"}} >{props.opt2}</Link> </li>
        <div style={{ border: "1px solid darkslategrey", margin: "10px 0" }}></div>
        <li><Link to="/myCompletedCauses" style={{textDecoration: "none", color: "black"}} >{props.opt3}</Link> </li>
        <div style={{ border: "1px solid darkslategrey", margin: "10px 0" }}></div>
        <li><Link to="/myDonations" style={{textDecoration: "none", color: "black"}} >{props.opt4}</Link> </li>
        <div style={{ border: "1px solid darkslategrey", margin: "10px 0" }}></div>
        
        
      </ul>
    </nav>
    </div>
    </>
  );
};

export default UserSideBar;