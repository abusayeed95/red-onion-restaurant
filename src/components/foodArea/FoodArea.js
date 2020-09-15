import { Grid } from '@material-ui/core';
import React from 'react';
import './foodArea.css'

const FoodArea = (props) => {
    const { title, description, price, img, category, id } = props.foodItem;
    const handleItem = props.handleItem;

    return (
        <Grid item xs={4}>
            <div onClick={() => handleItem(id)} className="d-flex flex-column justify-content-between align-items-center item-container">
                <div className="w-50">
                    <img className="img-fluid" src={img} alt={img} />
                </div>
                <div className="d-flex flex-column justify-content-center align-items-center">
                    <h4>{title}</h4>
                    <p>{description} for {category}</p>
                    <h3>$ {price}</h3>
                </div>
            </div>
        </Grid>
    );
};

export default FoodArea;