import React from 'react'
import styled from 'styled-components'
const backDrop = (props) => {
    return(
        props.show ? <BackDrop onClick = {props.canceled}></BackDrop> : null
    )
}

const BackDrop = styled.div`
    width:100%;
    height:100%;
    position:fixed;
    z-index:100;
    left:0;
    top:0;
    background-color:rgb(0,0,0,0.5)

`
export default backDrop