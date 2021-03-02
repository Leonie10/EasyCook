import React, { Component } from 'react'


const Ingredients = (props) => {

    const removeIngredientsHandler = (e) => {
        props.removeIngredients(e.target.parentElement.firstElementChild.innerHTML)
    }
    let ingredients

        if(props.ingredientsSearched !== null){

            ingredients = props.ingredientsSearched
            .map(ingredient => {
                return <div key={ingredient}>
                            <li >{ingredient}</li>
                            <button>x</button>
                        </div>
            })

        } else {

            ingredients = null
        }


    return <ul onClick={removeIngredientsHandler}>
        {ingredients}
    </ul>

}


export default Ingredients