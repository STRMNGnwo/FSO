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

  var totalFeedback=0; //global variable that represents TotalFeedback
  
function App() {

  const[good, setGood]=useState(0);
  const[neutral,setNeutral]=useState(0);
  const[bad,setBad]=useState(0);

  var averageFeedback=(good-bad)/totalFeedback;

  const addGoodReview=()=>{ //helper functions to change  state indirectly through button press.
    totalFeedback++;
    setGood(good+1);
    
  }
  const addNeutralReview=()=>{
    totalFeedback++;
    setNeutral(neutral+1);
    
  }
  const addBadReview=()=>{
    totalFeedback++;
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
    <p>Total Feedback: {totalFeedback}</p>
    <p>Average Feedback: {averageFeedback||0}</p>
    <p>Positive Feedback: {((good/totalFeedback)*100)||0}%</p>
    


    </>
  );
}

export default App;
