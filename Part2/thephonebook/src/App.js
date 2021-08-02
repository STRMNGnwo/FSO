import React,{useState,useEffect} from 'react'
import List from './components/List'
import AddContact from './components/AddContact'
import Search from './components/Search'
import Notification from './components/Notification'
import service from "./services/contacts.js"
function App() {
  //need to define a state for the app, that tracks the list of contact numbers.
  const[persons,setPersons]=useState([]);

  //input elements states defined below
  //need to define a state,to access the value from the contact name input element in the form tag.
  const[newName,setNewName]=useState('');
  //need to define a state, to access the value from the contact phone number input element in the form tag.
  const[newNumber,setNewNumber]=useState('');

  //need to implement another state for another input element, which acts as a search field.
  const [searchString,setSearchString]=useState('');

  //state variable to show error messages, if any.
  const[notification,setNotification]=useState(null);

   useEffect(()=>{
    
   service.getContacts().then((contacts)=>setPersons(contacts));

   },[]) //end of useEffect, which fires only afer the App components is initially rendered, as a result of the []

  const addContact=(event)=>{ //called when the form is submitted
    
    console.log("Adding a new contact");
    event.preventDefault();//preventing the default action of the form.

    //the find function returns the value of the first element that satisfies the condition  or returns undefined.
    const existsAlready= persons.find((person)=>person.name===newName);
    
    console.log(existsAlready);
    if(existsAlready!==undefined)
    {
     //need to update phone number, after asking user if they want to do so.
     if(window.confirm(`${newName} already exists in the phonebook, do you want to update their phone number, with the number provided?`))
     {
       
       service.updateContact({name:newName,number:newNumber},existsAlready.id).then((response)=>{
         console.log(response);
         service.getContacts().then(response=>setPersons(response));}).catch((error)=>{
          setNotification(<Notification text={`${newName} has already been removed from the server`} type="ERROR"/>)
          setTimeout(()=>setNotification(null),3000);
        });
       setNewName('');
       setNewNumber('');
     }
    } 
    else{
        console.log("Unique contact");
      const newContact={ name:newName,number:newNumber};
       service.createContact(newContact).then(response=>{

        setNotification(<Notification text={`Added ${newName}`} type="TEXT"/>)
        setTimeout(()=>setNotification(null),3000);
      
      }).catch((error)=>{
        console.log("Error status:",error.response.status);
        console.log(error.response.data);
         setNotification(<Notification text={error.response.data.message} type="ERROR" />);

         setTimeout(()=>setNotification(null),3000); //removing the error message after 3 seconds, and re-rendering the component.
         setPersons(persons);
       });

       setPersons(persons.concat(newContact));
    }
    //resetting the input field values
    setNewName('');
    setNewNumber('');

  }//end of addContact method.

  const deleteContact=(name)=>{
    //console.log(name);
    const actuallyDeleteContact=()=>{
      
      if(window.confirm("Do you really want to delete "+name+" ?")){

      const contactToDelete=persons.find((person)=>person.name===name) //getting the element to be deleted from the array of elements.
     // console.log(contactToDelete);
      const newContactsList= persons.filter((person)=>person.name!==name) //the list without the deleted contact.

      service.deleteContact(contactToDelete.id).then((response)=>console.log(response)); //deleting contact from server as well.
      setPersons(newContactsList);
      }

      return null;
    }
    return actuallyDeleteContact;
  }//end of deleteContact method.

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
  
   const displayList=contactsList.map((contact)=><div key={contact.name}><List key={contact.id} name={contact.name} number={contact.number} id={contact.id}/> <button onClick={deleteContact(contact.name)}>Delete</button> </div>)

  return (
    <>
    <h1>PhoneBook</h1>
     
    <Search id="Search" searchString={searchString} changeFunc={handleSearchField} />

    <h2>Add a Contact!</h2>

    <AddContact nameID="contactName" numberID="contactNumber" name={newName} number={newNumber } changeNameFunc={handleNameInputChange} changeNumberFunc={handleNumberInputChange }submitFunction={addContact} />
    
    <h3>Numbers</h3>
    {notification}
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

/* [ 
  { name: 'Arto Hellas', number: '040-123456' },
  { name: 'Ada Lovelace', number: '39-44-5323523' },
  { name: 'Dan Abramov', number: '12-43-234345' },
  { name: 'Mary Poppendieck', number: '39-23-6423122' }]  */