import React, { Component } from 'react'
import styled from 'styled-components'
import BuildControl from './BuildControl'
import {connect} from 'react-redux'
const controls = [
    {
        label:'Salad',
        type:'salad'
    },
    {
        label: 'Bacon',
        type: 'bacon'
    },
    {
        label: 'Cheese',
        type: 'cheese'
    },
    {
        label: 'Meat',
        type: 'meat'
    },
]
const prices = {
    bacon: 0.7,
    salad: 0.2,
    meat: 0.9,
    cheese: 1.4
}

class BuildControls extends Component{
    
    render() {
        const disabled = {
            ...this.props.brg
        }
        for(let each in disabled){
            disabled[each] = disabled[each] <= 0
        }
        let totalPrice = 4
        let ingredients = {...this.props.brg}
        for(let ing in ingredients ){
            totalPrice = totalPrice + (ingredients[ing]*prices[ing])
        }
        let rew = true
        const sum = Object.keys(disabled)
        let result = sum.map((ing) => (disabled[ing]))
        console.log(result)
        result.map((val) => {
            rew = rew && val
            console.log(rew)
        })
    return(
    <Buildcontrols>
    <TotalPrice>{ totalPrice.toFixed(2) } dollars</TotalPrice>
    {controls.map((identifier) =>
        {  
        return (
            <BuildControl 
                key= {identifier.label}
                label = {identifier.label}
                addIngredient = { () => this.props.onIngredientAdd(identifier.type)}
                removeIngredient = { () => this.props.onIngredientDelete(identifier.type)}
                disabled = { disabled[identifier.type] }
            />
            )
        }
    )
}
    <SubmitButton  
        onClick = { this.props.ordered }
        disabled = { rew }
    >
    Order
    </SubmitButton>
    </Buildcontrols>
        )
    }
}   
const mapStateToProps = state => {
    return{
        brg : state.brg.ingredients,
        prc : state.brg.totalPrice
    }
}

const mapDispatchToProps = dispatch => {
    return{
        onIngredientAdd: (idn) => dispatch({type:'ON_INGREDIENTS_ADD',identifier:idn}),
        onIngredientDelete: (idn) => dispatch({type:'ON_INGREDIENTS_DELETE',identifier:idn})
    }
}

const Buildcontrols = styled.div`
    width: 100%;
    background-color:#CF8F2E;
    display: flex;
    flex-flow: column;
    align-items:center;
    justify-content:center;
    box-shadow:0 2px 1px #ccc;
    margin: auto;
    padding: 10px 0
`
const TotalPrice = styled.p`
    dispaly: flex;
    flex-flow:center;
    color: white;
    font-size:26px;

`
const SubmitButton = styled.button`
    background-color: #DAD735;
    outline: none;
    cursor: pointer;
    border: 1px solid #966909;
    color: #966909;
    font-family: inherit;
    font-size: 1.2em;
    padding: 15px 30px;
    box-shadow: 2px 2px 2px #966909;


    &:hover:active{
    background-color: #A0DB41;
    border: 1px solid #966909;
    color: #966909;
    }

    &:disabled{
    background-color: #C7C6C6;
    cursor: not-allowed;
    border: 1px solid #ccc;
    color: #888888;
    }

    &not(:disabled){
    animation: enable 0.3s linear;
    }
    
`

export default connect(mapStateToProps,mapDispatchToProps)(BuildControls)