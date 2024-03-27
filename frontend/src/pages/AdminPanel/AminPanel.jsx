import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';
import { Container } from 'react-bootstrap';
import Sidebar from './Sidebar';
import './AdminPanel.css';

const AdminPanel = () => {
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
          
          </Col>
        </Row>
      </Container>
    </>
  );
}
export default AdminPanel;