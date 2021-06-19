import React from 'react';

const List=(props)=>{
  
   
    if(props.capital===undefined||props.population===undefined) //this would mean there are more than one countries.
    {
        return(
            <>
             <li>{props.name}</li>
            </>
        )
    }

    console.log(props.languages);
    
    return(
        <>
        <li>
            <h1>{props.name}</h1><br></br>Capital:{props.capital}<br></br>Population:{props.population}
           <br></br><h2>Languages:</h2>{props.languages.map((language)=><li>{language.name}</li>)}
            
            
            
            </li>
        </>
    )
    
}

export default List;