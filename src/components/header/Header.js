import React from 'react';
import HeadingItem from '../headingItem/HeadingItem';
import Navbar from '../navbar/Navbar';
import './header.css'

const Header = () => {
    return (
        <div className="header">
            <Navbar />
            <HeadingItem />
        </div>
    );
};

export default Header;