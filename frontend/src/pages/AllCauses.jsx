import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom'; 

const BackendUrl = 'http://localhost:3000';

const AllCauses = () => {
    const [causes, setCauses] = useState([]);
   
    
    const fetchCauses = async () =>{
      try {
        
       const response= await axios.get("http://localhost:3000/getAllCauses");
       console.log("Response data:", response.data);
       setCauses(response.data.data);
       console.log("Causes after setting state:", causes); 

      } catch (error) {
        console.log("Error in getting Causes Data",error)
      }
    }

    useEffect(() =>{
         fetchCauses();
    },[])

    return ( 
        <div className="main">
            {causes.map((element) => (
                <NavLink to={`/CauseDetailsPage/${element.id}`} style={{ textDecoration: 'none' , color:"black"}} key={element.id}>
                    <div className="card">
                        <img className="picture" src={`${BackendUrl}/${element.image}`} alt="image"/>
                        <p>Title: {element.title || "N/A"}</p> 
                        <p>Details: {element.details || "N/A"}</p> 
                        <p>Category: {element.category || "N/A"}</p> 
                        <p>Goal Amount: {element.goal_amount || "N/A"}</p> 
                    </div>
                </NavLink>
            ))}
        </div>
    );
};

export default AllCauses;
