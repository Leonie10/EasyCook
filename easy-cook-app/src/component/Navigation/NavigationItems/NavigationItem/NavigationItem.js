import React from 'react'
import classes from './NavigationItem.module.css'


const NavigationItem = (props) => {
    return <li><a href="/">{props.children}</a></li>
}

export default NavigationItem