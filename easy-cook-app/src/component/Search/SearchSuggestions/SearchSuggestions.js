import React, { Component } from 'react'
import classes from './SearchSuggestions.module.css'


const SearchSuggestions = (props) => {

    
    let suggestions, hideSuggestionClass
    

    if(props.inputValue === '' || props.showSuggestion === true){
        hideSuggestionClass = classes.HideSuggestions
    }

    if(props.recipeDatas === " "){
    suggestions = <div> no results</div>
    }

    if(props.recipeDatas !== null){
        suggestions = props.recipeDatas.map( (ingredient, index) => {
            return <li key={index} onClick={props.selectedSuggestion.bind(this, ingredient)} >{ingredient}</li>

        })
    }
    
    return <div className={hideSuggestionClass}>
        <ul>
            {suggestions}
        </ul>
    </div>
}


export default SearchSuggestions