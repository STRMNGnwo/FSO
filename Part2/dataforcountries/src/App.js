import React,{useState,useEffect}from 'react';
import List from "./components/List";
import Button from "./components/Button"
import CountryInformation from "./components/CountryInformation"
import SearchField from "./components/SearchField"
import axios from 'axios';

function App() {

  const[displayCountries,setDisplayCountries]=useState([]); //this state variable is used to store the list of countries retrieved.
  const[searchString, setSearchString] =useState(''); //this state variable is used to store the value of the searchString obtained from input element.
  const[displayView,setDisplayView]=useState([]); //this state is used to display the country's detailed information when button is pressed. 
  
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
    setDisplayView([]); //reseting displayView to nothing.
  }

  const handleButtonClick=(country)=>{ //outer function takes in a country object as a  parameter.
     
    console.log("Handling click");
    //inner function actually displays the new view.
    const displayCountry=()=>{
    const display=<><CountryInformation name={country.name} capital={country.capital} population={country.population} languages={country.languages}/>  </>;
    
    console.log(display);

    setDisplayView(display);
    }

    return displayCountry; //outer function returns the inner function

  }

  var validSearchString=true;

  if(searchString==='') validSearchString=false;
 
  //the line below would return every country, or only countries that contain the search String in their name.
  const countriesList=validSearchString ? displayCountries.filter((country)=>((country.name).toUpperCase()).includes(searchString.toUpperCase()) ) :displayCountries;
   
  //the line below results in a string being printed out or a list of country names.A ternary operator is used.
  const displayList=countriesList.length>10 ? "Please be more specific with your search, there are too many possibilities" :
  countriesList.map((country)=><><List key={country.name} text={country.name}/> <Button functionHandle={handleButtonClick(country)} text="Show!"/> </>);
  
  

  return (
    <>
    <SearchField id="Search" value={searchString} functionHandle={handleSearchField} />
    <br></br>
     <ul>   {displayList}  </ul>

     <ul>{displayView}</ul>
    
    
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



/* Ternary nested to meet all conditions for part 1 of data for countries
 const displayList=
  countriesList.length>10 ? "Please be more specific with you search, there are too many possibilities" :
(countriesList.length===1)? countriesList.map((country)=><List key={country.name} name={country.name} capital={country.capital} population={country.population} languages={country.languages}/>)                                           :
                            countriesList.map((country)=><List key={country.name} name={country.name}/>);
  
    */