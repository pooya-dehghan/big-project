import React from 'react'
import LogoBurger from '../../assets/images/burger-logo.png'
import styled from 'styled-components'
const Logo = (props) => (
    <LOgo style={{height : props.height}}>
        <img src = { LogoBurger } alt='logo-burger' style={{ height:'100%' }}/>
    </LOgo>
)


const LOgo = styled.div`

    background-color:white;
    padding:8px;
    height:80%;
    box-sizing:border-box;
    border-radius:100px;
    margin-bottom:0px
`
export default Logo