import React from 'react';
import HeroSection from '../../HeroSection';
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from './Data';
import CotizaBtn from '../../CotizaBtn'
import Cards from '../../Cards';

function Services() {
  return (
    <>
      <HeroSection {...homeObjThree} />
      <Cards />
      <CotizaBtn />
    </>
  );
}

export default Services;
