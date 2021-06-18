import React from 'react'

const Search=(props)=>{

    return(
        <>
        <label htmlFor={props.id}>{props.id.toUpperCase()}</label>
        <input id={props.id} value={props.searchString} onChange={props.changeFunc} />

        </>
    )
}
export default Search