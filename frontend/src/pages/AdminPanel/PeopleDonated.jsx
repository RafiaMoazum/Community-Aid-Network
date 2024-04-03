import React, { useEffect,useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';
import { Container } from 'react-bootstrap';
import Sidebar from './Sidebar';
import './AdminPanel.css';
import axios from 'axios';

 const PeopleDonated = () => {

  const[donation,setDonation] =useState([]);

  const fetchDonations = async() =>{
    try {
      const res = await axios.get("http://localhost:3000/getDonationsData");
      setDonation(res.data.data);
      console.log("Donation data=====", donation)
    } catch (error) {
      console.log("Error in getting Causes Data",error)

    }
  }

  useEffect(() =>{
   fetchDonations();
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
           opt6="Logout"
            />
          </Col>
          <Col  xs={8} sm={8} md={10} lg={10} className="d-none d-lg-block">
          <p style={{fontSize:"25px", textAlign:"center", fontWeight:"bold"}}>People Donated</p>
            <section className="form-container">
              <div className="form-cont table-responsive">
                <table className='table'>
                  <thead>
                    <tr>
                      <th>Id</th>
                      <th>Donour Name</th>
                      <th>Phone</th>
                      <th>Address</th>
                      <th>CNIC</th>
                      <th>Email</th>
                      
                    </tr>
                  </thead>
                  <tbody>
                  {donation.map((element) =>(
                      <tr key={element.id}>
                      <td>{element.User.id}</td>
                      <td>{element.User.Name}</td>
                      <td>{element.User.contactNo}</td>
                      <td> </td>
                      <td>{element.User.cnic}</td>
                      <td>{element.User.email}</td>
                      
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

export default PeopleDonated;