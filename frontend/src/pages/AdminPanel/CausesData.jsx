import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';
import { Container,Button} from 'react-bootstrap';
import Sidebar from './Sidebar';
import './AdminPanel.css';
import axios from "axios";
import { useEffect, useState } from "react";

 const CausesData = () => {

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

  const handleCauseClosed = async (id) => {
    try {
      const response = await axios.post(`http://localhost:3000/completedCause/${id}`);
      console.log(response.message);
      alert("Cause Deleted from the screen and Added to Completed Causes Record");
    } catch (error) {
      console.error('Error recording completed cause:', error);
    }
  };
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
          <p style={{fontSize:"25px", textAlign:"center", fontWeight:"bold"}}>Causes Data</p>
            <section className="form-container">
              <div className="form-cont table-responsive">
                <table className='table'>
                  <thead>
                    <tr>
                     <th>Id</th>
                      <th>Cause Title</th>
                      <th>Cause Details</th>
                      <th>Cause Category</th>
                      <th>Goal Amount</th>
                      <th>Raised Amount</th>
                      <th>Name</th>
                      <th>Phone</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                  {causes.map((element) => (
                    <tr key={element.id}>
                      <td>{element.id}</td>
                      <td>{element.title}</td>
                      <td>{element.details}</td>
                      <td>{element.category}</td>
                      <td>{element.goal_amount}</td>
                      <td>{element.raised_amount}</td>
                      <td>{element.User ? element.User.Name : ''}</td>
                      <td>{element.User ? element.User.contactNo : ''}</td>
                      <td style={{ display: "flex" }}>
                          <Button  variant="success" style={{ marginTop: "10px" }} onClick={() => handleCauseClosed(element.id)}>Close</Button>
                        </td>
                    
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

export default CausesData