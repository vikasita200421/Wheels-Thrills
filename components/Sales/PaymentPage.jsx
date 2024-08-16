import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const PaymentPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { car } = location.state || {}; // Fallback if car is undefined
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handlePayment = (method) => {
    setLoading(true);
    setError('');
    
    console.log(`Processing payment for ${car?.name} using ${method}`); // Debug log
    
    // Simulate payment processing...
    setTimeout(() => {
      if (car) {
        setLoading(false);
        alert(`Payment successful using ${method}`); // Keep this alert to confirm payment
        console.log("Navigating to insurance page...");
        navigate('/insurance', { state: { car } });
      } else {
        setLoading(false);
        setError('Payment failed. Please try again.');
        console.error("Payment failed. Car details not found."); // Debug log
      }
    }, 1000); // Simulate a delay for payment processing
  };

  if (!car) {
    return <p>No car details available. Please go back and select a car.</p>;
  }

  return (
    <div className="payment-page">
      <h1>Payment for {car.name}</h1>
      {loading ? (
        <p>Processing your payment...</p>
      ) : (
        <div className="payment-options">
          <button className="btn btn-outline-primary payment-btn" onClick={() => handlePayment('Google Pay')}>
            Pay with Google Pay
          </button>
          <button className="btn btn-outline-success payment-btn" onClick={() => handlePayment('PhonePe')}>
            Pay with PhonePe
          </button>
          <button className="btn btn-outline-info payment-btn" onClick={() => handlePayment('Razorpay')}>
            Pay with Razorpay
          </button>
        </div>
      )}
      {error && <p className="error-message">{error}</p>}
    </div>
  );
};

export default PaymentPage;
