import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { NavLink, useLocation } from 'react-router-dom'; 

const BackendUrl = 'http://localhost:3000';

const CategoryWiseCauses = () => {
    const [causes, setCauses] = useState([]);
    const location = useLocation();
    const { category } = location.state || {};

    const fetchCauses = async () =>{
        try {
            const response = await axios.get("http://localhost:3000/getAllCauses");
            console.log("Response data:", response.data);
            const filteredCauses = response.data.data.filter(element => element.category === category);
            setCauses(filteredCauses);
        } catch (error) {
            console.log("Error in getting Causes Data", error);
        }
    }

    useEffect(() =>{
        fetchCauses();
    }, [category]); 

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

export default CategoryWiseCauses;
