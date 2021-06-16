import React from 'react'
import Header from './Header'
import Content from './Content'

const Course=(props)=>{
    
console.log("Props value is: ",props);
const courseObject= props.course; //destructuring props into courseObject

const parts=courseObject.parts; //creating an array of the different parts of the course.

console.log(parts);



return(
    <>
     <Header text={courseObject.name} />
     <Content parts={parts} />

    </>
)


}

export default Course;



//why does const courseObject=props.course work, while const {courseObject}= props does not work?