import React,{useState,useEffect}from 'react';
import List from "./components/List";
import axios from 'axios';

function App() {

  const[displayCountries,setDisplayCountries]=useState([]); //this state variable is used to store the list of countries retrieved.
  const[searchString, setSearchString] =useState(''); //this state variable is used to store the value of the searchString obtained from input element.

  useEffect(()=>{
    const url="https://restcountries.eu/rest/v2/all";

    axios.get(url).catch(error=>console.log(error)).then((response)=>{
      console.log("Response recieved!");
      setDisplayCountries(response.data);
    })
    
  },[])

  const handleSearchField=(event)=>{    //used to handle onChange calls from the input field.
  
    console.log("handling search field");
    setSearchString(event.target.value);
  }
  var validSearchString=true;

  if(searchString==='') validSearchString=false;
 
  //the line below would return every country, or only countries that contain the search String in their name.
  const countriesList=validSearchString ? displayCountries.filter((country)=>((country.name).toUpperCase()).includes(searchString.toUpperCase()) ) :displayCountries;
   
  //the line below results in a string being printed out or a list of country names. It consists of a nested ternary operator. Based on fulfillment of conditions, certain things are displayed.
  const displayList=
  countriesList.length>10 ? "Please be more specific with you search, there are too many possibilities" :
(countriesList.length===1)? countriesList.map((country)=><List key={country.name} name={country.name} capital={country.capital} population={country.population} languages={country.languages}/>)                                           :
                            countriesList.map((country)=><List key={country.name} name={country.name}/>);
  
  

  return (
    <>
    <label htmlFor="searchField">Search for a Country</label>
    <input id="searchField" value={searchString} name="searchField" onChange={handleSearchField}/>
    <br></br>
     <ul>   {displayList}  </ul>
    
    
    </>
  );
}

export default App;






//probably an inefficient way to do it, as multiple requests to the API would be made, as a result of the onChange of the searchString.

/*useEffect(()=>{
  if(searchString=='')
  {
    axios.get("https://restcountries.eu/rest/v2/all").catch((error)=>console.log(error)).then((response)=>{
      setDisplayCountries(response.data);
    })
  }
  else{
    const url=`https://restcountries.eu/rest/v2/name/${searchString}`;

    console.log(url);
    axios.get(url).catch(error=>console.log(error)).then((response)=>{
      console.log("Response received using searchString");
      setDisplayCountries(response.data);
    })
  }
},[searchString])

const handleSearchField=(event)=>{    //used to handle onChange calls from the input field.

  console.log("handling search field");
  setSearchString(event.target.value);
}*/



//Inefficient way of printing: <li key={country.name}><h1>{country.name}</h1> <br/> Capital={country.capital} <br/> Population:{country.population }<h2>Languages</h2> </li>)       