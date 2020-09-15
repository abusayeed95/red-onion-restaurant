import React from 'react';
import './whyUs.css';
import {
    Grid
} from '@material-ui/core';
import {
    services
} from '../../assets/services/Services';
import Service from '../services/Service';

const WhyUs = () => {
    return (
        <div className="p-3 my-5" >
            <div className="text-area my-3" >
                <h3> Why Should You Choose Us... ? </h3>
                <p> Lorem ipsum dolor sit amet consectetur adipisicing elit.Earum dolorem quasi perspiciatis voluptatum dolore voluptatem aliquam ? </p>
            </div>
            <Grid container spacing={3} direction="row" alignItems="center" justify="center" >
                {services.map(service => < Service service={service} />)}
            </Grid>
        </div>
    );
};

export default WhyUs;