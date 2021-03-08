import React from 'react'
import classes from './ToolBar.module.css'
import Aux from '../../../hoc/Aux/Aux'
import NavigationItems from '../NavigationItems/NavigationItems'
import Logo from '../Logo/Logo'
import video from '../../../assets/video.mp4'


const ToolBar = (props) => {

    return <div >
        <div className={classes.ToolBar}>
        <Logo/>
        <NavigationItems/>
        </div>
        <p className={classes.Paragraph}>Welcome to EasyCook, a fun way to discover easy recipe and yummy. You just have to search for 
        ingredients you have in your fridge or just you 'd like to use for cooking, enjoy !' </p>
        
        <video className={classes.Video} autoPlay loop >
            <source src={video} type="video/mp4"/>
        </video>
    </div>
    
}

export default ToolBar
