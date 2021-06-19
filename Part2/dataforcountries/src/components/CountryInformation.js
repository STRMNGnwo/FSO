import React from 'react';
import List from "./List"
const CountryInformation=(props)=>{

    const {name,capital,population,languages}=props; //destructuring props properties into their own separate variables.

    return(
        <>
        <h1>{name}</h1>
        <p>Capital: <strong>{capital}</strong></p>
        <p>Population:<strong>{population}</strong></p>

        <p><h2>Languages:</h2></p>
        <ul>
        {languages.map((language)=><List key={language.name} text={language.name} />)}
        </ul>
      </>
    )
}

export default CountryInformation