import React from 'react';
import Part from './Part';

const Content=(props)=>{

    console.log("Hello from the Content Component!");

    const parts=props.parts;

    console.log(parts);
  
    const dynamicParts=parts.map((part)=>{ return <Part name={part.name} exercises={part.exercises} key={part.id} /> });
   return( //creating 3 Parts and passing in different inputs to props each time
    <>
      
     {dynamicParts}
  
    </>
   )
  
  }//end of Contents Component

  export default Content;