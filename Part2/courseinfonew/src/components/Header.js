import React from 'react'

const Header=(props)=>{

    const{text}=props;  //destructuring props into text.

    return(
        <h1>{text}</h1>
    )
}

export default Header