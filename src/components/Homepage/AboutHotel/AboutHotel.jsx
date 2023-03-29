import React from 'react';
import './AboutHotel.scss';
import bg from '../../../assets/bg2.png';

const AboutHotel = () => {
  const mainTitle = 'Floating';
  const subTitle = 'Dinner';

  return (
    <div className="about-hotel ">
      <img className="bg-image" src={bg} alt="img"></img>
      <div className="container">
        <div className="main-text">
          <div className="title-box">
            <h1 className="main-title">{mainTitle}</h1>
            <h1 className="sub-title">{subTitle}</h1>
          </div>

          <p className="para">
            Rise and shine to a tropical paradise! Begin your day with a
            delicious breakfast on the shimmering lake shore while savoring the
            breathtaking views of the lush landscapes.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutHotel;
