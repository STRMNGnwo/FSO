import React, {useState} from 'react' //importing the useState hook and React from the react module?.

function Texts(props){
return(
  <>
   <h1>{props.text}</h1>
  </>
)
}// end of Texts component

function Button(props) { //Button Component, props include function handle and text for button

  return(
    <>
   <button onClick={props.functionHandle}>{props.text}</button>
    </>
  )
  
  }//end of Button Component.

function App() {

  const[good, setGood]=useState(0);
  const[neutral,setNeutral]=useState(0);
  const[bad,setBad]=useState(0);

  const addGoodReview=()=>{ //helper functions to change  state indirectly through button press.

    setGood(good+1);
  }
  const addNeutralReview=()=>{
    setNeutral(neutral+1);
  }
  const addBadReview=()=>{
    setBad(bad+1);
  }
  return (
    <>
    <Texts text="give feedback" />
    <Button functionHandle={addGoodReview} text="good" />
    <Button functionHandle={addNeutralReview} text="neutral" />
    <Button functionHandle={addBadReview} text="bad" />
    <Texts text="statistics" />
    <p>good:{good}</p> 
    <p>neutral:{neutral}</p>
    <p>bad:{bad} </p>
    


    </>
  );
}

export default App;
