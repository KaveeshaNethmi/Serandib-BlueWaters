import React from 'react';
import Slider from 'react-slick';
import MainTitle from '../../Common_Components/MainTitle/MainTitle';
import './Awaits.scss';
import img1 from '../../../assets/sliderImages/awaits1.png';
import img2 from '../../../assets/sliderImages/awaits2.png';
import img3 from '../../../assets/sliderImages/awaits3.png';
import img4 from '../../../assets/sliderImages/awaits4.png';
import img5 from '../../../assets/sliderImages/awaits5.png';
import img6 from '../../../assets/sliderImages/awaits6.png';

const Images = [
  {
    id: 1,
    img: img1,
    text: 'image1',
  },
  {
    id: 2,
    img: img2,
    text: 'image1',
  },
  {
    id: 3,
    img: img3,
    text: 'image1',
  },
  {
    id: 4,
    img: img4,
    text: 'image1',
  },
  {
    id: 5,
    img: img5,
    text: 'image1',
  },
  {
    id: 6,
    img: img6,
    text: 'image1',
  },
];
const Awaits = () => {
  const mainTitle = 'excitement';
  const subTitle = 'awaits';

  const settings = {
    infinite: true,
    dots: false,
    swipeToSlide: true,
    slidesToShow: 2.5,
    slidesToScroll: 1,
    autoplay: false,
  };

  return (
    <div className="Awaits">
      <div className="main-text">
        <MainTitle mainTitle={mainTitle} subTitle={subTitle} />
      </div>

      <div className="content grid lg:grid-cols-12 ">
        <div className="left-sec  col-start-2 col-end-3">
          <div className="list ">
            <ul>
              <li>namalenje dinner</li>
              <li>Dining</li>
              <li>Meetings</li>
              <li>Activities</li>
            </ul>
            <button>view more</button>
          </div>
        </div>
        <div className="Awaits-slider col-start-4 col-end-12 ">
          <Slider {...settings}>
            {Images.map((item) => (
              <div className="slider-img">
                <img src={item.img} alt={item.text} className=" pr-[60px] " />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Awaits;
