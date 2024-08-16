import React from 'react';
import { Container, Row, Col, Button } from "react-bootstrap";
import { AiOutlineSafety } from "react-icons/ai";
import { HiOutlineStatusOnline } from "react-icons/hi";
import { BiSolidOffer } from "react-icons/bi";
import { FaCar } from "react-icons/fa";
import { MdSupportAgent } from "react-icons/md";
import { BsClockHistory } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';

const FeaturesSection = () => {
  const navigate = useNavigate();

  const handleViewServicesClick = () => {
    navigate('/bookservice');
  };

  // Inline styles for button and layout
  const buttonStyle = {
    backgroundColor: '#007bff', // Button color
    borderColor: '#007bff',
    color: 'white',
    marginLeft: 'auto',
    marginRight: '0',
  };

  const buttonHoverStyle = {
    backgroundColor: '#0056b3', // Button hover color
    borderColor: '#0056b3',
  };

  return (
    <div id="features-section">
      <Container className="py-5">
        <Row className="align-items-center mb-4">
          <Col>
            <h1 className="quinary-color fs-1 p-0">WHY CHOOSE US</h1>
          </Col>
          <Col className="text-end">
            <Button
              variant="primary"
              onClick={handleViewServicesClick}
              style={buttonStyle}
              onMouseOver={(e) => e.currentTarget.style = {...buttonStyle, ...buttonHoverStyle}}
              onMouseOut={(e) => e.currentTarget.style = buttonStyle}
            >
              View Services
            </Button>
          </Col>
        </Row>
        <Row>
          <Col xs={4}>
            <div className="feature-card" style={{ backgroundColor: '#343a40', padding: '20px', borderRadius: '8px', textAlign: 'center' }}>
              <AiOutlineSafety size="2.5em" color="white" />
              <h4 className="quinary-color fs-5 py-1">Safety & Security</h4>
              <p className="quinary-color fs-6 m-0 pb-2">
                <ul>
                  <li>Your safety is our top priority.</li>
                  <li>Our vehicles undergo rigorous maintenance checks.</li>
                  <li>We provide comprehensive insurance coverage.</li>
                </ul>
              </p>
            </div>
          </Col>
          <Col xs={4}>
            <div className="feature-card" style={{ backgroundColor: '#343a40', padding: '20px', borderRadius: '8px', textAlign: 'center' }}>
              <HiOutlineStatusOnline size="2.5em" color="white" />
              <h4 className="quinary-color fs-5 py-1">Online Booking</h4>
              <p className="quinary-color fs-6 m-0 pb-2">
                <ul>
                  <li>Rent your car anytime, anywhere.</li>
                  <li>Easy-to-use online booking system.</li>
                  <li>Instant confirmations and hassle-free reservations.</li>
                </ul>
              </p>
            </div>
          </Col>
          <Col xs={4}>
            <div className="feature-card" style={{ backgroundColor: '#343a40', padding: '20px', borderRadius: '8px', textAlign: 'center' }}>
              <BiSolidOffer size="2.5em" color="white" />
              <h4 className="quinary-color fs-5 py-1">Best Offers</h4>
              <p className="quinary-color fs-6 m-0 pb-2">
                <ul>
                  <li>Exclusive deals and discounts.</li>
                  <li>Exceptional value for your money.</li>
                  <li>Flexible rental options.</li>
                </ul>
              </p>
            </div>
          </Col>
          <Col xs={4}>
            <div className="feature-card" style={{ backgroundColor: '#343a40', padding: '20px', borderRadius: '8px', textAlign: 'center' }}>
              <FaCar size="2.5em" color="white" />
              <h4 className="quinary-color fs-5 py-1">Wide Range of Vehicles</h4>
              <p className="quinary-color fs-6 m-0 pb-2">
                <ul>
                  <li>Diverse fleet to choose from.</li>
                  <li>Cars for every occasion.</li>
                  <li>Well-maintained vehicles.</li>
                </ul>
              </p>
            </div>
          </Col>
          <Col xs={4}>
            <div className="feature-card" style={{ backgroundColor: '#343a40', padding: '20px', borderRadius: '8px', textAlign: 'center' }}>
              <MdSupportAgent size="2.5em" color="white" />
              <h4 className="quinary-color fs-5 py-1">24/7 Customer Support</h4>
              <p className="quinary-color fs-6 m-0 pb-2">
                <ul>
                  <li>Assistance around the clock.</li>
                  <li>Dedicated customer support team.</li>
                  <li>Quick response to inquiries.</li>
                </ul>
              </p>
            </div>
          </Col>
          <Col xs={4}>
            <div className="feature-card" style={{ backgroundColor: '#343a40', padding: '20px', borderRadius: '8px', textAlign: 'center' }}>
              <BsClockHistory size="2.5em" color="white" />
              <h4 className="quinary-color fs-5 py-1">On-Time Delivery</h4>
              <p className="quinary-color fs-6 m-0 pb-2">
                <ul>
                  <li>Cars delivered as scheduled.</li>
                  <li>No delays or wait times.</li>
                  <li>Reliable service.</li>
                </ul>
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default FeaturesSection;
