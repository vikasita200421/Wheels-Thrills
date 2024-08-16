import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './carDetail.css';

const CarDetailPage = () => {
  const { state } = useLocation();
  const { car } = state;
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [car.exterior, car.interior]; // Add other image URLs as needed

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="car-detail-page">
      <button
        className="btn btn-danger"
        onClick={() => window.history.back()}
      >
        Close
      </button>
      <h2>{car.name}</h2>
      <div className="car-image-slider">
        <button className="slider-button" onClick={prevImage}>
          {'<'}
        </button>
        {currentImageIndex < 2 ? (
          <img src={images[currentImageIndex]} alt={car.name} />
        ) : (
          <video width="320" height="240" controls>
            <source src={car.carAModel3D} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )}
        <button className="slider-button" onClick={nextImage}>
          {'>'}
        </button>
      </div>
      <div className="car-details">
        <h3>Price: {car.price}</h3>
        <h3>Launch Date: {car.launchDate}</h3>
      </div>
      <button
        className="btn btn-primary"
        onClick={() => window.alert('Buy Now clicked!')}
      >
        Buy Now
      </button>
    </div>
  );
};

export default CarDetailPage;
