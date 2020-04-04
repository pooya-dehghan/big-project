import React from 'react'
import styled from 'styled-components'

const BuildControl = (props) => {
    return(
        <BuildControlDiv>
            <Label>{props.label}</Label>
            <BuildControlButtonLess 
                onClick = { props.removeIngredient } 
                disabled = {props.disabled}
            >
            Less
            </BuildControlButtonLess>
            <BuildControlButtonMore 
                onClick = { props.addIngredient }
            >
             More
            </BuildControlButtonMore>
        </BuildControlDiv>
    )
}


const BuildControlDiv = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    justify-content:center;
    margin: 5px 0;
`
const BuildControlButtonLess = styled.button`
    display: block;
    font: inherit;
    padding: 5px;
    margin: 0 5px;
    width: 80px;
    border: 1px solid #AA6817;
    cursor: pointer;
    outline: none;
    background-color: #D39952;
    color : white;

    &:disabled {
        background-color: #AC9980;
        border: 1px solid #7E7365;
        color: #ccc;
        cursor: default;
    }
    &:hover:disabled {
        background-color: #AC9980;
        color: #ccc;
        cursor: not-allowed;
    }
    &:hover{
        background-color: #DAA972;
        color: white;
    }
`
const BuildControlButtonMore = styled.button`
    display: block;
    font: inherit;
    padding: 5px;
    margin: 0 5px;
    width: 80px;
    border: 1px solid #AA6817;
    cursor: pointer;
    outline: none;
    background-color: #8F5E1E;
    color: white;

    &:disabled {
        background-color: #AC9980;
        border: 1px solid #7E7365;
        color: #ccc;
        cursor: default;
    }
    &:hover:disabled {
         background-color: #AC9980;
        color: #ccc;
        cursor: not-allowed;
    }

    &:hover{
        background-color: #99703F;
        color: white;
    }

`
const Label = styled.div`
    padding: 10px;
    font-weight: bold;
    width: 80px;
`


export default BuildControl