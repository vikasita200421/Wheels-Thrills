import React, { useState } from 'react';
import { Container, Row, Col, Button, Modal, Form, Carousel } from "react-bootstrap";
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import './WhyBuySection.css';
import { FaCarSide, FaHandsHelping } from 'react-icons/fa';
import { IoLocationOutline } from 'react-icons/io5';

const WhyBuySection = () => {
    const [showModal, setShowModal] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [preferredDate, setPreferredDate] = useState(null);

    const handleShowModal = () => setShowModal(true);
    const handleCloseModal = () => {
        setName('');
        setEmail('');
        setPhone('');
        setPreferredDate(null);
        setShowModal(false);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Your test drive has been scheduled successfully!');
        handleCloseModal();
    };

    return (
        <Container className="why-buy-section">
            <Row>
                <Col md={6} className="d-flex flex-column justify-content-center">
                    <h2>Why Choose Our Product?</h2>
                    <p>
                        Discover the unmatched quality and value that our products bring to your driving experience. We aim to exceed your expectations.
                    </p>
                    <div className="mt-4">
                        <div className="icon-wrapper">
                            <FaCarSide className="icon animated-icon" />
                            <div>
                                <h3>Exceptional Deals</h3>
                                <p>Get the best deals tailored to your budget without compromising on quality. Comfort and affordability are our promises.</p>
                            </div>
                        </div>
                        <div className="icon-wrapper">
                            <IoLocationOutline className="icon animated-icon" />
                            <div>
                                <h3>Guaranteed Best Prices</h3>
                                <p>Enjoy unbeatable prices and invest in a vehicle that fits your lifestyle. Don’t wait—start your adventure today.</p>
                            </div>
                        </div>
                        <div className="icon-wrapper">
                            <FaHandsHelping className="icon animated-icon" />
                            <div>
                                <h3>Round-the-Clock Support</h3>
                                <p>Our dedicated support team is available 24/7 to assist you. We’re here to ensure your satisfaction every step of the way.</p>
                            </div>
                        </div>
                    </div>
                    <Button className="mt-4 custom-button" onClick={handleShowModal}>
                        Schedule a Test Drive
                    </Button>
                </Col>
                <Col md={6} className="image-container">
                    <Carousel>
                        <Carousel.Item>
                            <img className="d-block w-100" src="https://images.pexels.com/photos/919073/pexels-photo-919073.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="First slide" />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img className="d-block w-100" src="https://images.pexels.com/photos/120049/pexels-photo-120049.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Second slide" />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img className="d-block w-100" src="https://images.pexels.com/photos/70912/pexels-photo-70912.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Third slide" />
                        </Carousel.Item>
                    </Carousel>
                </Col>
            </Row>

            <Row className="testimonials-section mt-5">
                <Col>
                    <h3>What Our Customers Say</h3>
                    <Carousel indicators={false} controls={true}>
                        {[
                            { text: "This has been the best purchase I've ever made!", author: "- John Doe", rating: 5 },
                            { text: "I couldn't be happier with my new vehicle.", author: "- Jane Smith", rating: 4 },
                            { text: "Exceptional service from start to finish.", author: "- Emily Johnson", rating: 5 },
                            { text: "The buying experience was smooth and easy.", author: "- Michael Brown", rating: 4 },
                            { text: "Amazing value for the money.", author: "- Sarah Davis", rating: 5 },
                        ].map((testimonial, index) => (
                            <Carousel.Item key={index}>
                                <div className="testimonial">
                                    <p>"{testimonial.text}"</p>
                                    <p>{testimonial.author}</p>
                                    <div className="star-rating">
                                        {[...Array(testimonial.rating)].map((_, i) => (
                                            <span key={i} className="star">★</span>
                                        ))}
                                    </div>
                                </div>
                            </Carousel.Item>
                        ))}
                    </Carousel>
                </Col>
            </Row>

            <Modal show={showModal} onHide={handleCloseModal} centered className="custom-modal">
                <Modal.Header closeButton>
                    <Modal.Title>Book Your Test Drive</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group controlId="formName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control 
                                type="text" 
                                placeholder="Enter your name" 
                                value={name} 
                                onChange={(e) => setName(e.target.value)} 
                                required 
                            />
                        </Form.Group>
                        <Form.Group controlId="formEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control 
                                type="email" 
                                placeholder="Enter your email" 
                                value={email} 
                                onChange={(e) => setEmail(e.target.value)} 
                                required 
                            />
                        </Form.Group>
                        <Form.Group controlId="formPhone">
                            <Form.Label>Phone Number</Form.Label>
                            <Form.Control 
                                type="tel" 
                                placeholder="Enter your phone number" 
                                value={phone} 
                                onChange={(e) => setPhone(e.target.value)} 
                                required 
                            />
                        </Form.Group>
                        <Form.Group controlId="formPreferredDate">
                            <Form.Label>Preferred Date</Form.Label>
                            <DatePicker 
                                selected={preferredDate} 
                                onChange={(date) => setPreferredDate(date)} 
                                className="custom-datepicker" 
                                placeholderText="Select a date"
                                required
                            />
                        </Form.Group>
                        <Button type="submit" className="mt-3 submit-button">
                            Submit
                        </Button>
                    </Form>
                </Modal.Body>
                <Modal.Footer className="custom-modal-footer">
                    <Button variant="secondary" onClick={handleCloseModal} className="close-button">
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </Container>
    );
};

export default WhyBuySection;
