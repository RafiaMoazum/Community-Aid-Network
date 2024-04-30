import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';
import { Container} from 'react-bootstrap';
import UserSideBar from './UserSideBar';
import './userProfile.css';
import axios from "axios";
import { useEffect, useState } from "react";
import Loader from '../../components/Loader';

 const MyCompletedCauses= () => {

  const[causes, setCauses] = useState([]);
  const [loading,setLoading] =useState(true);

  const fetchMyCauses = async () =>{
    try {
      
      const token = localStorage.getItem('token');

     const response= await axios.get("http://localhost:3000/viewCompletedCauses",{
      headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}` 
      }
    });
     console.log("Response data:", response.data);
     setCauses(response.data);
     setLoading(false)

     console.log("Causes after setting state:", causes); 

    } catch (error) {
      console.log("Error in getting Causes Data",error)
    }
  }

  
  useEffect(() =>{
       fetchMyCauses();
  },[])
  return (
    <>
      <Container fluid style={{minHeight:"700px"}}>
        <Row>
        <Col xs={4} sm={4} md={2} lg={2} className="d-none d-lg-block">
        <UserSideBar />

          </Col>
          <Col  xs={8} sm={8} md={10} lg={10} className="d-none d-lg-block" style={{marginTop:"100px"}}>
          <p style={{fontSize:"25px", textAlign:"center", fontWeight:"bold"}}>My Completed Causes</p>
          {loading? (
          <Loader/>
        ):(
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

export default MyCompletedCauses