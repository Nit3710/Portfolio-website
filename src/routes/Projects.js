import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Hero2 from '../components/Hero2';
import PriceCard from '../components/PriceCard';
import Work from '../components/Work';

const Projects = () => {
    return (
        <div>
            <Navbar />
            <Hero2 heading="MY PROJECTS" text='Some of my most recent works' />
            <Work/>
            <PriceCard/>
            <Footer />


        </div>
    )
}

export default Projects
