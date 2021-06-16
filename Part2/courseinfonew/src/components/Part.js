import React from 'react'

const Part=(props)=>{

    console.log("Hello from the Part Component");
    console.log(props);
    const{name, exercises}=props;

    console.log(name);

return( //returning a Part Component

    <li>{name} has {exercises} exercises</li>

)

}

export default Part;