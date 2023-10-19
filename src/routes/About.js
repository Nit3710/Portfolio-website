import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Hero2 from '../components/Hero2';
import Aboutcontact from '../components/Aboutcontact';

const About = () => {
  return (
    <div>
      <Navbar/>
      <Hero2 heading="KNOW ABOUT ME" text="I am a full stack Web developer"/>
      <Aboutcontact/>
      
      <Footer/>
    </div>
  );
}

export default About;
