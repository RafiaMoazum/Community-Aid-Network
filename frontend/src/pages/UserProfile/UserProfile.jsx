import React from 'react';
import axios from "axios";
import { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';
import { Container } from 'react-bootstrap';
import UserSideBar from "./UserSideBar"
import './userProfile.css';

const UserProfile = () => {
  const [userData, setUserData] = useState({
    Name: '',
    contactNo: '',
    address: '',
    cnic: '',
    email: '',
    password: '',
    role: 'user'
});

const fetchUserProfile = async () => {
    try {
        const token = localStorage.getItem('token');
        const response = await axios.get('http://localhost:3000/userProfile', {
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${token}`   
            }
        });
        console.log("userProfile=========",response.data)
        setUserData(response.data);
    } catch (error) {
        console.error('Error fetching user profile:', error);
    }
};

const handleUpdateProfile = async () => {
    try {
        const token = localStorage.getItem('token');
        await axios.put('http://localhost:3000/updateUser', userData, {
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${token}`             }
        });
        console.log('User profile updated successfully');
        alert("User profile updated successfully")
    } catch (error) {
        console.error('Error updating user profile:', error);
    }
};

useEffect(() => {
    fetchUserProfile();
}, []);

const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData(prevState => ({
        ...prevState,
        [name]: value
    }));
};

  return (
    <>
      <Container fluid style={{minHeight:"700px"}}>
        <Row>
        <Col xs={4} sm={4} md={2} lg={2} className="d-none d-lg-block">
        <UserSideBar />

          </Col>
          <Col  xs={8} sm={8} md={10} lg={10} className="d-none d-lg-block">
          <div>
            
            <form id="form">
                <label>Name:</label>
                <input type="text" name="Name" value={userData.Name} class="Ufield" onChange={handleChange} />
                <br/>
                <label>Contact No:</label>
                <input type="text" name="contactNo" value={userData.contactNo} class="Ufield" onChange={handleChange} />
                <br/>

                <label>Address:</label>
                <input type="text" name="address" value={userData.address} class="Ufield" onChange={handleChange} />
                <br/>

                <label>CNIC:</label>
                <input type="text" name="cnic" value={userData.cnic} class="Ufield" onChange={handleChange} />
                <br/>

                <label>Email:</label>
                <input type="email" name="email" value={userData.email} class="Ufield" onChange={handleChange} />
                <br/>

<br/>
                <button type="button" onClick={handleUpdateProfile} id="btn">Update Profile</button>
            </form>
        </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}
export default UserProfile;