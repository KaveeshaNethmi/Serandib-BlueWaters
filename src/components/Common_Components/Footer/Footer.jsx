import React from 'react';
import './Footer.scss';
import logo from '../../../assets/logo.png';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import bluewaters from '../../../assets/bluewaters.png';
import heritage from '../../../assets/Heritage-logo.png';
import kambiri from '../../../assets/kambiri.png';
import serandib from '../../../assets/serandib.png';
import lotus from '../../../assets/lotus.png';
import zubari from '../../../assets/zaburi.png';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';

const data = [
  {
    id: 1,
    img: bluewaters,
    text: 'Blue Waters Lake',
  },
  {
    id: 2,
    img: heritage,
    text: 'Heritage Hotel',
  },
  {
    id: 3,
    img: kambiri,
    text: 'Kambiri Beach',
  },
  {
    id: 4,
    img: lotus,
    text: 'Lotus Hotel',
  },
  {
    id: 5,
    img: serandib,
    text: 'Serendib Suites',
  },
  {
    id: 6,
    img: zubari,
    text: 'Zaburi Hotel',
  },
  {
    id: 6,
    img: bluewaters,
    text: 'Kara O Mula',
  },
  {
    id: 7,
    img: lotus,
    text: 'Liwonde Hotel',
  },
  {
    id: 8,
    img: serandib,
    text: 'Bamboo Boutique',
  },
];

const Footer = () => {
  return (
    <div className="footer">
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <div className="left">
          <img src={logo} alt="logo" />
          <p>
            Where the lavishness of luxury meets the warmth of authentic African
            hospitality. Discover the true serenity and comfort of Malawi.
          </p>
          <div className="icons">
            <div className="icon">
              <FacebookOutlinedIcon />
            </div>
            <div className="icon">
              <InstagramIcon />
            </div>
            <div className="icon">
              <TwitterIcon />
            </div>
            <div className="icon">
              <LinkedInIcon />
            </div>
          </div>
          <div className="link">
            <a className="underline-text" href="/">
              serandib home
            </a>
          </div>
        </div>
        <div className="center">
          <div className="links-col">
            <h4>quick links</h4>
            <ul className="link-items ">
              <li className="item">Home</li>
              <li className="item">Accomodation</li>
              <li className="item">Experience</li>
              <li className="item">About</li>
              <li className="item">Conference</li>
              <li className="item">Gallery</li>
              <li className="item">Contact</li>
            </ul>
          </div>

          <div className="links-col">
            <h4>Experiences</h4>
            <ul className="link-items ">
              <li className="item">Home</li>
              <li className="item">Accomodation</li>
              <li className="item">Experience</li>
              <li className="item">About</li>
              <li className="item">Conference</li>
              <li className="item">Gallery</li>
              <li className="item">Contact</li>
            </ul>
          </div>
        </div>
        <div className="right">
          <h3 className="title1">Sign up to our </h3>
          <h1 className="title2">Newsletter</h1>
          <div className="signup-form">
            <form>
              <div className="flex items-center py-2">
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="input-field appearance-none bg-transparent border-none w-full mr-3 py-2 px-2"
                  placeholder="yourname@gmail.com"
  
                />
                <button
                  className="flex-shrink-0 text-sm border-4 py-4 px-2"
                  type="button"
                >
                  Send
                </button>
              </div>
            </form>
          </div>

          <div className="contact-details">
            <div className="c-item">
              <EmailIcon />
              <p>reservation@serendibhotel.com</p>
            </div>
            <div className="c-item">
              <PhoneIcon />
              <p>+265 885 976 419</p>
            </div>
          </div>
        </div>
      </div>

      <div className="brand-logos grid sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-9">
        {data.map((brand) => (
          <div className="brand">
            <img src={brand.img} alt={brand.text} />
            <div className="text">
              <h4>{brand.text}</h4>
              <ArrowOutwardIcon
                className="arrow"
                sx={{ stroke: '#ffffff', strokeWidth: 0.5 }}
              />
            </div>
          </div>
        ))}
      </div>
      <p className="copyrights">
        © 2023 Serendib Hotels. All Rights Reserved. A Creative<span>Hub</span>{' '}
        Website
      </p>
    </div>
  );
};

export default Footer;
