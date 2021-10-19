import React from 'react';
import { Button } from './Button';
import './Pricing.css';
import { FaFire } from 'react-icons/fa';
import { BsXDiamondFill } from 'react-icons/bs';
import { GiCrystalize } from 'react-icons/gi';
import { IconContext } from 'react-icons/lib';
import { Link } from 'react-router-dom';

function Pricing() {
  return (
    <IconContext.Provider value={{ color: '#fff', size: 64 }}>
      <div className='pricing__section'>
        <div className='pricing__wrapper'>
          <h1 className='pricing__heading'>Precios 💸</h1>
          <div className='pricing__container'>
            <Link to='/sign-up' className='pricing__container-card'>
              <div className='pricing__container-cardInfo'>
                <div className='icon'>
                  <FaFire />
                </div>
                <h3>Rápido</h3>
                <h4>$99</h4>
                <p>USD</p>
                <ul className='pricing__container-features'>
                  <li>Página Web</li>
                  <li>3 Meses de Soporte</li>
                  <li>$1,999 MXN</li>
                </ul>
                <Button buttonSize='btn--wide' buttonColor='primary'>
                ¡Vamos!
                </Button>
              </div>
            </Link>
            <Link to='/sign-up' className='pricing__container-card'>
              <div className='pricing__container-cardInfo'>
                <div className='icon'>
                  <BsXDiamondFill />
                </div>
                <h3>Normal</h3>
                <h4>$169</h4>
                <p>USD</p>
                <ul className='pricing__container-features'>
                  <li>Página Web Customizada</li>
                  <li>6 Meses de Soporte</li>
                  <li>$3,499 MXN</li>
                </ul>
                <Button buttonSize='btn--wide' buttonColor='blue'>
                ¡Vamos!
                </Button>
              </div>
            </Link>
            <Link to='/sign-up' className='pricing__container-card'>
              <div className='pricing__container-cardInfo'>
                <div className='icon'>
                  <GiCrystalize />
                </div>
                <h3>Diamante</h3>
                <h4>$299</h4>
                <p>USD</p>
                <ul className='pricing__container-features'>
                  <li>Diseño Original</li>
                  <li>6 Meses de Soporte</li>
                  <li>$5,999 MXN</li>
                </ul>
                <Button buttonSize='btn--wide' buttonColor='primary'>
                  ¡Vamos!
                </Button>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </IconContext.Provider>
  );
}
export default Pricing;
