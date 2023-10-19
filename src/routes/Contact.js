import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './Contact.css';
import Hero2 from '../components/Hero2';
import Form from '../components/Form';

const Contact = () => {
  return (
    <div>
      <Navbar/>
      <Hero2 heading="MY CONTACT" text="Let's have a chat"/>
      <Form/>

      <Footer/>
    </div>
  );
}

export default Contact;
