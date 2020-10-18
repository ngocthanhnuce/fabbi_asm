import React, { useContext } from 'react';

import { Divider, Button } from 'antd';
import {multiStepContext} from '../StepContext';


const Review = () =>{
    const { setStep, data } = useContext(multiStepContext);
   
    return (
        <div className='body'>
            <div>
                <div>
                    <h4>Meal: {data.meal.value}</h4>
                </div>
                <div>
                    <h4>No of People: {data.numberPeople}</h4>
                </div>
                <div>
                    <h4>Restaurant: {data.restaurant.value}</h4>
                </div>
            </div>
            <Divider orientation="left">List</Divider>
            {/* {
              data.Dish.map(item => (<p>{item.value}</p>))
            } */}
            <h4>Dish: {data.dish.value}</h4>
            <h4>numberDish: {data.numberDish}</h4>
            <div className='btn'>
                <div className='button1'>
                    <Button  onClick={()=> setStep(2)}>Previous</Button>
                </div>
           </div>
        </div>
    )
}

export default Review;