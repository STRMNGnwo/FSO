import React from 'react';
import Part from './Part';

const Content=(props)=>{
      
    console.log("Hello from the Content Component!");

    const parts=props.parts; //parts now contains the array of part objects

    console.log(parts);
    
    
    const totalExercises=parts.reduce( (sum,part)=>sum+part.exercises,0);

    //reduce takes in a callback function that accepts a sum value and the current element of the index. The 0 at the end is the initial value of sum variable.

    console.log("Total number of exercises: ",totalExercises);
  
    const dynamicParts=parts.map((part)=>{ return <Part name={part.name} exercises={part.exercises} key={part.id} /> });
     
    //the code above creates a Part Component, for every element in the parts array. The created Parts components are returned in an array and are assigned to dynamicParts.
    console.log(dynamicParts);
   return( //creating 3 Parts and passing in different inputs to props each time
    <>
      
     {dynamicParts}
     <p>Total number of exercises: {totalExercises}</p>
  
    </>
   )
  
  }//end of Contents Component

  export default Content;