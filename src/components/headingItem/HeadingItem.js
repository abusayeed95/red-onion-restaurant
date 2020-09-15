import React from 'react';
import './headingItem.css'

const HeadingItem = () => {
    return (
        <div className="heading-item d-flex flex-column align-items-center justify-content-center">
            <h1>Wanna fill up your stomach with junk...!!</h1>
            <input className="search" placeholder="Search Junks Here" type="text" />
        </div>
    );
};

export default HeadingItem;