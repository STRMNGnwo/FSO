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
    <Part part={props.part1} exercises={props.exercises1}/>
    <Part part={props.part2} exercises={props.exercises2}/>
    <Part part={props.part3} exercises={props.exercises3}/>


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

  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14


  return (
    <div>
      <Header course={course} /> 
      <Content part1={part1} part2={part2} part3={part3} exercises1={exercises1} exercises2={exercises2} exercises3={exercises3} />
      <Total exercises1={exercises1} exercises2={exercises2} exercises3={exercises3}/>
    </div>
  )





}

export default App;
