import React from 'react';
import Hero from '../components/Hero';
import MemberSearch from '../components/MemberSearch';
import About from '../components/About';
import CoreValues from '../components/CoreValues';
import TradeServices from '../components/TradeServices';
import Officials from '../components/Officials';
import News from '../components/News';

const Landing = () => {
  return (
    <>
      <Hero />
      <MemberSearch />
      <About />
      <CoreValues />
      <TradeServices />
      <Officials />
      <News />
    </>
  );
};

export default Landing;
