import React from 'react';
import { Carousel } from 'react-bootstrap';

function HomePageSlider() {
  return (
    <Carousel interval={1000} style={{marginBottom:"50px"}}> 
      <Carousel.Item>
        <img
          className="d-block w-45 mx-auto" 
          src="/1.png"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-45 mx-auto" 
          src="/2.png"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-45 mx-auto" 
          src="/3.png"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default HomePageSlider;
