import axios from "axios";
import Container from 'react-bootstrap/Container';
import { useEffect, useState } from "react";
import "./styles/HomePage.css"
import HeroSection from "../components/HeroSection";
import { NavLink } from "react-router-dom";
import CategoriesSection from "../components/CategoriesSection";
import HomePageSlider from "../components/HomePageSlider";


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

    const lastFiveCauses = causes.slice(-5);
    return ( 
        <>
        <HeroSection />        
        <HomePageSlider/>

        <div style={{fontWeight:"bold", textAlign:"center", fontSize:"35px", fontFamily:"cursive"}}>Categories</div>
         <CategoriesSection/>
         <div style={{fontWeight:"bold",fontSize:"35px", fontFamily:"cursive", margin:"10px"}}>Latest Cases</div>
        <div className="main">
            {lastFiveCauses.map((element) => (
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


