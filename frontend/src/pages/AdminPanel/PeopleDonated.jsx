import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';
import { Container } from 'react-bootstrap';
import Sidebar from './Sidebar';
import './AdminPanel.css';

 const PeopleDonated = () => {
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
                      <th>Phone</th>
                      <th>Address</th>
                      <th>CNIC</th>
                      <th>Email</th>
                      
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Ali</td>
                      <td>03240410037</td>
                      <td>955 C Canal view Lahore</td>
                      <td>35202-1498464-8</td>
                      <td>abc@gmail.com</td>
                      
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

export default PeopleDonated;