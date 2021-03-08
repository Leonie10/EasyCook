import React, { Component } from 'react'
import Recipe from './Recipe/Recipe'


const Recipes = (props) => {
    
    let recipes
    if(props.recipes){
        const recipe = [...props.recipes]
        if(props.recipes.length > 1){
            recipe.shift()
        }
        console.log(recipe)
        
        recipes = recipe.length > 0? recipe.map((recipe, index) => {
            const ingredients = [[...recipe.missedIngredients], [...recipe.usedIngredients]]
            const instructions = recipe.analyzedInstructions.length >= 1? recipe.analyzedInstructions[0].steps : null
            console.log(recipe.glutenFree)
            return <Recipe 
            key={index} 
            title={recipe.title} 
            image={recipe.image}
            cuisines={recipe.cuisines}
            calories={recipe.nutrition !== undefined ? recipe.nutrition.nutrients[0].amount : null}
            readyTime={recipe.readyInMinutes}
            instructions={instructions}
            ingredients={ingredients}
            glutenFree={recipe.glutenFree}
            />
        }) : <p>No Results</p>
        
    }
    return <div>

        <div>
            <h1>Recipes</h1>
            {recipes}

        </div>
        
    </div>

}


export default Recipes

