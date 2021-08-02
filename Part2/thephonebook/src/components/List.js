import React from 'react'

const List=(props)=>{

const {name,number,id}= props; //destructing props properties into their own variables.

console.log("id is: ",id);

return(
    <>
     <li className="note" >{name} : {number}</li>
    </>
)

}

export default List;