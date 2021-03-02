import React, { Component } from 'react'
import Aux from '../../hoc/Aux/Aux'
import Search from '../../component/Search/Search'
import Recipes from '../../component/Recipes/Recipes'
import FilterBar from '../../component/Filter/FilterBar/FilterBar'


class SearchRecipes extends Component{

    state = { 
        ingredientsSearched: null,
        filterValues: null,
        recipes: null

    }

    componentDidUpdate(){
        
        if(this.state.ingredientsSearched !== null && this.state.ingredientsSearched.length !== 0){
            if(!this.state.filterValues){  
                
            fetch('https://api.spoonacular.com/recipes/complexSearch?apiKey=04dfcc4fb0bf42fca4548fcd8793f114&addRecipeInformation=true&fillIngredients=true&includeIngredients='
            + this.state.ingredientsSearched)
            .then(response => response.json())
            .then(data => {
                if(this.state.recipes === null){

                    this.setState({recipes: data.results})

                }  else if(this.state.recipes !== null){

                const prevDatas = this.state.recipes.map(recipe => recipe.id).join('')
                const currDatas = data.results.map(recipe => recipe.id).join('')
               

                if(prevDatas !== currDatas){
                    this.setState({recipes: data.results})
                    }
                }
            })

            .catch(err => {
                console.error(err);
            });

            }

            if(this.state.filterValues){

               const diet = this.state.filterValues.diet? '&diet=' + this.state.filterValues.diet : ''
               const type = this.state.filterValues.type? '&type=' + this.state.filterValues.type : ''
               const maxReadyTime = '&maxReadyTime=' + this.state.filterValues.maxReadyTime
               const maxCalories = '&maxCalories=' + this.state.filterValues.maxCalories

               let cuisine
               const cuisineState = this.state.filterValues.cuisine
               if(this.state.filterValues.cuisine.length > 0){
                cuisine = cuisineState.length > 1? '&cuisine=' + cuisineState.join(',') : '&cuisine=' + cuisineState.join('')
               }else {
                cuisine = ''
               }

               const url = 'https://api.spoonacular.com/recipes/complexSearch?apiKey=04dfcc4fb0bf42fca4548fcd8793f114&number=40&addRecipeInformation=true&instructionsRequired=true&includeIngredients=' 
               + this.state.ingredientsSearched + type + diet + cuisine +  maxReadyTime + maxCalories 
               console.log(url)
               fetch(url)
               .then(response => response.json())
               .then(data => {
                   if(this.state.recipes === null){
                       this.setState({recipes: data.results})
                   }  else if(this.state.recipes !== null){
                   const prevDatas = this.state.recipes.map(recipe => recipe.id).join('')
                   const currDatas = data.results.map(recipe => recipe.id).join('')
                   if(prevDatas !== currDatas){
                       this.setState({recipes: data.results})
                       }
                   }
               })
               .catch(err => {
                   console.error(err);
               });

            } 
            
        }


    }

    getIngredientsSearch = (ingredients) => {
        this.setState({ingredientsSearched: ingredients})
    }

    getFilterValues = (values) => {
        this.setState({filterValues: values})
    }

   
    render(){
        console.log(this.state.ingredientsSearched)
        console.log(this.state.filterValues)
        console.log(this.state.recipes)
        return <Aux>
            <Search ingredientsSearched={this.getIngredientsSearch} mainSearch={true}/>
            <Recipes recipes={this.state.recipes} />
            <FilterBar filterValues={this.getFilterValues}/>
            
        </Aux>
    }
}

export default SearchRecipes