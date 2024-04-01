import React from 'react';
import Container from 'react-bootstrap/Container';
import './AnimatedSection.css'; 
import { useNavigate } from 'react-router-dom';

const AnimatedSection = () => {

    const navigate=useNavigate();
    return (
        <div className='container' style={{width:"100%"}}>
            <div className="box box1">
                <p className='heading' >Donate Now</p>
                <div className='text'>Be the light in someone's darkness.</div>
                 <div className='text'>Your support makes a world of difference</div>
            <button className='button' onClick={() => navigate("/AllCauses")}>Donate Now</button>
            </div>
            <div className="box box2">
                <p className='heading'  >Apply for donation</p>
                <div className='text'> Don't face it alone.</div>
                <div className='text'>Apply for assistance and let us stand by your side.</div>
                <button className='button' onClick={() => navigate("/AddCausePage")}>Apply Now</button>
            </div>
        </div>
    );
}

export default AnimatedSection;
