import React, { useState } from 'react';
import { cars } from '../../DATA/data';
import CarItem from './CarItem';
import CarDetail from './CarDetail';
import './sales.css';

const Sales = () => {
  const [selectedCar, setSelectedCar] = useState(null);

  return (
    <div className="sales-container">
      <h1>SALE is Live Now with new Offers</h1>
      <div className="car-list">
        {cars.map(car => (
          <CarItem 
            key={car.id} 
            car={car} 
            onSelect={() => setSelectedCar(car)} 
          />
        ))}
      </div>
      {selectedCar && (
        <CarDetail 
          key={selectedCar.id}
          car={selectedCar} 
          onClose={() => setSelectedCar(null)} 
        />
      )}
    </div>
  );
};

export default Sales;
