import React from 'react';
import { useState } from 'react';
import './Form.scss';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import Calendar from 'react-calendar';

const Form = () => {
  const [inputs, setInputs] = useState({});
  const [value, onChange] = useState(new Date());

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(inputs);
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="dropdown">
        <button className="dropbtn">hotels
          <div className='form-icon'>
            <KeyboardArrowDownIcon/>
          </div>
       </button>
        <div className="dropdown-content">
          <a href="#">Item 1</a>
          <a href="#">Item 2</a>
          <a href="#">Item 3</a>
        </div>
      </div>

      <div className="dropdown">
        <button className="dropbtn">Check-in Check-out  
        <div className='form-icon'>
          <CalendarMonthIcon/>
        </div> </button>
        <div className="dropdown-content">
          <Calendar onChange={onChange} value={value} />
        </div>
      </div>

      <div className="dropdown">
        <button className="dropbtn">Guests
          <div className='form-icon'>
            <KeyboardArrowDownIcon/>
          </div>
        </button>
        <div className="dropdown-content">
          <a href="#">Item 1</a>
          <a href="#">Item 2</a>
          <a href="#">Item 3</a>
        </div>
      </div>
    
      <input className="submit-btn" type="submit" />
    </form>
  );
};

export default Form;
