import React from 'react';
import './Rooms.scss';
import Slider from 'react-slick';
import MainTitle from '../../Common_Components/MainTitle/MainTitle';
import img1 from '../../../assets/sliderImages/room1.png';
import img2 from '../../../assets/sliderImages/room2.png';
import img3 from '../../../assets/sliderImages/room3.png';
import img4 from '../../../assets/sliderImages/room4.png';
import img5 from '../../../assets/sliderImages/room5.png';

const data = [
  { img: img1, text: 'Bamboo Boutique Hotel' },
  { img: img2, text: 'Bamboo Boutique Hotel' },
  { img: img3, text: 'Bamboo Boutique Hotel' },
  { img: img4, text: 'Bamboo Boutique Hotel' },
  { img: img5, text: 'Bamboo Boutique Hotel' },
];

const Rooms = () => {
  const mainTitle = 'recommended';
  const subTitle = 'rooms';

  const settings = {
    className: 'center',
    infinite: true,
    centerPadding: '60px',
    dots: false,
    swipeToSlide: true,
    slidesToShow: 2.75,
    slidesToScroll: 1,
    autoplay: false,
  };

  return (
    <div className="rooms">
      <div className="main-text">
        <MainTitle mainTitle={mainTitle} subTitle={subTitle} />
      </div>

      <div className="rooms-slider grid lg:grid-cols-1">
        <Slider {...settings}>
          {data.map((card) => (
            <div className="card">
              <div className="overlay"></div>
              <img className='image' src={card.img} alt="car" />

              <div className="pop-up">
                <p>{card.text}</p>

                <button className="book-btn">Book now</button>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};
export default Rooms;
