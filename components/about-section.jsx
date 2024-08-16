import React from 'react'
import {Container, Row, Col,Button} from "react-bootstrap"
import { useNavigate } from 'react-router-dom';
import AboutImage from '../assets/images/about-image.png'


const AboutSection = () => {
  const navigate = useNavigate();

  const handleViewServicesClick = () => {
    navigate('/services'); // Replace '/services' with your actual path
  };
    return (
    <div id="about-section">
     <Container>
        <Row className="mt-1 mb-2">
          <Col xs={{span:12, order:"last"}} md={{span:6, order:"first"}}>
            <div className="image_iman">
                <img src={AboutImage} className="about_img" />
            </div>
          </Col>
          <Col xs={{span:12, order:"first"}} md={{span:6, order:"last"}}>
            <div className="mt-2 mb-5">
              <h1 className="text-uppercase fs-1 fw-600">
                  About <span className="primary-color">Us</span>
              </h1>
              <p className="about-text fs-5 m-0">
              Whether you're planning a short trip, looking to purchase your dream car, or require expert care for your vehicle, we've got you covered. <br/>
              <br/>
              Our user-friendly platform allows you to effortlessly book your desired car online, explore your favorite models in stunning 3D, and get instant quotes for our comprehensive service offerings, including car washing, repairs, and more.<br/>
              <br/>
              With a commitment to excellence and customer satisfaction, we strive to provide top-notch services and a memorable experience. Our team of automotive experts is dedicated to assisting you at every step, ensuring your journey with us is smooth and hassle-free.<br/>
               
              Experience the future of automotive services with <b>Wheels&Thrills</b>.
              
              </p>
              <div className="mt-3">
              <Button variant="primary" onClick={handleViewServicesClick}>Read more</Button>
              </div>
            </div>
          </Col>
        </Row>
     </Container>
    </div>
    );
    };
    export default AboutSection;