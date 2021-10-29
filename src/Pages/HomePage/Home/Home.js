import React from 'react';
import Banner from '../Banner/Banner';
import Destination from '../Destinations/Destination';
import HomePackage from '../HomePackage/HomePackage';
import HomePackages from '../HomePackages/HomePackages';
import WhyChooseUs from '../WhyChooseUs/WhyChooseUs';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <HomePackages></HomePackages>
            <Destination></Destination>
            <WhyChooseUs></WhyChooseUs>
        </div>
    );
};

export default Home;