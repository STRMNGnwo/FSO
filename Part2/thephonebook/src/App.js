import React,{useState} from 'react'
import List from './components/List'
function App() {
  //need to define a state for the app, that tracks the list of contact numbers.
  const[persons,setPersons]=useState([{name:"Arto Hellas", number:"123456789"}]);
  //need to define a state,to access the value from the contact name input element in the form tag.
  const[newName,setNewName]=useState('');
  //need to define a state, to access the value from the contact phone number input element in the form tag.
  const[newNumber,setNewNumber]=useState('');

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

  const contactsList=persons.map((person,index)=><List key={person.name} name={person.name} number={person.number}/>)
  return (
    <>
    <h1>PhoneBook</h1>
    <form onSubmit={addContact}>
       <label htmlFor="contactName">Name:</label>
      <input id="contactName" value={newName} name="contactName" onChange={handleNameInputChange} /> 
      <br/> 
      <label htmlFor="contactNumber"> Number:</label>
      <input id="contactNumber"value={newNumber} name="contactNumber" onChange={handleNumberInputChange} />
      <br/>
      <button type="submit">Add Contact</button>

    </form>

    <h2>Numbers</h2>
    <ul>
      {contactsList}
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