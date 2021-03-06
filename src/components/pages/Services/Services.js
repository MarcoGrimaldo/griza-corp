import React from 'react';
import HeroSection from '../../HeroSection';
import { homeObjThree } from './Data';
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
