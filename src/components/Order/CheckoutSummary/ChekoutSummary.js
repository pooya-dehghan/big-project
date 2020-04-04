import React from 'react'
import Burger from '../../Burger/Burger/Burger'
import Button from '../../../components/UI/Button/Button'
import classes from './CheckoutSummer.module.css'
const CheckoutSummary = (props) => {
    return(
        <div className = {classes.checkdiv}>
            <h1>WE Hope It Tastes  Good</h1>
            <div style = {{width:'300px',height:'300px',margin:'auto'}}>
                <Burger ingridients = {props.ingredients}/>
            </div>
            <Button btnType="Danger" clicked = { props.CancelHandler }>CANCEL</Button>
            <Button btnType="Success" clicked = { props.ContinueHandler }>CONTINUE</Button>

        </div>
    )

}

export default CheckoutSummary