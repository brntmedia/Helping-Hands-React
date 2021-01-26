import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <div className='footer-links'>
        <div className='footer-link-wrapper'>
        <div className='footer-link-items'>
            <Link to='/' >
              <h2> <img src="images/nav-logo.png" alt="logo" className="footer-logo"/><span> Helping </span> Hands </h2>
            </Link>
            <p>We are a family owned, Charlotte based Handyman service for general maintenance and remodel needs</p>
            <br/>
            <Button 
              buttonStyle='btn--outline'
              path='/About'
            >Learn More</Button>
            <br/>
            <div className='social-icons'>
            <Link
              className='social-icon-link facebook'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              <i className='fab fa-facebook-f' />
            </Link>
            <Link
              className='social-icon-link instagram'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <i className='fab fa-instagram' />
            </Link>
            <Link
              className='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
              <i className='fab fa-twitter' />
            </Link>
            <Link
              className='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i className='fab fa-linkedin' />
            </Link>
          </div>
          </div>
          <div className='footer-link-items-about'>
            <h2>About Us</h2>
            <Link to='/About'>Updates</Link>
            <Link to='/Services'>Testimonials</Link>
            <Link to='/About'>Covid Response</Link>
            <Link to='/ContactUS'>Contact Us</Link>
          </div>
          <div className='footer-link-items'>
            <h2>Contact Us</h2>
            <div className="contact">
                <p><span><i className="fas fa-phone"></i></span> &nbsp;704-985-3148</p>
                <br/>
                <p><span><i className="fas fa-envelope"></i></span> &nbsp;tlpbaby@yahoo.com</p>
                <br/>
                <p><span><i className="fas fa-clock"></i></span> Monday - Friday: 9:00 AM - 5:00 PM </p>
            </div>
            <br/>
          </div>
        </div>
      </div>
      <section className='social-media'>
          <small className='website-rights'>Helping Hands Handyman © 2020 | Designed by brntMedia</small>
      </section>
    </div>
  );
}

export default Footer;