import React from 'react'

const List=(props)=>{

const {name,number}= props; //destructing props properties into their own variables.

return(
    <>
     <li className="note" >{name} : {number}</li>
    </>
)

}

export default List;