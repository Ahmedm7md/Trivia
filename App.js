import './App.css';
import { Start } from './components/start';
import { Game } from './components/game';
import { End } from './components/end';
import { createContext, useState } from 'react';
export const allStates=createContext()


function App() {
  const[state,setState]=useState("Start")
  const[score,setScore]=useState(0)
  const[name,setName]=useState("")
  return (
    <div className="App" >
      <h1 id='title'>Trivia!</h1>
      <allStates.Provider value={{
        state,setState
        ,score,setScore
        ,name,setName
      }}>
        {state==="Start"&& <Start/>}
        {state==="Game"&& <Game/>}
        {state==="End"&& <End/>}
      </allStates.Provider>
    </div>
  );
}

export default App;
