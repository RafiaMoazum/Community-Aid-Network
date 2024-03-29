import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import { Container, Button } from "react-bootstrap";
import Sidebar from "./Sidebar";
import { useEffect, useState } from "react";
import axios from "axios";
import "./AdminPanel.css";

const PendingApproval = () => {
  const [pendingCauses, setPendingCauses] = useState([]);
  const fetchPendingCauses = async () => {
    try {
      const response = await axios.get(
        "http://localhost:3000/getAllPendingCauses"
      );
      console.log("Response data:", response.data);
      setPendingCauses(response.data.data);
      console.log("Causes after setting state:", causes);
    } catch (error) {
      console.log("Error in getting Causes Data", error);
    }
  };

  useEffect(() => {
    fetchPendingCauses();
  }, []);

  const handleAcceptCause = async (id) => {
    try {
      const response = await axios.post(`http://localhost:3000/acceptCause/${id}`);
      console.log(response.data.message);
      alert("Cause Approved and email sent");
    } catch (error) {
      console.error('Error accepting cause:', error);
    }
  };

  return (
    <>
      <Container fluid>
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
          <Col xs={8} sm={8} md={10} lg={10} className="d-none d-lg-block">
            <section className="form-container">
              <div className="form-cont table-responsive">
                <table className="table">
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
                    {pendingCauses.map((element) => (
                      <tr key={element.id}>
                        <td>Ali</td>
                        <td>03240410037</td>
                        <td>35202-1498464-8</td>
                        <td>955 C Canal view Lahore</td>
                        <td>{element.title}</td>
                        <td>{element.category}</td>
                        <td>{element.goal_amount}</td>
                        <td style={{ display: "flex", gap: "5px" }}>
                          <Button  variant="success" style={{ marginTop: "10px" }} onClick={() => handleAcceptCause(element.id)}>Accept </Button>
                          <Button  variant="danger" style={{ marginTop: "10px" }}> Reject </Button>
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
};

export default PendingApproval;
