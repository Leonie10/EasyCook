import React from 'react'
import Button from '../UI/Button/Button'


const Filter = (props) => {
// filter.split(' ').join('')
// === "Latin American"? "Latin American" : filter.split(' ').join('')
    const types = ["main course","appetizer","dessert", "salad","soup", "sauce","beverage"]
    const diets = ["vegetarian", "vegetalian", "vegan", "gluten free"]
    const cuisines = ["italian", "middle eastern", "french", "chinese", "thai", "japanese","Latin American", "african", "mexican", "indian", "nordic", "american" ]
    const filters = props.filter === "types"? types : (props.filter === "diets"? diets : cuisines)
    // .split(' ').join('')
    return <div>
        {filters.map ((filter, index) => {
            return <Button 
            key={index}
            name={filter.charAt(0).toUpperCase() + filter.slice(1)}
            value={filter }
            onClick={props.filterHandler}
            clicked={props.filter === "types" || props.filter === "diets" ? props.filterState === filter : props.filterState(filter)}
            />
        })}

    </div>
}


export default Filter 