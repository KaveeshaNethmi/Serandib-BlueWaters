import React from 'react'
import { Link } from "react-router-dom";
import "./Navbar.scss";
import logo from "../../../assets/logo.png";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';

const Navbar = () => {
  return (

    <div className='navbar'>
      <div className="wrapper">
        <div className='left'>
          <div className="item">
            <Link className="link" to="/products/1">accomadation</Link>
          </div> 
          <div className="item">
            <Link className="link" to="/products/2">experience</Link>
          </div> 
          <div className="item">
            <Link className="link" to="/products/3">about</Link>
          </div> 
        </div>

        <div className='center'>
            <Link className="link" to="/">
              <img src={logo} alt="logo" />
            </Link> 
        </div>
         
        <div className='right'>
          <div className='right-links'>
            <div className='item'>
                <Link className="link" to="/">Conferencce</Link> 
            </div>
            <div className='item'>
                <Link className="link" to="/">Gallery</Link> 
            </div>
            <div className='item'>
                <Link className="link" to="/">Contact</Link> 
            </div>
            
          </div>
        
        </div>
        <div className="icons">
            <HomeOutlinedIcon className='navbar-icon'/>
        </div>
      </div>
      
    </div>
 )   
}

export default Navbar;