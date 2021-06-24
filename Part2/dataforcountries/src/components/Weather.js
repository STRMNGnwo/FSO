import React,{useState,useEffect} from 'react'
import axios from 'axios'

const Weather=(props)=>{

    const [weather,setWeather]=useState([]);
    const {city}=props;
    console.log(city);
    useEffect(()=>{ //useEffect function to get Weather from the weather api
        const apiKey="Enter your api key here!";
       const url=`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

        console.log(url);

        axios.get(url).catch(error=>{console.log(error.message)}).then((response)=>{
            console.log(response);
          const displayWeather= <> <h1></h1> <br></br> <strong>Temperature:</strong>{(response.data.main.temp)-273} <br></br> <strong>Description: </strong>{response.data.weather[0].main} </>

          setWeather(displayWeather);
        })//end of then
      },[])

    return(
        <>
        <h1>Weather in {city}</h1>
        {weather}
        </>
    )
}

export default Weather
