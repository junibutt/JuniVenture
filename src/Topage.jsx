import React from 'react';
import mountain from './assets/mountain6.jpg';
import Navbar from './Navbar';
import HeaderContent from './HeaderContent';

function Topage() {
  return (
    <section
      className="h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${mountain})` }}
    >


      <Navbar/>
      <HeaderContent/>
    </section>
  );
}

export default Topage;
