import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import './InsurancePage.css';

const InsurancePage = () => {
  const location = useLocation();
  const { car } = location.state || {}; // Fallback if car is undefined
  const [selectedInsurance, setSelectedInsurance] = useState('');

  const handleInsuranceSelection = (insuranceType) => {
    setSelectedInsurance(insuranceType);
    console.log(`Selected insurance type: ${insuranceType}`); // Debug log
  };

  const handleProceed = () => {
    alert(`Proceeding with ${selectedInsurance} for ${car.name}`);
    // Add further navigation or actions here
  };

  if (!car) {
    return <p>No car details available. Please go back and select a car.</p>;
  }

  return (
    <div className="insurance-page">
      <h1>Insurance Claim for {car.name}</h1>
      <p>Select an insurance policy and proceed with the claim process.</p>
      <div className="insurance-options">
        <button
          className="btn btn-outline-secondary"
          onClick={() => handleInsuranceSelection('Comprehensive Insurance')}
        >
          Comprehensive Insurance
        </button>
        <button
          className="btn btn-outline-secondary"
          onClick={() => handleInsuranceSelection('Third-Party Insurance')}
        >
          Third-Party Insurance
        </button>
        <button
          className="btn btn-outline-secondary"
          onClick={() => handleInsuranceSelection('Zero Depreciation Cover')}
        >
          Zero Depreciation Cover
        </button>
      </div>
      {selectedInsurance && (
        <div className="insurance-details">
          <h2>{selectedInsurance} Selected</h2>
          <p>You have selected {selectedInsurance}. Proceed with the claim process to secure your insurance for {car.name}.</p>
          <button className="btn btn-primary mt-3" onClick={handleProceed}>
            Proceed
          </button>
        </div>
      )}
    </div>
  );
};

export default InsurancePage;
