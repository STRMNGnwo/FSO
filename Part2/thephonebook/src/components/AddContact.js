import React from 'react';
const AddContact=(props)=>{

   
    return(
        <>
        <form onSubmit={props.submitFunction}>
        <label htmlFor={props.nameID}>{props.nameID.toUpperCase()}: </label>
        <input id={props.nameID} value={props.name} onChange={props.changeNameFunc}/>

        <label htmlFor={props.numberID}>{props.numberID.toUpperCase()}: </label>
        <input id={props.numberID} value={props.number} onChange={props.changeNumberFunc}/>

        <button type="submit">Submit</button>

        </form>

        </>
    )

}

export default AddContact