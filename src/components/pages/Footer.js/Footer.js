import React from 'react';
import './Footer.css';
import { Button } from '../../Button';
import { Link } from 'react-router-dom';
import {
  FaFacebook,
  FaWhatsapp,
} from 'react-icons/fa';
import Logo from '../../../images/gzlogo1.png';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          ¿Necesitas más información?
        </p>
        <p className='footer-subscription-text'>
          ¡Dejanos tu correo y nosotros te contáctamos!
        </p>
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Your Email'
            />
            <Button buttonStyle='btn--outline'>Enviar</Button>
          </form>
        </div>
      </section>
      
      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='footer-logo'>
            <Link to='/' className='social-logo'>
            <img src={Logo} width="30px" alt="logo"></img>
              riza
            </Link>
          </div>
          <small className='website-rights'>GRIZA © 2021</small>
          <div className='social-icons'>
            <a
              className='social-icon-link'
              href='https://www.facebook.com/GrizaWeb'
              aria-label='Facebook'
            >
              <FaFacebook />
            </a>
            
            <a
              className='social-icon-link'
              href='https://api.whatsapp.com/send?phone=5215623737294'
              aria-label='Whatsapp'
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
