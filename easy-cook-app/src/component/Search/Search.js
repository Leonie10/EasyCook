import React, { Component } from 'react'
import SearchBar from './SearchBar/SearchBar'
import classes from './Search.module.css'
import SearchSuggestions from './SearchSuggestions/SearchSuggestions'
import Ingredients from './Ingredients/Ingredients'


class Search extends Component{
    state = {
        inputValue: '',
        ingredientsSearched: null,
        recipeDatas: null,
        selectedSuggestion: false
    }

    
    componentDidUpdate() {
        // .join(' ')
        if(this.state.inputValue !== ' '){
            fetch("https://api.spoonacular.com/food/ingredients/search?apiKey=04dfcc4fb0bf42fca4548fcd8793f114&query=" + this.state.inputValue + "&number=5")
            .then(response => response.json())
            .then(data => {
                if(this.state.recipeDatas === null){
                    this.setState({recipeDatas: data.results.map(item => item.name)})
                }  else if(this.state.recipeDatas !== null){
                   const prevrecipeDatas = this.state.recipeDatas.join('')
                   const currrecipeDatas = data.results.map(item => item.name).join('')
                   if(prevrecipeDatas !== currrecipeDatas){
                    this.setState({recipeDatas: data.results.map(item => item.name)})
                    }
                }
            })
            .catch(err => {
                console.error(err);
            });
        }

        
    }
    
    inputSearchHandler = (e) => {
        this.setState({inputValue: e.target.value, selectedSuggestion: false}) 
    }  
   
    selectedHandler = (suggestion) => {
            
            const ingredients = this.state.ingredientsSearched === null? [suggestion] : [...this.state.ingredientsSearched, suggestion]
            this.setState({selectedSuggestion: true, ingredientsSearched: ingredients, inputValue: '' })
            if(this.props.mainSearch === false){
                this.props.ingredientsSearched(ingredients)
            }else{
                return
            }
            
       
    }

    removeIngredientsHandler = (ingredient) => {
        const newIngredientsSearched = this.state.ingredientsSearched.filter( ingredients => ingredients !== ingredient)
        this.setState({ingredientsSearched: newIngredientsSearched})
        this.props.ingredientsSearched(newIngredientsSearched)
    }

   
    submitSearchHandler =  (e) => {
        e.preventDefault()
        const ingredients = this.state.ingredientsSearched? this.state.ingredientsSearched.join(',') :  null
        this.props.ingredientsSearched(ingredients)
    }

    
    render(){
        
        
    return <div className={classes.Search}>
        
        <Ingredients ingredientsSearched={this.state.ingredientsSearched} removeIngredients={this.removeIngredientsHandler} /> 
        <SearchBar 
        inputChanged={this.inputSearchHandler} 
        class={this.props.searchBarClass}
        selectedSuggestion={this.state.inputValue}
        mainSearch={this.props.mainSearch}
        searchOnClick={this.submitSearchHandler}
        /> 

        <SearchSuggestions 
        recipeDatas={this.state.recipeDatas} 
        class={this.props.suggestionsClass} 
        inputValue={this.state.inputValue}
        selectedSuggestion={this.selectedHandler}
        showSuggestion={this.state.selectedSuggestion}
         />
    </div>

    }
        
}


export default Search