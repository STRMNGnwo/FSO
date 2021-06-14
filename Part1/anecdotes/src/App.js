import React,{useState} from 'react'

function Display(props){


  return(
    <>
    <h1>{props.text}</h1>
      <p> {props.value} has {props.votes} votes</p>
    </>
  )
}

function Button(props){

return(
  <button onClick={props.functionHandle}>{props.text}</button>
)

}

var largestIndex=0;

function App() {

 
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blod tests when dianosing patients'
  ]

  const [selected, setSelected] = useState(null);
  const[votes,setVotes]=useState(Array(anecdotes.length).fill(0)); //this state is an array used to store the count of the votes.
  //const[maxVotesIndex, setMaxVotesIndex]=useState(0);


  const getRandomAnecdote=()=>{

    setSelected( Math.floor((Math.random()*anecdotes.length) ) );
    
  }

  const updateVotes=(index)=>{
     
    console.log("Updating Votes for index", index);
    const copyState={...votes}; //creating a copy of the array

    copyState[index]++; //incrementing the anecdote that received a vote.

    if(copyState[index]>=votes[largestIndex]) largestIndex=index; //when updating votes, check if the votes of this anecdote is greater than the most votes an anecdote has received.

    setVotes(copyState); //passing the array into the updateVotes function to update the state.
  }
  
  return (
    <>
    <Display text="Anecdote of the Day" value={anecdotes[selected]} votes={votes[selected]} />
    <Button functionHandle={getRandomAnecdote} text="Click me to get a random Anecdote" />
    <Button functionHandle={()=>updateVotes(selected)} text="Vote for this anecdote!"/>
    <Display text="Anecdote with most Votes" value={anecdotes[largestIndex]} votes={votes[largestIndex]}/>

    </>
  );
}

export default App;
