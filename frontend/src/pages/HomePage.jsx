import axios from "axios";
import { useEffect, useState } from "react";
import "./styles/HomePage.css"
import { NavLink } from "react-router-dom";

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

        <div className="main">
            {causes.map((element) => (
                <NavLink to={`/CauseDetailsPage/${element.id}`} style={{ textDecoration: 'none' , color:"black"}}>
                <div key={element.id} className="card">
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