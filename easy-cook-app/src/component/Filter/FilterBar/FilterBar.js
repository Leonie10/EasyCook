import React, { Component } from 'react'
import SearchSuggestions from '../../Search/SearchSuggestions/SearchSuggestions'
import Search from '../../Search/Search'
import searchClass from '../../Search/Search.module.css'
import suggestionsClass from '../../Search/SearchSuggestions/SearchSuggestions.module.css'
import Button from '../../UI/Button/Button'
import classeBtn from '../../UI/Button/Button.module.css'
import Filter from '../Filter'


class FilterBar extends Component {

    state = {
        type: null,
        diet: null,
        cuisine: [],
        maxReadyTime: 40,
        maxCalories: 600,
        ingredientExcluded: null
    }

    typeOnChangeHandler = (e) => {
        let type = this.state.type === e.target.value? null : e.target.value
        this.setState({type: type})
    }


    dietOnChangeHandler = (e) => {
        let diet = this.state.diet === e.target.value? null : e.target.value
        this.setState({diet: diet})
    }

    cuisineAddButtonHandler = (value) => {
        return this.state.cuisine.find(cuisine => cuisine === value) === value? true : false
    }

    cuisineOnChangeHandler = (e) => {
        
        let cuisine = this.state.cuisine.length > 0? 

        (this.state.cuisine.includes(e.target.value)? 
        this.state.cuisine.filter(cuisine => cuisine !== e.target.value) 
        : [...this.state.cuisine, e.target.value] )

        : [e.target.value]
        
        this.setState({cuisine: cuisine})
    }


    ingredientExcludedHandler = (ingredient) => {
        this.setState({ingredientExcluded: ingredient })
    }

    maxReadyTimeChangeHandler = (e) => {
        this.setState({maxReadyTime: e.target.value})
    }

    maxCaloriesChangeHandler = (e) => {
        this.setState({maxCalories: e.target.value})
    }    
    
    submitFilterToSearchRecipesHandler = (e) => {
        e.preventDefault()

        let filterValue = {
            type: this.state.type,
            diet: this.state.diet,
            cuisine: this.state.cuisine,
            maxReadyTime: this.state.maxReadyTime,
            maxCalories: this.state.maxCalories,
            ingredientExcluded: this.state.ingredientExcluded,
        }
        this.props.filterValues(filterValue)
        
    }

       
    

    render() {
        console.log(this.state.ingredientExcluded)
        return <div>
                        <h1>Filter</h1>
                        <div>
                            <h2>Type </h2>
                            <Filter filter="types" filterHandler={this.typeOnChangeHandler} filterState={this.state.type} /> 
                        </div>


                        <div>
                            <h2>Diet</h2>
                            <Filter filter="diets" filterHandler={this.dietOnChangeHandler} filterState={this.state.diet} />
                        </div>


                        <div>
                            <h2>Cuisine </h2>
                            <Filter filter="cuisines" filterHandler={this.cuisineOnChangeHandler} filterState={this.cuisineAddButtonHandler}/>
                        </div>

                        <div>
                            <h2>Max Ready Time </h2>
                            <input type="range" min="10" max="400" step="10" value={this.state.maxReadyTime}  onChange={this.maxReadyTimeChangeHandler}/>
                            <div>{this.state.maxReadyTime}min</div>
                            
                        </div>

                        <div>
                            <h2>Max Calories</h2>
                            <input type="range" min="100" max="6000" step="100" value={this.state.maxCalories}  onChange={this.maxCaloriesChangeHandler}/>
                            <div>{this.state.maxCalories}Kcal</div>
                        </div>

                        <div>
                            <h2>Ingredients Excluded</h2>
                            <Search 
                            searchBarClass={searchClass.Search}
                            suggestionsClass={suggestionsClass.SearchSuggestions}
                            ingredientsSearched={this.ingredientExcludedHandler}
                            mainSearch={false} />
                        </div>

                        <button type="submit" onClick={this.submitFilterToSearchRecipesHandler}>Save</button>
                    
            </div>
        }
    
}

export default FilterBar

