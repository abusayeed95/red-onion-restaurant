import {
    Grid
} from '@material-ui/core';
import React from 'react';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import './service.css'

const Service = (props) => {
    const {
        img,
        title,
        description,
    } = props.service;
    console.log(props.service)

    return (<Grid item xs={4} >
        <div className="service-container">
            <img className="service-img" src={img} alt={title} />
            <div className="h-100 content d-flex flex-column justify-content-center align-items-center">
                <h3>{title}</h3>
                <p>{description}</p>
                <a href="/home">see more <ArrowForwardIcon /></a>
            </div>
        </div>
    </Grid>
    );
};

export default Service;