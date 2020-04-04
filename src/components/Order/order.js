import React from 'react'
import classes from './order.module.css'
const order = (props) => {
    let ingredients = []
    for (let ingredientName in props.ingredients){
        ingredients.push({
            name:ingredientName,
            amount:props.ingredients[ingredientName]
        })
    }
    let outPut = ingredients.map(ing =>{
        return(
            <div>{ing.name} : {ing.amount}</div>
        )
    })
    return (
        <div className={classes.order}>
            <p>ingredients : {outPut} </p>
            <p>price : <strong>USD {props.price.toFixed(2)}</strong></p>
        </div>
    )
}

export default order