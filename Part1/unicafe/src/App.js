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
  
  function Statistics(props){
    
    var averageFeedback=( (props.good-props.bad)/totalFeedback ) ||0;
    var positiveFeedback=( ( (props.good/totalFeedback) *100) ||0);
    return(
      <>
     <Texts text="statistics" /> 
     <p>Good Feedback: {props.good}</p>
     <p>Neutral Feedback: {props.neutral}</p>
     <p>Negative Feedback: {props.bad}</p>
     <p>Total Feedback: {totalFeedback}</p>
     <p>Average Feedback: {averageFeedback} </p>
     <p>Positive Feedback: {positiveFeedback}</p>
      </>
    )
  
  }//end of the Statistics component.
function App() {

  const[good, setGood]=useState(0);
  const[neutral,setNeutral]=useState(0);
  const[bad,setBad]=useState(0);

  

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
    <Statistics good={good} neutral={neutral} bad={bad} />
    
    


    </>
  );
}

export default App;
