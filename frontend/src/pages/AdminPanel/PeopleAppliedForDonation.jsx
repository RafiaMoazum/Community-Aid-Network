import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';
import { Container } from 'react-bootstrap';
import Sidebar from './Sidebar';
import './AdminPanel.css';
import axios from "axios";
import { useEffect, useState } from "react";

 const PeopleAppliedForDonation = () => {

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
      <Container fluid style={{minHeight:"700px"}}>
        <Row>
        <Col xs={4} sm={4} md={2} lg={2} className="d-none d-lg-block">
            <Sidebar
           opt1="Pending Approval"
           opt2="Causes Data"
           opt3="Donation Data"
           opt4="People Donated"
           opt5="People Applied"
           opt6="Causes Completed"
           />
          </Col>
          <Col  xs={8} sm={8} md={10} lg={10} className="d-none d-lg-block">
          <p style={{fontSize:"25px", textAlign:"center", fontWeight:"bold"}}>People Applied for Donations</p>

            <section className="form-container">
              <div className="form-cont table-responsive">
                <table className='table'>
                  <thead>
                    <tr>
                      <th>Id</th>
                    <th>Name</th>
                      <th>Phone</th>
                      <th>Address</th>
                      <th>CNIC</th>
                      <th>Email</th>
                      <th>Cause</th>
                      <th>Goal</th>
                      <th>Raised</th>

                    </tr>
                  </thead>
                  <tbody>
                  {causes.map((element) => (
                    <tr key={element.id}>
                      <td>{element.User ? element.User.id : ''}</td>
                      <td>{element.User ? element.User.Name : ''}</td>
                      <td>{element.User? element.User.contactNo : ''}</td>
                      <td> </td>
                      <td>{element.User? element.User.cnic: ''}</td>
                      <td>{element.User? element.User.email: ''}</td>
                      <td>{element.title}</td>
                      <td>{element.goal_amount}</td>
                      <td>{element.raised_amount}</td>


                    
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

export default PeopleAppliedForDonation;