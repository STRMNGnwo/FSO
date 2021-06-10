import React from 'react'

const Header=(props)=>{

  console.log("Hello from the Header Component!");
return(

<h1>{props.course}</h1>
)

}//end of Header component

const Part=(props)=>{

console.log("Hello from the Part Component");

return( //returning a Part Component

    <p>{props.part} {props.exercises}</p>

)


}//end of the Part Component

const Content=(props)=>{

  console.log("Hello from the Content Component!");

 return( //creating 3 Parts and passing in different inputs to props each time
  <>
    <Part part={props.part1.name} exercises={props.part1.exercises}/>
    <Part part={props.part2.name} exercises={props.part2.exercises}/>
    <Part part={props.part3.name} exercises={props.part3.exercises}/>


  </>
 )

}//end of Contents Component

const Total=(props)=>{

  console.log("Hello from the Total Component!");
return(
<p>Number of exercises: {props.exercises1+props.exercises2+props.exercises3}</p>

)

}//end of Total Component
const App=()=>{

  const course={ //creation of a course object, that has a name and an array of parts. 

  name:'Half Stack application development',

  parts:[ //creating an array of objects that represent the different parts of the course.
  {//part 1 of the course 
      name:'Fundamentals of React',
      exercises:10

  },
  {//part 2 of the course
    name:'Using props to pass data',
    exercises:7
  },

  {//part 3 of the course
    name:"State of a component",
    exercises:14
  }
] //end of parts  array 

}//end of the Course object.
  
  return (
    <div>
      <Header course={course.name} /> 
      <Content part1={course.parts[0]} part2={course.parts[1]} part3={course.parts[2]}  />
      <Total exercises1={course.parts[0].exercises} exercises2={course.parts[1].exercises} exercises3={course.parts[2].exercises}/>
    </div>
  )

}

export default App;
