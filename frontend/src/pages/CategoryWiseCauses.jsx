import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { NavLink, useLocation } from 'react-router-dom'; 
import styles from "../components/latestCause.module.css"; 


const CategoryWiseCauses = () => {
    const BackendUrl = 'http://localhost:3000';
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
        <div className={styles.cardContainer}>
{causes.map((cause) => (
  <NavLink key={cause.id} to={`/CauseDetailsPage/${cause.id}`} className={styles.cardNavLink}>
    <div className={styles.card}>
      <img src={`${BackendUrl}/${cause.image}`} alt={cause.title} className={styles.cardImage} />
      <div className={styles.cardContent}>
        <div>
          <span className={styles.categoryBadge}>{cause.category}</span>
          <h3 className={styles.title}>{cause.title}</h3>
          <p className={styles.description}>{cause.details}</p>
        </div>
        <div>
          <div className={styles.fundingInfo}>${cause.raised} Raised of ${cause.goal_amount} Goal</div>
          <div className={styles.progress}>
            <div className={styles.progressBar} style={{ width: `${(cause.raised / cause.goal_amount) * 100}%` }}></div>
          </div>
          {/* <button className={styles.donateButton}>Donate Now</button> */}
        </div>
      </div>
    </div>
  </NavLink>
))}
        </div>
    );
};

export default CategoryWiseCauses;
