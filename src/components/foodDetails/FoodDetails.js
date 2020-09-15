import { Button, Grid } from '@material-ui/core';
import React from 'react';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

const FoodDetails = () => {
    return (
        <Grid container direction="row" justify="center" alignItems="center">
            <Grid xs={1} />
            <Grid item xs={5}>
                <h1>Light Breakfast</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias sunt quaerat minus aliquam consectetur provident sapiente excepturi rerum ea tempora, ipsa fuga. Harum laborum in alias labore quidem enim ipsam.
                </p>
                <h2>$ 10 <span><Button>-</Button><input type="number" /><Button>+</Button></span></h2>
                <button className="btn"><ShoppingCartIcon />Add</button>
            </Grid>
            <Grid item xs={5}>
                <img className="img-fluid" src="https://i.ibb.co/Wndpbfn/breakfast3.png" alt="food" />
            </Grid>
            <Grid xs={1} />
        </Grid>
    );
};

export default FoodDetails;