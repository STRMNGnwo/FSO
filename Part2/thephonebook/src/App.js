import React,{useState} from 'react'
import List from './components/List'
function App() {
  //need to define a state for the app, that tracks the list of contact numbers.
  const[persons,setPersons]=useState([{name:"Arto Hellas"}]);
  //need to define a state,to access the value from the input element in the form tag.
  const[newName,setNewName]=useState('');

  const addContact=(event)=>{ //called when the form is submitted
    
    console.log("Adding a new contact");
    event.preventDefault();//called to prevent default action of the form.
    const newContact= {name:newName};
    setPersons(persons.concat(newContact));
    setNewName('');

  }

  const handleInputChange=(event)=>{ //event handler to handle the input value
     
    const input=event.target.value; //used to access the value in the input tag(target) and assigning it to formValue variable.
    setNewName(input); //changing the state indirectly.inputValue now has the value of input, and can be used to add a contact.

  }

  const contactsList=persons.map((person,index)=><List key={person.name} name={person.name}/>)
  return (
    <>
    <h1>PhoneBook</h1>
    <form onSubmit={addContact}>
       <label htmlFor="contactName">Name:</label>
      <input id="contactName" value={newName} name="contact" onChange={handleInputChange} /> 
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
