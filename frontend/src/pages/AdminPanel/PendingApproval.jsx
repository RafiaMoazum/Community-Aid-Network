import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';
import { Container,Button} from 'react-bootstrap';
import Sidebar from './Sidebar';
import './AdminPanel.css';

 const PendingApproval = () => {
  return (
    <>
      <Container fluid>
        <Row>
        <Col xs={4} sm={4} md={2} lg={2} className="d-none d-lg-block">
            <Sidebar
              opt1="Pending Approval"
              opt2="Causes Data"
              opt3="Donation Data"
              opt4="Logout"
            />
          </Col>
          <Col  xs={8} sm={8} md={10} lg={10} className="d-none d-lg-block">
            <section className="form-container">
              <div className="form-cont table-responsive">
                <table className='table'>
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Phone</th>
                      <th>CNIC</th>
                      <th>Address</th>
                      <th>Cause</th>
                      
                      <th>Cause Category</th>
                      <th>Goal Amount</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Ali</td>
                      <td>03240410037</td>
                      <td>35202-1498464-8</td>
                      <td>955 C Canal view Lahore</td>
                      <td>Fund for Education</td>
                      <td>Education</td>
                      <td>Rs.90000</td>
                    
                      <td style={{ display: 'flex', gap: '5px' }}>
                        <Button variant="success" style={{ marginTop:"10px"}}>Accept</Button>
                        <Button variant="danger" style={{ marginTop:"10px"}}>Reject</Button>
                      </td>
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

export default PendingApproval;