import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button, Modal } from 'react-bootstrap';
import carWashImage from '../assets/images/car-wash-image.jpg';
import carRepairImage from '../assets/images/car-repair-image.jpg';
import Battery from '../assets/images/battery.png';
import service from '../assets/images/service.png';
import cool from '../assets/images/cool.png';
import brake from '../assets/images/brake.png';
import interior from '../assets/images/interior.png';
import spark from '../assets/images/spark plug.png';
import wire from '../assets/images/wire.png';
import axios from 'axios';

import './ServicesSection.css';

const ServicesSection = () => {
  const [show, setShow] = useState(false);
  const [serviceType, setServiceType] = useState('');
  const [message, setMessage] = useState('');

  const handleClose = () => {
    setShow(false);
    setMessage('');
  };

  const handleShow = (service) => {
    setServiceType(service);
    setShow(true);
  };

  useEffect(() => {
    const handleMessage = async (event) => {
      if (event.origin !== window.location.origin) return;

      const { type, message, data } = event.data;

      if (type === 'submit') {
        try {
          await axios.post('http://localhost:8080/api/booking', data);
          setMessage('Booking details saved successfully.');
        } catch (error) {
          setMessage('Failed to save booking details.');
        }
      } else if (type === 'error') {
        setMessage(message);
      }
    };

    window.addEventListener('message', handleMessage);

    return () => {
      window.removeEventListener('message', handleMessage);
    };
  }, []);

  const services = [
    {
      title: 'Full Service',
      description: 'Package provides check-up, maintenance, engine diagnostics, oil, filter change, brake inspection, and transmission check.',
      image: service,
    },
    {
      title: 'Car Repairing',
      description: 'Expert car repair services for all makes and models.',
      image: carRepairImage,
    },
    {
      title: 'Car Washing',
      description: 'Get your car sparkling clean with our professional washing services.',
      image: carWashImage,
    },
    {
      title: 'Battery Service',
      description: 'Battery Service includes testing, cleaning, and, if needed, replacement to ensure reliable vehicle performance.',
      image: Battery,
    },
    {
      title: 'Coolant Service',
      description: "Coolant Service involves checking and replacing your vehicle's coolant to prevent overheating and ensure optimal engine temperature control.",
      image: cool,
    },
    {
      title: 'Brake Fixing',
      description: "Our Brake Service includes thorough inspection, adjustment, and replacement of brake components to ensure your vehicle's safety and optimal stopping power.",
      image: brake,
    },
    {
      title: 'Interior Service',
      description: "Our Interior Service offers a comprehensive cleaning and detailing of your vehicle's interior, including vacuuming, upholstery cleaning, and surface treatment for a fresh and polished look.",
      image: interior,
    },
    {
      title: 'Spark Plug',
      description: "Our Spark Plug Service includes inspecting, cleaning, and replacing spark plugs to ensure efficient engine performance and smooth operation.",
      image: spark,
    },
    {
      title: 'Wire Blade Fixing',
      description: "Our Wire Blades Service involves inspecting and replacing windshield wiper blades to ensure clear visibility and optimal performance in all weather conditions.",
      image: wire,
    },
  ];

  return (
    <section id="services">
      <Container>
        <h2 className="text-center my-5"><strong>Our Services</strong></h2>
        <Row>
          {services.map((service, index) => (
            <Col sm={12} md={6} lg={4} key={index}>
              <div className="service-card p-3 mb-4 text-center">
                <img src={service.image} alt={service.title} className="service-image mb-3 img-fluid" />
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <Button variant="primary" onClick={() => handleShow(service.title)}>
                  Book Now
                </Button>
              </div>
            </Col>
          ))}
        </Row>
      </Container>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Book {serviceType}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <iframe
            src="/booking-form.html"
            title="Booking Form"
            style={{ width: '100%', height: '400px', border: 'none' }}
          />
          {message && <p className="mt-3">{message}</p>}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </section>
  );
};

export default ServicesSection;
