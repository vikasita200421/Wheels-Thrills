import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../config/firebase";
import Swal from "sweetalert2";
import ReCAPTCHA from "react-google-recaptcha";
import './ContactSection.css'; // Make sure to create this CSS file

const ContactSection = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({});
  const [captchaResult, setCaptchaResult] = useState(false);

  const handleFormChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleCaptchaChange = (value) => {
    setCaptchaResult(value);
  };

  const handleContactSubmit = (event) => {
    event.preventDefault();
    setIsLoading(true);

    addDoc(collection(db, "forms"), formData)
      .then(() => {
        setIsLoading(false);
        Swal.fire({
          title: "Good job!",
          text: "Thanks for contacting us! We'll get back to you soon.",
          icon: "success",
        });
      })
      .catch((err) => {
        console.log(err);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong! Please try again later.",
        });
      });
  };

  return (
    <div id="contact-section" className="contact-us">
      <Container>
        <Row className="justify-content-center mb-5">
          <Col md={8} className="text-center">
            <h1 className="fs-1 text-uppercase">Get In Touch</h1>
            <p className="lead mb-4">
              Have questions or need help? We'd love to hear from you!
            </p>
          </Col>
        </Row>
        <Row>
          <Col md={8} className="mx-auto">
            <div className="contact-form-wrapper shadow p-4 rounded">
              {isLoading ? (
                <div className="loading-indicator">Sending...</div>
              ) : (
                <Form onSubmit={handleContactSubmit}>
                  <Form.Group className="mb-3">
                    <Form.Control
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      className="form-control"
                      onChange={handleFormChange}
                      required
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Control
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      className="form-control"
                      onChange={handleFormChange}
                      required
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Control
                      type="tel"
                      name="phone"
                      placeholder="Phone Number (Optional)"
                      className="form-control"
                      onChange={handleFormChange}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Control
                      as="textarea"
                      name="message"
                      rows={5}
                      placeholder="Your Message"
                      className="form-control"
                      onChange={handleFormChange}
                      required
                    />
                  </Form.Group>
                  <ReCAPTCHA
                    sitekey={process.env.REACT_APP_RECAPTCHA_TEST_SITE_KEY} 
                    onChange={handleCaptchaChange}
                    className="mb-3 recaptcha"
                  />
                  <Button
                    variant="primary"
                    className="btn btn-primary w-100"
                    type="submit"
                    disabled={!captchaResult}
                  >
                    Send Message
                  </Button>
                </Form>
              )}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ContactSection;
