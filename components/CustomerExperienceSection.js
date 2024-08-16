// src/components/CustomerExperienceSection.js
import React from 'react';
import './CustomerExperienceSection.css'; // You can add custom styles here

const CustomerExperienceSection = () => {
    return (
        <div className="customer-experience">
            <h2>Customer experience</h2>
            <p className="subtext">Our commitment is to provide an exceptional customer experience that showcases the unique features and benefits of our product, ensuring you make informed decisions.</p>
            <div className="car-container">
                <img src="/parts.png" alt="Car" className="car-image"/>
                
            </div>
        </div>
    );
};

export default CustomerExperienceSection;
