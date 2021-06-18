
//this app is used to show how forms work in React!

import React,{useState} from 'react';
import Note from './components/Note' //Note.js can be writted as Note

const App = (props) => {
  
  const[Notes,setNotes]=useState(props.notes); //Making the notes array a state of the App Component, any change to the notes array, will cause the page to re-render.
  
  const[inputState,setInputState]=useState('Initial Value'); //This state is assigned to the input element in the form. 

  const[showAllNotes,setShowAllNotes]=useState(true); //This state is used to display all notes, or just the important ones.
   
  const changeInput=(event)=>{ //event handler for input changes

    var input=event.target.value;

    console.log(input);

    setInputState(input);
  }
  
  const addNote=(event)=>{ //defining an event handler to add a new note to the list of notes.
     
    console.log("Adding a new note");
    event.preventDefault(); //prevents the default action of submitting a form.
    
    const newNote={ //creating a new Object that is added to the Notes list.

      content: inputState,
      time: new Date().toISOString(),
      important:Math.random()<0.5, //notes have a 50% chance of being important, as Math.random() generates a number between 0.0 and 1.0
      id:Notes.length+1
    }
    console.log("Note Content: ",newNote.content);
    setNotes(Notes.concat(newNote)); //modifying the list, thus changing state and causing a re-render of the page.

    setInputState('');//resetting the value of the form input.

  }// event handler to add a new note
 
  const notesList= showAllNotes? Notes : Notes.filter((note)=>note.important===true); //rendering the notesList based on showAllNotes being true or false.
   
  
  return (
    <>
      <h1>Notes</h1>
      <ul>
        {notesList.map((note)=><Note key={note.id} text={note.content}/>)} 
        
      </ul>
       <div>
      <form onSubmit={addNote}>
      <input id="formInput" name="formInput" value={inputState} onChange={changeInput}></input> 
      <button type="submit">Add Note!  </button> 
      <button type="button"onClick={()=>{setShowAllNotes(!showAllNotes)}}>Show{showAllNotes?"Important":"All Notes"}</button>   
     </form>
     
      </div>
    </>
  )
}

export default App;
