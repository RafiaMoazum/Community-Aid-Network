import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import styles from "./latestCause.module.css"; 

const LatestCauses = () => {
    const [causes, setCauses] = useState([]);
    const BackendUrl = 'http://localhost:3000';

    useEffect(() => {
        const fetchCauses = async () => {
            try {
                const response = await axios.get(`${BackendUrl}/getAllCauses`);
                setCauses(response.data.data);
            } catch (error) {
                console.error("Error in getting Causes Data", error);
            }
        };
        fetchCauses();
    }, []);

    return (
        <div className={styles.cardContainer}>
{causes.slice(-4).map((cause) => (
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
          <div className={styles.fundingInfo}>${cause.raised_amount} Raised of ${cause.goal_amount} Goal</div>
          <div className={styles.progress}>
            <div className={styles.progressBar} style={{ width: `${(cause.raised_amount / cause.goal_amount) * 100}%` }}></div>
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

export default LatestCauses;
