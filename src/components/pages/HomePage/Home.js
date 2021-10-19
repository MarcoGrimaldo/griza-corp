import React from 'react';
import HeroSection from '../../HeroSection';
import Cards from '../../Cards';
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from './Data';
import Pricing from '../../Pricing';

function Home() {
  return (
    <>
      <HeroSection {...homeObjOne} />
      <HeroSection {...homeObjThree} />
      <HeroSection {...homeObjTwo} />
      <Pricing />
      <Cards />
    </>
  );
}

export default Home;
