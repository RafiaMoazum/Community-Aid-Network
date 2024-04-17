import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';
import { Container} from 'react-bootstrap';
import UserSideBar from './UserSideBar';
import './userProfile.css';
import axios from "axios";
import { useEffect, useState } from "react";

 const MyDonations= () => {

  const[donations, setdonations] = useState([]);
  const fetchMydonations = async () =>{
    try {
    const token = localStorage.getItem('token');
     const response= await axios.get("http://localhost:3000/viewMyDonations",{
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}` 
        }
      });
     console.log("Response data:", response.data);
     setdonations(response.data);
     console.log("donations after setting state:", donations); 

    } catch (error) {
      console.log("Error in getting donations Data",error)
    }
  }

  
  useEffect(() =>{
       fetchMydonations();
  },[])
  return (
    <>
      <Container fluid style={{minHeight:"700px"}}>
        <Row>
        <Col xs={4} sm={4} md={2} lg={2} className="d-none d-lg-block">
        <UserSideBar />

          </Col>
          <Col  xs={8} sm={8} md={10} lg={10} className="d-none d-lg-block">
          <p style={{fontSize:"25px", textAlign:"center", fontWeight:"bold"}}>My Donations</p>
            <section className="form-container">
              <div className="form-cont table-responsive">
                <table className='table'>
                  <thead>
                    <tr>
                      <th>Cause Title</th>
                      <th>Cause Details</th>
                      <th>Cause Category</th>
                      <th>Donation Amount</th>
                      
                    </tr>
                  </thead>
                  <tbody>
                  {donations.map((element) => (
                    <tr key={element.id}>
                      <td>{element.Cause? element.Cause.title : ''}</td>
                      <td>{element.Cause? element.Cause.Details: ''}</td>        
                      <td>{element.Cause? element.Cause.category: ''}</td>        
                      <td>{element.donation_amount}</td>
                      
                    </tr>
                    ))}

                  </tbody>
                </table>
              </div>
            </section>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default MyDonations;