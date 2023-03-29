import React from 'react';
import './Teastimonial.scss';
import Slider from 'react-slick';
import img1 from '../../../assets/sliderImages/testimonial-img1.png';
import img2 from '../../../assets/sliderImages/testimonial-img2.png';
import img3 from '../../../assets/sliderImages/testimonial-img3.png';
import profile1 from '../../../assets/sliderImages/profile1.png';
import profile2 from '../../../assets/sliderImages/profile2.png';
import profile3 from '../../../assets/sliderImages/profile3.png';
import quotes from '../../../assets/sliderImages/quotes.png';

// const data = [
//   {
//     img: img1,
//     description:
//       'Risus arcu justo potenti tempus. Velit at iaculis amet id id. Faucibus porttitor ac volutpat convallis egestas facilisis purus. Morbi enim vulputate nisi faucibus. Tincidunt lorem vel elit pretium varius.',
//     profile: profile1,
//     name: 'Sit massa erat',
//     post: 'Cursus enim id',
//   },
//   {
//     img: img3,
//     description:
//       'Risus arcu justo potenti tempus. Velit at iaculis amet id id. Faucibus porttitor ac volutpat convallis egestas facilisis purus. Morbi enim vulputate nisi faucibus. Tincidunt lorem vel elit pretium varius.',
//     profile: profile2,
//     name: 'Nunc vitae vitae',
//     post: 'Cursus enim id',
//   },
//   {
//     img: img2,
//     description:
//       'Risus arcu justo potenti tempus. Velit at iaculis amet id id. Faucibus porttitor ac volutpat convallis egestas facilisis purus. Morbi enim vulputate nisi faucibus. Tincidunt lorem vel elit pretium varius.',
//     profile: profile3,
//     name: 'Sit massa erat',
//     post: 'Tempor',
//   },
//   {
//     img: img1,
//     description:
//       'Risus arcu justo potenti tempus. Velit at iaculis amet id id. Faucibus porttitor ac volutpat convallis egestas facilisis purus. Morbi enim vulputate nisi faucibus. Tincidunt lorem vel elit pretium varius.',
//     profile: profile1,
//     name: 'Sit massa erat',
//     post: 'Cursus enim id',
//   },
// ];

const Testimonial = () => {
  const settings1 = {
    dots: false,
    fade: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
    // appendDots: dots => <ul>{dots}</ul>,
    // customPaging: i => (
    //   <div className="ft-slick__dots--custom">
    //     <div className="loading" />
    //   </div>
    // )
  };

  const settings2 = {
    dots: true,
    swipeToSlide: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="testimonial">
      <div className="content">
        <div className="image-slider">
          <Slider className="slider2" {...settings1}>
            {/* {data.map((profile) => {
              <div>
                <img src={profile.img} alt="image" />
              </div>;
            })} */}
            <div>
              <img className='slider-img' src={img1} alt="image" />
            </div>
            <div>
              <img src={img2} alt="image" />
            </div>
            <div>
              <img src={img3} alt="image" />
            </div>
  

          </Slider>
        </div>
        <div className="testimonial-slider">
          <Slider className="slider2" {...settings2}>
            {/* {data.map((profile) => {
              <div className="testimonilal-content">
                <p className="description">{profile.description}</p>
                <div className="about">
                    <img src={profile.profile} alt="profile-pic"/>
                    <div className="details">
                        <h6 className="name">{profile.name}</h6>
                        <p className="post">{profile.post}</p>
                    </div>
                </div>
              </div>;
            })} */}
            <div className="testimonilal-content">
              <div className="m-auto ">
                <p className="description">
                  'Risus arcu justo potenti tempus. Velit at iaculis amet id id.
                  Faucibus porttitor ac volutpat convallis egestas facilisis
                  purus. Morbi enim vulputate nisi faucibus. Tincidunt lorem vel
                  elit pretium varius.'
                </p>
                <div className="about">
                  <img src={profile1} alt="profile-pic" />
                  <div className="details">
                    <h6 className="name">Sit massa erat</h6>
                    <p className="post">Cursus enim id</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="testimonilal-content">
              <p className="description">
                'Risus arcu justo potenti tempus. Velit at iaculis amet id id.
                Faucibus porttitor ac volutpat convallis egestas facilisis
                purus. Morbi enim vulputate nisi faucibus. Tincidunt lorem vel
                elit pretium varius.'
              </p>
              <div className="about">
                <img src={profile2} alt="profile-pic" />
                <div className="details">
                  <h6 className="name">Sit massa erat</h6>
                  <p className="post">Cursus enim id</p>
                </div>
              </div>
            </div>
            <div className="testimonilal-content">
              <p className="description">
                'Risus arcu justo potenti tempus. Velit at iaculis amet id id.
                Faucibus porttitor ac volutpat convallis egestas facilisis
                purus. Morbi enim vulputate nisi faucibus. Tincidunt lorem vel
                elit pretium varius.'
              </p>
              <div className="about">
                <img src={profile3} alt="profile-pic" />
                <div className="details">
                  <h6 className="name">Sit massa erat</h6>
                  <p className="post">Cursus enim id</p>
                </div>
              </div>
            </div>
      
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
