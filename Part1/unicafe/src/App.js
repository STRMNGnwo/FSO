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
  
  function Statistic(props){

     return(
       <>
        <td><p>{props.text}:</p></td> <td> <p>{props.value}</p></td>
       </>
     )

  } //end of Statistic Component


  function Statistics(props){
    
    if(props.good===0&&props.neutral===0&&props.bad===0)
    {
      return(
        <p>No Feedback has been provided</p>
      )
    }
    var averageFeedback=( (props.good-props.bad)/totalFeedback ) ||0;
    var positiveFeedback=( ( (props.good/totalFeedback) *100) ||0);

    //The Statistic Component is used to print out one statistic at a time.
    return(
      <>
     <Texts text="statistics" /> 
     <table >
       <tr> <Statistic text="Good Feedback" value={props.good} />  </tr>
       <tr>  <Statistic text="Neutral Feedback" value={props.neutral} /> </tr>
       <tr>  <Statistic text="Negative Feedback" value={props.bad} />    </tr>
     <tr><Statistic text="Total Feedback" value={totalFeedback} /> </tr>
     <tr><Statistic text="Average Feedback" value={averageFeedback}/> </tr>
     <tr><Statistic text="Positive Feedback" value={positiveFeedback}/> </tr>
     </table>
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
