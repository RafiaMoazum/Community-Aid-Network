import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const CategoriesSection = () => {
    return (
        <>
            <Container fluid style={{margin:"30px 2px"}}>  
                <Row>
                    <Col>
                        <div style={{ textAlign: "center"}}>
                            <img src="/education.jfif" alt="Category 1" style={{width: "150px", height: "150px", borderRadius: "50%"}} />
                            <div>Education</div>
                        </div>
                    </Col>
                    <Col>
                        <div style={{textAlign: "center"}}>
                            <img src="/health care 5.jfif" alt="Category 2" style={{width: "150px", height: "150px", borderRadius: "50%"}} />
                            <div>Health Care</div>
                        </div>
                    </Col>
                    <Col>
                        <div style={{textAlign: "center"}}>
                            <img src="/basic needs 4.jpg" alt="Category 3" style={{width: "150px", height: "150px", borderRadius: "50%"}} />
                            <div>Basic Needs Support</div>
                        </div>
                    </Col>
                    <Col>
                        <div style={{textAlign: "center"}}>
                            <img src="/earning2.jfif" alt="Category 3" style={{width: "150px", height: "150px", borderRadius: "50%"}} />
                            <div>Support for Earning</div>
                        </div>
                    </Col>
                    <Col>
                        <div style={{ textAlign: "center"}}>
                            <img src="/Community dev2.jpg" alt="Category 3" style={{width: "150px", height: "150px", borderRadius: "50%"}} />
                            <div>Community Development</div>
                        </div>
                    </Col>
                    <Col>
                        <div style={{ textAlign: "center"}}>
                            <img src="/disaster relief3.jfif" alt="Category 3" style={{width: "150px", height: "150px", borderRadius: "50%"}} />
                            <div>Disaster Relief</div>
                        </div>
                    </Col>
                    
                    <Col>
                        <div style={{ textAlign: "center"}}>
                            <img src="/other3.jfif" alt="Category 3" style={{width: "150px", height: "150px", borderRadius: "50%"}} />
                            <div>Other</div>
                        </div>
                    </Col>
                </Row>         
            </Container>
        </>
    );
}
 
export default CategoriesSection;
