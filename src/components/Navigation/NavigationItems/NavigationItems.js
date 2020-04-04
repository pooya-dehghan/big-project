import React from 'react'
import NavigationItem from '../NavigationItem/NavigationItem'
import classes from './NavigationItems.module.css'
const NavigationItems = () => {

    return (
    <ul className={classes.NavigationItems}>
        <NavigationItem link="/" exact>Burger Builder</NavigationItem>
        <NavigationItem link="/orders">Orders</NavigationItem>
    </ul>
    )
}



export default NavigationItems 