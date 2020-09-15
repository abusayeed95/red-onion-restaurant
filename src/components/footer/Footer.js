import { Grid } from '@material-ui/core';
import React from 'react';
import './footer.css';
import logo from '../../assets/logo2.png';

const Footer = () => {
    return (
        <div className="footer">
            <Grid container>
                <Grid item xs={1} />
                <Grid item xs={7}>
                    <img src={logo} alt="logo" className="footer-logo" />
                </Grid>
                <Grid item xs={2}>
                    <div className="d-flex flex-column links">
                        <a href="http://fb.com/sayeedsayem.95">About Online Food</a>
                        <a href="http://fb.com/sayeedsayem.95">Read Our Blog</a>
                        <a href="http://fb.com/sayeedsayem.95">Sign Up to Deliver</a>
                        <a href="http://fb.com/sayeedsayem.95">Add Your Restaurant</a>
                    </div>
                </Grid>
                <Grid item xs={2}>
                    <div className="d-flex flex-column links">
                        <a href="http://fb.com/sayeedsayem.95">Get Help</a>
                        <a href="http://fb.com/sayeedsayem.95">Read FAQs</a>
                        <a href="http://fb.com/sayeedsayem.95">view All Items</a>
                        <a href="http://fb.com/sayeedsayem.95">Restaurants Near You</a>
                    </div>
                </Grid>
                <Grid item xs={1} />
                <Grid item xs={7}>
                    <small style={{ margin: '2rem', display: 'inline-block' }}>Copyright © 2020 Online Food</small>
                </Grid>
                <Grid item xs={4}>
                    <div className="d-flex flex-row bottom">
                        <a href="http://fb.com/sayeedsayem.95">Privacy Policy</a>
                        <a href="http://fb.com/sayeedsayem.95">Terms of Use</a>
                        <a href="http://fb.com/sayeedsayem.95">Pricing</a>
                    </div>
                </Grid>
            </Grid>
        </div>
    );
};

export default Footer;