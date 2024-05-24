import React from 'react';
import './Sidebar.css';
import {useState, useEffect} from 'react';
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';


const Sidebar = (props) => {
 
  return (
    <>
    
    <div className='sidebar'>
    <nav>
      <ul>
        <h2>Admin</h2>
        <li><Link to={`/pendingApproval`} style={{textDecoration: "none", color: "black"}} >{props.opt1}</Link></li>
        <div style={{ border: "1px solid black", margin: "10px 0" }}></div>
        <li><Link to={`/causesData`} style={{textDecoration: "none", color: "black"}} >{props.opt2}</Link> </li>
        <div style={{ border: "1px solid black", margin: "10px 0" }}></div>
        <li><Link to={`/donationData`} style={{textDecoration: "none", color: "black"}} >{props.opt3}</Link></li>
        <div style={{ border: "1px solid black", margin: "10px 0" }}></div>
        <li> <Link to="/peopleDonated" style={{textDecoration: "none", color: "black"}} >{props.opt4}</Link></li>
        <div style={{ border: "1px solid black", margin: "10px 0" }}></div>
        <li> <Link to="/peopleAppliedForDonation" style={{textDecoration: "none", color: "black"}} >{props.opt5}</Link></li>
        <div style={{ border: "1px solid black", margin: "10px 0" }}></div>
        <li> <Link to="/causesCompleted" style={{textDecoration: "none", color: "black"}} >{props.opt6}</Link></li>
        <div style={{ border: "1px solid black", margin: "10px 0" }}></div>
        
      </ul>
    </nav>
    </div>
    </>
  );
};

export default Sidebar;