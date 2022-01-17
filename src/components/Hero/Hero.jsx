import React from 'react';
import { Image} from 'react-bootstrap';

import classes from './Hero.module.scss';
import phone from "../../assets/iPhone Mockup.png";



const Hero = props => {
  return (
    <div className={classes.hero}>
        <h1>Gradie</h1>
        <p className={classes.sub_header}>Beautiful gradients in seconds.</p>
        <div className={classes.img_container}>
          <Image src={phone} fluid></Image>
          

        </div>

    </div>
  
  );
};

export default Hero;
