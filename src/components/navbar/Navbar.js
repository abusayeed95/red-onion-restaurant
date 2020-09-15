import React from 'react';
import { Button, Grid } from '@material-ui/core';
import logo from '../../assets/logo2.png';
import '../navbar/navbar.css';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

const Navbar = () => {
    return (
        <Grid container className="py-3 navbar">
            <Grid item xs={2}>
                <img src={logo} alt="logo" className="img-fluid" />
            </Grid>
            <Grid item xs={7} />
            <Grid container item xs={3}>
                <Grid item xs={4}>
                    <Button color="secondary" size="large"><ShoppingCartIcon /></Button>
                </Grid>
                <Grid item xs={4}><Button variant="contained" color="primary">Login</Button></Grid>
                <Grid item xs={4}><Button variant="contained" color="secondary">Sign up</Button></Grid>
            </Grid>
        </Grid>
    );
};

export default Navbar;