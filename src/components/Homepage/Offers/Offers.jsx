import React from 'react';
import MainTitle from '../../Common_Components/MainTitle/MainTitle';
import './Offers.scss';
import img1 from '../../../assets/card-img1.png';
import img2 from '../../../assets/card-img2.png';
import img3 from '../../../assets/card-img3.png';
import img4 from '../../../assets/card-img4.png';

const data = [
    {
      id: 1,
      img: img1,
      place: 'Easter Escape - Salima',
      price: '90,000',
      type: 'per night',
    },
    {
      id: 1,
      img: img2,
      place: 'Easter Escape - Salima',
      price: '90,000',
      type: 'per night',
    },
    {
      id: 1,
      img: img3,
      place: 'Easter Escape - Salima',
      price: '90,000',
      type: 'per night',
    },
    {
      id: 1,
      img: img4,
      place: 'Easter Escape - Salima',
      price: '90,000',
      type: 'per night',
    },
  ];

const Offers = () => {
  const mainTitle = 'exclusive';
  const subTitle = 'offers';

  return (
    <div className="offers">
      <div className="main-text">
        <MainTitle mainTitle={mainTitle} subTitle={subTitle} />
      </div>
      <div className="card-section grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[20px]">
            {data.map(card => (
                
                  <div className="card">
                    <div className="overlay"></div>
                      <span>New Season</span>
                      <img src={card.img} alt="car" />
                    
                    <div className="pop-up">
                    <p>{card.place}</p>
                    <h3>From MK {card.price}</h3>
                    <h3>{card.type}</h3>
                    <button className="book-btn">Book now</button>
                  </div>
                
                  
                  
            
              </div>
            ))}
            
            
      </div>
    </div>
  );
};

export default Offers;
