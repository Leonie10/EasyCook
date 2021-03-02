import React from 'react'
import classes from './Button.module.css'

const Button = (props) => {
    let classname = classes.Button
    
    if(props.clicked === true){
        classname = classes.Button + " " + classes.Clicked
    }
    
    return <button className={classname} value={props.value} onClick={props.onClick} >{props.name}</button>

}


export default Button