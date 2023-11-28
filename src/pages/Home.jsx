import React from 'react';
import HeroSection from '../components/HeroSection/HeroSection';
import InfoSection from '../components/InfoSection/InfoSection';
import { data, data1, data2, data3 } from './../components/InfoSection/Data';
import Services from './../components/Services/Service';
import Navbar from './../components/Navbar/Navbar';
import Sidebar from './../components/Sidebar/Sidebar';
import Footer from './../components/Footer/Footer';
import { useState } from 'react';

const Home = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => {
        setIsOpen(prev => !prev);
    }
    return (
        <div>
            <Navbar toggle={toggle} />
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <HeroSection />
            <InfoSection  {...data} />
            <InfoSection {...data1} />
            <InfoSection {...data2} />
            <Services />
            <InfoSection {...data3} />
            <Footer/>
        </div>

    )
}

export default Home