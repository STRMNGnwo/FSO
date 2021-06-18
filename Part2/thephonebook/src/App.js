import React,{useState} from 'react'
import List from './components/List'
import AddContact from './components/AddContact'
import Search from './components/Search'
function App() {
  //need to define a state for the app, that tracks the list of contact numbers.
  const[persons,setPersons]=useState([ 
  { name: 'Arto Hellas', number: '040-123456' },
  { name: 'Ada Lovelace', number: '39-44-5323523' },
  { name: 'Dan Abramov', number: '12-43-234345' },
  { name: 'Mary Poppendieck', number: '39-23-6423122' }]);

  //need to define a state,to access the value from the contact name input element in the form tag.
  const[newName,setNewName]=useState('');
  //need to define a state, to access the value from the contact phone number input element in the form tag.
  const[newNumber,setNewNumber]=useState('');

  //need to implement another state for another input element, which acts as a search field.
  const [searchString,setSearchString]=useState('');

  const addContact=(event)=>{ //called when the form is submitted
    
    console.log("Adding a new contact");
    event.preventDefault();//called to prevent default action of the form.

    //define a condition where if contact exists already, an alert is issued.
    
    //the find function returns the value of the first element that satisfies the condition  or returns undefined.
    const existsAlready= persons.find((person)=>person.name===newName);
    
    console.log(existsAlready);
    if(existsAlready!==undefined)  alert(`${newName} is already a contact`);
    

    else{
        console.log("Unique contact");
      const newContact={ name:newName,number:newNumber};

      setPersons(persons.concat(newContact));
    }
    
    setNewName('');
    setNewNumber('');

  }

  const handleNameInputChange=(event)=>{ //event handler to handle the input value for name
     
    const input=event.target.value; //used to access the value in the input tag(target) and assigning it to formValue variable.
    setNewName(input); //changing the state indirectly.inputValue now has the value of input, and can be used to add a contact.

  }

  const handleNumberInputChange=(event)=>{ //event handler to handle the input value for phone number.

    const number=event.target.value;
    setNewNumber(number);

  }

  const handleSearchField=(event)=>{
    
    console.log("Handling Search Field");
    const newSearchString=event.target.value;
    setSearchString(newSearchString);
  }

  var validSearchString=false;

  if(searchString!=='') validSearchString=true;

  //can use the ternary operator, to dynamically create contactsList.
  const contactsList=validSearchString?persons.filter((person)=> (person.name.toUpperCase()).includes(searchString.toUpperCase()) ):persons;
   //Explaining the above line- if searchString exists, the persons array is filtered to return only elements that contains the searchSring.Otherwise, the entire contacts array is returned.
  const displayList=contactsList.map((contact)=><List key={contact.name} name={contact.name} number={contact.number} />)

  return (
    <>
    <h1>PhoneBook</h1>
     
    <Search id="Search" searchString={searchString} changeFunc={handleSearchField} />

    <h2>Add a Contact!</h2>

    <AddContact nameID="contactName" numberID="contactNumber" name={newName} number={newNumber } changeNameFunc={handleNameInputChange} changeNumberFunc={handleNumberInputChange }submitFunction={addContact} />
    
    <h3>Numbers</h3>
    <ul>
      {displayList}
    </ul>
    
    </>
  )
}

export default App;

/* The original way I checked if a contact already existed, before I realised, JS Arrays have methods to do so (array.find method).


var alreadyExists=false;
    
    persons.forEach((person)=>{
       
      
      if(person.name === newName)
      {
        console.log(person.name+ "is the same as "+ newName);
        alreadyExists=true;
        return
       
      }
    } 
    )//end of forEach
     
    console.log(alreadyExists);
    if(alreadyExists===true)
    {
      alert(`${newName} already exists in the phonebook`);
    }

    else if(alreadyExists!==true) {
      console.log("Else if statement working");
    const newContact= {name:newName};
    setPersons(persons.concat(newContact));
    }



*/