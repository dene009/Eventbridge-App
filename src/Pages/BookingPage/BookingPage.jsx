import React from 'react';
import { useParams } from "react-router-dom";
import './BookingPage.css';

const BookingPage = () => {
  const { id } = useParams();  // Get the event ID from the URL

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Booking confirmed!");
    // Here you would send booking data to the server or process it
  };

  return (
    <div className="booking-page">
      <h2>Book Event ID: {id}</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" required />
        </label>
        <label>
          Phone:
          <input type="tel" name="phone" required />
        </label>
        <label>
          Email:
          <input type="email" name="email" required />
        </label>
        <label>
          Address:
          <input type="text" name="address" required />
        </label>
        <button type="submit" className="submit-button">Confirm Booking</button>
      </form>
    </div>
  );
};

export default BookingPage;
