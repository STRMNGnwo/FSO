import React from 'react'

const Notification=(props)=>{

    const{text,type}=props;
    
    console.log(text);
    console.log(type);
 
    const errorStyling={

        textSize:16,
        color:"Red",
        borderStyle: "solid",
        borderRadius: 5,
        padding: 10,
        marginBottom: 10
    }

    const styling={

        textSize:16,
        color:"Green",
        borderStyle: "solid",
        borderRadius: 5,
        padding: 10,
        marginBottom: 10
    }
    
    if(type.toUpperCase()==="ERROR")
    {
    return(
        <>
            <h1 style={errorStyling}>{text}</h1>
        </>
    )
    }

    console.log("returning");
    return (
        <>
          <h1 style={styling}>{text}</h1>
        </>
    )
}

export default Notification;