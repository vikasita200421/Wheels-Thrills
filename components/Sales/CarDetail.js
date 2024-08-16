import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CarDetail = ({ car, onClose }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [car.exterior, car.interior];
  const navigate = useNavigate();

  const handleBuyNow = () => {
    // Navigate to the payment page with car details in the state
    navigate('/payment', { state: { car } });
  };

  const handleNext = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="car-detail">
      <button className="btn btn-danger mb-3" onClick={onClose}>Close</button>
      <h2>{car.name}</h2>
      <div className="car-views">
        <div className="car-view mb-3">
          <h3>View Images</h3>
          <div className="carousel">
            <button className="carousel-button prev" onClick={handlePrev}>
              &lt;
            </button>
            {currentImageIndex < images.length ? (
              <img
                src={images[currentImageIndex]}
                alt={car.name}
                className="img-fluid"
              />
            ) : (
              <video width="320" height="240" controls>
                <source src={car.videoUrl} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            )}
            <button className="carousel-button next" onClick={handleNext}>
              &gt;
            </button>
          </div>
        </div>
      </div>
      <button className="btn btn-primary" onClick={handleBuyNow}>Buy Now</button>
    </div>
  );
};

export default CarDetail;
