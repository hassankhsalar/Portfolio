import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import SocialMediaTab from '../components/SocialMediaTab';

const MainLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <SocialMediaTab></SocialMediaTab>
        </div>
    );
};

export default MainLayout;