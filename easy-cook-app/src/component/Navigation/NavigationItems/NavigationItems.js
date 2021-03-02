import React from 'react'
import classes from './NavigationItems.module.css'
import NavigationItem from './NavigationItem/NavigationItem'


const NavigationItems = (props) => {
    return(
    <ul>
        <NavigationItem>Settings</NavigationItem>
        <NavigationItem>My Recipes</NavigationItem>
        <NavigationItem>My Account</NavigationItem>

    </ul>
    ) 
    
}

export default NavigationItems