import React from 'react'

const SearchField=(props)=>{

   const {id,value,functionHandle}=props; //value is the state value passed in, functionHandle is used to modify the stateValue

   return(
       <>
      <label htmlFor={id}>{id}: </label>
    <input id={id} value={value} name={id} onChange={functionHandle}/>

       </>
   )
}

export default SearchField