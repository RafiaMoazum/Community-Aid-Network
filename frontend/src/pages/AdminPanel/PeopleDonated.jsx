import React, { useEffect,useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';
import { Container } from 'react-bootstrap';
import Sidebar from './Sidebar';
import './AdminPanel.css';
import axios from 'axios';
import Loader from "../../components/Loader";

 const PeopleDonated = () => {

  const[donor,setDonor] =useState([]);
  const [loading,setLoading] =useState(true);

  const fetchDonations = async() =>{
    try {
      const res = await axios.get("http://localhost:3000/getDonorData");
      setDonor(res.data.data);
      setLoading(false)

      console.log("Donor data=====", donor)
    } catch (error) {
      console.log("Error in getting Causes Data",error)

    }
  }

  useEffect(() =>{
   fetchDonations();
  },[])
  return (
    <>
      <Container fluid style={{minHeight:"400px"}}>
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
          <Col  xs={8} sm={8} md={10} lg={10} className="d-none d-lg-block" style={{marginTop:"100px"}}>
          <p style={{fontSize:"25px", textAlign:"center", fontWeight:"bold"}}>People Donated</p>
          {loading? (
          <Loader/>
        ):(
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
                  {donor.map((element) =>(
                      <tr key={element.id}>
                      <td>{element.id}</td>
                      <td>{element.Name}</td>
                      <td>{element.contactNo}</td>
                      <td>{element.address} </td>
                      <td>{element.cnic}</td>
                      <td>{element.email}</td>
                      
                    </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
        )}
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default PeopleDonated;