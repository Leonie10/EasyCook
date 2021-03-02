import React from 'react'
import classes from './ToolBar.module.css'
import Aux from '../../../hoc/Aux/Aux'
import NavigationItems from '../NavigationItems/NavigationItems'
import Logo from '../Logo/Logo'

const ToolBar = (props) => {

    return <Aux>
        <Logo/>
        <NavigationItems/>
    </Aux>
    
}

export default ToolBar
