import React from 'react';
import '../App.css';
import { Button } from './Button';
import './Hero.css';

function Hero() {
  return (
    <div className='hero-container'>
      <div className="hero-contents">
        <h1>Helping Hands Handyman</h1>
        <p>A Handyman you can trust</p>
        <div className='hero-btns'>
          <Button
            className='btns'
            buttonStyle='btn--outline'
            buttonSize='btn--large'
            path={'/Services'}
          >
            Learn More
          </Button>
          <Button
            className='btns'
            buttonStyle='btn--primary'
            buttonSize='btn--large'
            path={'/ContactUs'}
          >
            Book a Quote <i className="far fa-calendar-alt"></i>
          </Button>
      </div>
      </div>
    </div>
  );
}

export default Hero;
