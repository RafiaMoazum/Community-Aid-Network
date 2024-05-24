import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const CategoriesSection = () => {
    const navigate=useNavigate();
    const handleClick = (category) => {
        navigate('/CategoryWiseCauses', { state: { category } });  };
    return (
        <>
            <Container fluid style={{margin:"30px 2px"}}>  
                <Row>
                    <Col>
                        <div style={{ textAlign: "center"}}>
                            <img src="/education.jfif" alt="Category 1" style={{width: "150px", height: "150px", borderRadius: "50%"}} />
                            <div style = {{paddingTop: "20px"}}><b><div onClick={() => handleClick("Education")} style={{ textDecoration:'none', color:'black', cursor: 'pointer' }}>Education</div></b></div>
                        </div>
                    </Col>
                    <Col>
                        <div style={{textAlign: "center"}}>
                            <img src="/health care 5.jfif" alt="Category 2" style={{width: "150px", height: "150px", borderRadius: "50%"}} />
                            <div style = {{paddingTop: "20px"}}><b><div onClick={() => handleClick("Health Care")} style={{ textDecoration:'none', color:'black', cursor: 'pointer' }}>Health Care</div></b></div>
                        </div>
                    </Col>
                    <Col>
                        <div style={{textAlign: "center"}}>
                            <img src="/basic needs 4.jpg" alt="Category 3" style={{width: "150px", height: "150px", borderRadius: "50%"}} />
                            <div style = {{paddingTop: "20px"}}><b><div onClick={() => handleClick("Basic Needs Support")} style={{ textDecoration:'none', color:'black', cursor: 'pointer' }}>Basic Needs Support</div></b></div>
                        </div>
                    </Col>
                   
                    <Col>
                        <div style={{ textAlign: "center"}}>
                            <img src="/Community dev2.jpg" alt="Category 3" style={{width: "150px", height: "150px", borderRadius: "50%"}} />
                            <div style = {{paddingTop: "20px"}}><b><div onClick={() => handleClick("Support for Earning")} style={{ textDecoration:'none', color:'black', cursor: 'pointer' }}>Support for Earning</div></b></div>
                        </div>
                    </Col>
                    <Col>
                        <div style={{textAlign: "center"}}>
                            <img src="/earning2.jfif" alt="Category 3" style={{width: "150px", height: "150px", borderRadius: "50%"}} />
                            <div style = {{paddingTop: "20px"}}><b><div onClick={() => handleClick("Community Development")} style={{ textDecoration:'none', color:'black', cursor: 'pointer' }}>Community Development</div></b></div>
                    
                            
                        </div>
                    </Col>
                    <Col>
                        <div style={{ textAlign: "center"}}>
                            <img src="/disaster relief3.jfif" alt="Category 3" style={{width: "150px", height: "150px", borderRadius: "50%"}} />
                            <div style = {{paddingTop: "20px"}}><b><div onClick={() => handleClick("Disaster Relief")} style={{ textDecoration:'none', color:'black', cursor: 'pointer' }}>Disaster Relief</div></b></div>

                        </div>
                    </Col>
                    
                    <Col>
                        <div style={{ textAlign: "center"}}>
                            <img src="/other3.jfif" alt="Category 3" style={{width: "150px", height: "150px", borderRadius: "50%"}} />
                            <div style = {{paddingTop: "20px"}}><b><div onClick={() => handleClick("Other")} style={{ textDecoration:'none', color:'black', cursor: 'pointer' }}>Other</div></b></div>
                        </div>
                    </Col>
                </Row>         
            </Container>
        </>
    );
}
 
export default CategoriesSection;
