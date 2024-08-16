import React from 'react';
import { useNavigate } from 'react-router-dom';
import './carItem.css';

const CarItem = ({ car }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/car/${car.id}`, { state: { car } });
  };

  return (
    <div className="car-item" onClick={handleClick}>
      <img src={car.exterior} alt={car.name} className="car-image" />
      <h3>{car.name}</h3>
      <p>{car.price}</p>
    </div>
  );
};

export default CarItem;
