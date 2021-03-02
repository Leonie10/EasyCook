
import React from 'react'

const SearchBar = (props) => {
    const btn = props.mainSearch === true ? <button onClick={props.searchOnClick}>Search</button> : null
    const onBlurAction = props.mainSearch ===  false ? props.excludedIngredients  : null
    
    return <div className={props.class}>
        <input type="text" onBlur={onBlurAction} onChange={props.inputChanged} value={props.selectedSuggestion} />
        {btn}
     </div>
}
export default SearchBar