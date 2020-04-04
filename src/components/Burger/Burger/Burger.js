import React from 'react'
import styled from 'styled-components'
import BurgerIngredients from './BurgerIngredients/BurgerIngredients'
import { connect } from 'react-redux'

const Burger = (props) => {
    let transformedingridients = Object.keys(props.brg)
    .map((ingkey) => {
        return [...Array(props.brg[ingkey])]
    .map(( _, index) => {
            return <BurgerIngredients type={ingkey} />
        })
    })
    .reduce((arr,el) => {
        return arr.concat(el)
    },[])

    if ( transformedingridients.length === 0 ){
        transformedingridients = <p> please insert ingredients </p>
    }
    return (
        <Burgerr>
            <BurgerIngredients type = 'bread-top' />
            { transformedingridients }
            <BurgerIngredients type = 'bread-bottom' />
        </Burgerr>
    )
}
const mapStateToProps = state => {
    return{
        brg: state.brg.ingredients,
    }
}
export default connect(mapStateToProps,null)(Burger) 

const Burgerr = styled.div`
    width: 100%;
    margin: auto;
    height: 250px;
    text-align: center;
    font-weight: bold;
    font-size: 1.2rem;

    @media (min-width: 1000px) and (min-height:700px) {
            width: 700px;
            height: 600px
    }

    @media (min-width: 500px) and (min-height:401px) {
            width: 450px;
            height: 400px
    }

     @media (min-width: 500px) and (min-height:400px) {
            width: 350px;
            height: 300px
    }
`
