import React from 'react';
import HeroSection from '../../HeroSection';
import Cards from '../../Cards';
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from './Data';
import Pricing from '../../Pricing';
import CotizaBtn from '../../CotizaBtn'

function Home() {
  return (
    <>
      <HeroSection {...homeObjOne} />
      <HeroSection {...homeObjThree} />
      <Cards />
      <Pricing />
      <CotizaBtn />
      <HeroSection {...homeObjTwo} />
      
      
    </>
  );
}

export default Home;
