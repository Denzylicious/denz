import React from 'react';
import { Carousel, Image, Container,  Row, Col } from 'react-bootstrap';


const Work = () => {
  return (
   <>
    <Container>
      <Row>
      <Col>
        <h2 className='display-1 fw-bold'>
           My Work
        </h2>
        <p>Here are some of the projects I've worked on:</p>
        <ul>
          <li>
            <h4>AMS</h4>
            <p>Aims to create a QR based real-time attendance of students per subject</p>
          </li>
          <li>
            <h4>Book Store</h4>
            <p>A library information system that help you to find your books faster</p>
          </li>
          <li>
            <h4>Photo Studio</h4>
            <p>A photo gallery website that allows you to showcase your wonderful moments in life</p>
          </li>
        </ul>
      </Col>
      <Col>
      <div style={{minWidth:280}}>
      <Carousel>
        <Carousel.Item>
           <div style={{maxHeight:300}}>
            <Image src="/project1.png" className="w-100 h-100 object-cover"/>
           </div>
          <Carousel.Caption>
            <h3>AMS</h3>  
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <div style={{maxHeight:300}}>
            <Image src="/project2.png" className="w-100 h-100 object-cover"/>
           </div>
          <Carousel.Caption>
            <h3>Book Store</h3>  
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          
          <div style={{maxHeight:300}}>
            <Image src="/project3.png" className="w-100 h-100 object-cover"/>
           </div>
          <Carousel.Caption>
            <h3>Photo Studio</h3>
           
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      </div>
      </Col>
    </Row>
    </Container>
   </>
  );
};

export default Work;
