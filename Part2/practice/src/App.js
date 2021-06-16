import React from 'react';
import Note from './components/Note' //Note.js can be writted as Note

function App(props) { //the App Component, which acts as the root of the app

  const {notes}=props; //destructuring props into notes

//const notesList= notes.map( (note)=>{return <li key={note.id}>{note.content}</li>} ) 
//function provided to map dynamically generates html syntax with JS embedded
 //in the line above, a key is assigned to each li element. It is easy to do, as each note object, has an id property.
return (
    <div className="App">
     <h1>Notes</h1>
      <ul>
  { notes.map( (note)=> { return <Note key={note.id} text={note.content} /> } ) }
      </ul>
      
    </div>
  );
}

export default App;
