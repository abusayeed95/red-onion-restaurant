import './foods.css';
import React, { useState } from 'react';
import { foodItems } from '../../assets/foodItems/foodItems';
import FoodArea from '../foodArea/FoodArea';
import { Button, Grid } from '@material-ui/core';
import FoodDetails from '../foodDetails/FoodDetails';

const Foods = () => {
    const breakfast = foodItems.filter(breakfast => breakfast.category === 'breakfast');

    const lunch = foodItems.filter(lunch => lunch.category === 'lunch');

    const dinner = foodItems.filter(dinner => dinner.category === 'dinner');

    const [foods, setFoods] = useState(lunch);

    const handleCategory = (category) => {
        setFoods(category)
    };

    const handleItem = (id) => {
        const food = foods.filter(fd => fd.id === id);
        return food;
    };

    return (
        <div>
            <div>
                <nav className="d-flex justify-content-center align-items-center">
                    <button className="btn" href="/" onClick={() => handleCategory(breakfast)}>Breakfast</button>
                    <button className="btn" href="/" onClick={() => handleCategory(lunch)}>Lunch</button>
                    <button className="btn" href="/" onClick={() => handleCategory(dinner)}>Dinner</button>
                </nav>
                <Grid container direction="row" justify="space-around">
                    {
                        foods.map(foodItem => <FoodArea foodItem={foodItem} handleItem={handleItem} />)
                    }
                </Grid>
                <div className="text-center my-3"><Button variant="contained" color="secondary">Checkout Your Food</Button></div>
            </div>
        </div>
    )
}
export default Foods;
//     const wholeList = `<div>
//         <nav className="d-flex justify-content-center align-items-center">
//             <button className="btn" href="/" onClick={() => handleCategory(breakfast)}>Breakfast</button>
//             <button className="btn" href="/" onClick={() => handleCategory(lunch)}>Lunch</button>
//             <button className="btn" href="/" onClick={() => handleCategory(dinner)}>Dinner</button>
//         </nav>
//         <Grid container direction="row" justify="space-around">
//             {
//                 foods.map(foodItem => <FoodArea foodItem={foodItem} handleItem={handleItem} />)
//             }
//         </Grid>
//         <div className="text-center my-3"><Button variant="contained" color="secondary">Checkout Your Food</Button></div>
//     </div>`;
//     const listItem = `<nav className="d-flex justify-content-center align-items-center">
//         <button className="btn" href="/" onClick={() => handleCategory(breakfast)}>Breakfast</button>
//         <button className="btn" href="/" onClick={() => handleCategory(lunch)}>Lunch</button>
//         <button className="btn" href="/" onClick={() => handleCategory(dinner)}>Dinner</button>
//     </nav>
//     {
//         food.map(fd => <FoodDetails food={fd} />)
//     }`;

//     return (
//         <div>
//             {
//                 food.length > 0 ? listItem : wholeList
//             }
//         </div>
//     );
// }



// export default Foods;
//         if (food.length > 0) {
//             return (
//                 <div>
//                     <nav className="d-flex justify-content-center align-items-center">
//                         <button className="btn" href="/" onClick={() => handleCategory(breakfast)}>Breakfast</button>
//                         <button className="btn" href="/" onClick={() => handleCategory(lunch)}>Lunch</button>
//                         <button className="btn" href="/" onClick={() => handleCategory(dinner)}>Dinner</button>
//                     </nav>
//                     <Grid container direction="row" justify="space-around">
//                         {
//                             foods.map(foodItem => <FoodArea foodItem={foodItem} handleItem={handleItem} />)
//                         }
//                     </Grid>
//                     <div className="text-center my-3"><Button variant="contained" color="secondary">Checkout Your Food</Button></div>
//                 </div>
//             )
//         }
//         else {
//             return (
//                 <div>
//                     {
//                         food.map(fd => <FoodDetails food={fd} />)
//                     }
//                 </div>
//             )
//         }
//     }

// };

//     if (food.length > 0) {
//         return (
//             <div>
//                 <nav className="d-flex justify-content-center align-items-center">
//                     <button className="btn" href="/" onClick={() => handleCategory(breakfast)}>Breakfast</button>
//                     <button className="btn" href="/" onClick={() => handleCategory(lunch)}>Lunch</button>
//                     <button className="btn" href="/" onClick={() => handleCategory(dinner)}>Dinner</button>
//                 </nav>
//                 <Grid container direction="row" justify="space-around">
//                     {
//                         foods.map(foodItem => <FoodArea foodItem={foodItem} handleItem={handleItem} />)
//                     }
//                 </Grid>
//                 <div className="text-center my-3"><Button variant="contained" color="secondary">Checkout Your Food</Button></div>
//             </div>
//         )
//     }
//     else {
//         return (
//             <div>
//                 {
//                     food.map(fd => <FoodDetails food={fd} />)
//                 }
//             </div>
//         )
//     }
// }
// export default Foods;