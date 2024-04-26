import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom'; 
import styles from "../components/latestCause.module.css"; 
import { Container} from 'react-bootstrap';
import Loader from '../components/Loader';



const AllCauses = () => {
    const [causes, setCauses] = useState([]);
    const [loading,setLoading] =useState(true);

    const BackendUrl = 'http://localhost:3000';

    useEffect(() => {
        const fetchCauses = async () => {
            try {
                const response = await axios.get(`${BackendUrl}/getAllCauses`);
                setCauses(response.data.data);
                setLoading(false)

            } catch (error) {
                console.error("Error in getting Causes Data", error);
            }
        };
        fetchCauses();
    }, []);

    return (
      <Container fluid style={{minHeight:"500px"}}>
 {loading? (
  <Loader/>
 ):(
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
        )}
      </Container>
    );
};


export default AllCauses;
