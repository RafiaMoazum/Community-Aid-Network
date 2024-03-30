import axios from "axios";
import Container from 'react-bootstrap/Container';
import { useEffect, useState } from "react";
import "./styles/HomePage.css"
import HeroSection from "../components/HeroSection";
import { NavLink } from "react-router-dom";
import CategoriesSection from "../components/CategoriesSection";


const BackendUrl = 'http://localhost:3000';

const HomePage = () => {

    const[causes, setCauses] = useState([]);
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
        <>
        <HeroSection />        
        <div style={{fontWeight:"bold", textAlign:"center", fontSize:"35px", fontFamily:"cursive"}}>Categories</div>
         <CategoriesSection/>
        <div className="main">
            {causes.map((element) => (
                <NavLink to={`/CauseDetailsPage/${element.id}`} style={{ textDecoration: 'none' , color:"black"}}>
                <div key={element.id} className="card">
                <img className="picture" src={`${BackendUrl}/${element.image}`} alt="image"/>
                    <p>Title: {element.title || "N/A"}</p> 
                    <p>Details: {element.details || "N/A"}</p> 
                    <p>Category: {element.category || "N/A"}</p> 
                    <p>Goal Amount: {element.goal_amount || "N/A"}</p> 
                </div>
                </NavLink>
            ))}
        </div>
        </>
     );
}
 
export default HomePage;


