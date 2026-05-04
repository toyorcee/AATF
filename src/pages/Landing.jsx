import React from 'react';
import Hero from '../components/Hero';
import MemberSearch from '../components/MemberSearch';
import About from '../components/About';
import CoreValues from '../components/CoreValues';
import TradeServices from '../components/TradeServices';
import Officials from '../components/Officials';
import BoardMembers from '../components/BoardMembers';
import News from '../components/News';
import LegalDocs from '../components/LegalDocs';
import Apparel from '../components/Apparel';

const Landing = () => {
  return (
    <>
      <Hero />
      <MemberSearch />
      <About />
      <LegalDocs />
      <CoreValues />
      <TradeServices />
      <Apparel />
      <Officials />
      <BoardMembers />
      <News />
    </>
  );
};

export default Landing;
