import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';
import { Container } from 'react-bootstrap';
import Sidebar from './Sidebar';
import './AdminPanel.css';

 const DonationData = () => {
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
            <section className="form-container">
              <div className="form-cont table-responsive">
                <table className='table'>
                  <thead>
                    <tr>
                      <th>Donour Name</th>
                      <th>Donation Amount</th>
                      <th>Cause</th>
                      <th>Cause Category</th>
                      <th>Name</th>
                      <th>Phone</th>
                    
    
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Ali</td>
                      <td>Rs.90000</td>
                      <td>Fund for Education</td>
                      <td>Education</td>
                      <td>Ali</td>
                      <td>03240410037</td>
                      
                    </tr>
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

export default DonationData;