import React, { Component } from 'react'

const Recipe = (props) => {

    const image = props.image !== null? <img src={props.image}/> : null

    const cuisines = props.cuisines.length > 0 ? props.cuisines.map((cuisine,index) => {
        return <p key={index}>{cuisine}</p>
    }) : null

    const calories = props.calories !== null ? <p>{props.calories.toFixed(0)} Kcal</p> : null

    const readyTime = props.readyTime !== null? <p>Ready in {props.readyTime} min</p> : null

    const instructions = props.instructions !== null ?  <div>
    <h3>Instructions</h3>
    {props.instructions.map((instruction, index) => {
        return <p key={index}>{instruction.step}</p>
    })}
   </div>  : null

  
    const missedIngredients = props.ingredients[0].map((ingredient,index) => {
        return <div key={index}>
            <p>{ingredient.originalString}</p>
        </div>
    })
    const usedIngredients = props.ingredients[1].map((ingredient,index) => {
        return <div key={index}>
            <p>{ingredient.amount + ' ' + ingredient.unit + ' ' + ingredient.name}</p>
        </div>
    })


    const glutenFree = props.glutenFree === true? <p>Gluten Free</p> : null


    
    
    return (<div>
            <h2>{props.title}</h2>
            {image}
            {cuisines}
            {calories}
            {readyTime}
            {glutenFree}
            <div>
                <h3>Ingredients</h3>
                {missedIngredients}
                {usedIngredients}

            </div>
            {instructions}
    </div>)
}

export default Recipe

