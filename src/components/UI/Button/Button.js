import React from 'react'
import styled from 'styled-components'

const Button = ( props ) => {
    let button = null
    switch(props.btnType) {
        case('Success') :
        button = <SuccessButton style={{backgroundColor:props.disabled ? '#ccc':'transparent',cursor:props.disabled?'not-allowed':'pointer'}} disabled={props.disabled} onClick = {props.clicked}>{props.children}</SuccessButton>;
        break
        case('Danger') : 
        button = <DangerButton style={{backgroundColor:props.disabled ? '#ccc':'transparent',cursor:props.disabled?'not-allowed':'pointer'}} disabled={props.disabled} onClick = {props.clicked}>{props.children}</DangerButton>;
        break
        default:
        button = null
    }
    return(
        button
    )
}

const SuccessButton = styled.button`
    background-color: transparent;
    border: none;
    color:#5C9210;
    outline: none;
    cursor: pointer;
    font: inherit;
    padding: 10px;
    margin: 10px;
    font-weight: bold;

    :active{
        background-color:rgba(75, 134, 75, 0.801)
    }

`

const DangerButton = styled.button`
    background-color: transparent;
    border: none;
    color:#944317;
    outline: none;
    cursor: pointer;
    font: inherit;
    padding: 10px;
    margin: 10px;
    font-weight: bold;

    :active{
        background-color:rgba(134, 82, 57, 0.774)
    }
`

export default Button