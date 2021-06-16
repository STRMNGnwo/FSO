import React from 'react'
import Course from './components/Course'

function App() {

  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, //end of course 1
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }//end of course 2
  ]

  //as the course is now a list, would need to dynamically make Course Components using map

  const coursesList= courses.map((course)=>{return <Course course={course} />})

  //In the line above, two Course components are rendered.
  return (
    <>
   {coursesList}
    </>
  );
}

export default App;
