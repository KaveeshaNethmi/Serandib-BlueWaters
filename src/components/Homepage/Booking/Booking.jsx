import React from 'react';
import './Booking.scss';
import Form from '../../Common_Components/Form/Form';

const Booking = () => {
  return (
    <div className="booking">
      <div className="content">
        <h1 className="headline-text">
          The Epitome of luxury nestled in nature - Serendib awaits...
        </h1>
        <Form />
      </div>
    </div>
  );
};

export default Booking;
