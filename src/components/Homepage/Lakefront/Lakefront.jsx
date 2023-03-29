import React from 'react';
import './Lakefront.scss';
import MainTitle from '../../Common_Components/MainTitle/MainTitle';
import vector1 from '../../../assets/vector1.png';
import vector2 from '../../../assets/vector2.png';
import vector3 from '../../../assets/vector3.png';
import vector4 from '../../../assets/vector4.png';

// const data = [
//   { image: { vector1 }, title: 'title1', para: 'para1' },
//   { image: { vector2 }, title: 'title1', para: 'para1' },
//   { image: { vector3 }, title: 'title1', para: 'para1' },
//   { image: { vector4 }, title: 'title1', para: 'para1' },
// ];

// const renderCard = (card, index) => {
//   return (
//     <div className="item1" key={index}>
//             <img src={card.image} alt="vector1" />
//             <h4 className="title">{card.title}</h4>
//             <p className="para">{card.para}</p>
//           </div>
//   )
// }

const Lakefront = () => {
  const mainTitle = 'a lakefront';
  const subTitle = 'twist';

  return (
    <div className="lakefront grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1">
      <div className="left">
        <MainTitle mainTitle={mainTitle} subTitle={subTitle} />
        <div className="para-text">
          <p className="para">
            A place to savor the simple pleasures of life - but with a little
            tropical and serene lakefront twist. Embrace the beauty and
            peacefulness as you enjoy a truly rejuvenating escape in the
            backdrop of a tropical paradise, slowly morphing into the perfect
            place you can imagine yourself relaxing in.
          </p>
          <button className="viewmore-btn">view</button>
        </div>
      </div>

      <div className="right">
        <div className="row1">
          <div className="item1">
            <img src={vector1} alt="vector1" />
            <h4 className="title">LakeFront Bar</h4>
            <p className="para">
              Sip and relax, where stunning views and refreshing drinks await.
              Cheers to good times by the lake!
            </p>
          </div>
          <div className="item2">
            <img src={vector2} alt="vector2" />
            <h4 className="title">Aquatic Adventures</h4>
            <p className="para">
              Enjoy a multitude of water sports from kayaking, water cycling to
              boat trips to Namalenje island!
            </p>
          </div>
        </div>
        <div className="row2">
          <div className="item3">
            <img src={vector3} alt="vector3" />
            <h4 className="title">Gorgeous Getaways</h4>
            <p className="para">
              Visit the beautiful fishing village and the crocodile farm to get
              a taste of authentic Malawi life.
            </p>
          </div>
          <div className="item4">
            <img src={vector4} alt="vector4" />
            <h4 className="title">Corporate Events</h4>
            <p className="para">
              Professional meetings spaces to accommodate up to 200 delegates
              with modern amenities.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lakefront;
