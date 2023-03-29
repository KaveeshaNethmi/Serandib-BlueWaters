import React, {useState}  from 'react';
import './Hero.scss';
import bgVideo from '../../../assets/bgVideo.mp4';
import Navbar from '../../../components/Common_Components/Navbar/Navbar';
import Form from '../../Common_Components/Form/Form';
import { IconButton } from '@material-ui/core';
import VolumeOffOutlinedIcon from '@mui/icons-material/VolumeOffOutlined';
import VolumeUpOutlinedIcon from '@mui/icons-material/VolumeUpOutlined';


const Hero = () => {

  const [isMuted, setIsMuted] = useState(true);

  return (
    <div className="hero">
      <div className="overlay"></div>
      <video className="bgVideo" src={bgVideo} autoPlay loop muted={isMuted} />
      <Navbar />
      <h1 className="move-right">Oceanfront</h1>
      <h1 className="move-left">bliss</h1>

      <div className="form">
        <Form />
      </div>
      
      <IconButton className="mute-icon" onClick={() => setIsMuted(!isMuted)}>
        {isMuted ? <VolumeOffOutlinedIcon /> : <VolumeUpOutlinedIcon />}
      </IconButton>  
  
      
       
    </div>
  );
}
export default Hero;
