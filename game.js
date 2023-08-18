import { useState,useContext } from "react"
import {allStates} from"../App.js"
import { Questions } from "./questionBank.js"

export const Game=()=>{

const{setState,score,setScore}=useContext(allStates)

const [questionNum,setQuestionNum]=useState(0)
const [chosen,setChosen]=useState("")

const next=()=>{
    if(chosen===Questions[questionNum].answer){
        setScore(score+1)
    }
    setQuestionNum(questionNum+1)
}


const Finsh=()=>{
    if(chosen===Questions[questionNum].answer){
        setScore(score+1)
    }
    setState("End")
}
    return(
        <div id="game">
             <h1 id="prompt">{Questions[questionNum].question}</h1>
             <div id="gameBtns">
                <button className="gameBtn" onClick={()=>setChosen("A")}>{Questions[questionNum].A}</button>
                <br></br>
                <button className="gameBtn" onClick={()=>setChosen("B")}>{Questions[questionNum].B}</button>
                <br></br>
                <button className="gameBtn" onClick={()=>setChosen("C")}>{Questions[questionNum].C}</button>
                <br></br>
                <button className="gameBtn" onClick={()=>setChosen("D")}>{Questions[questionNum].D}</button>
                <br></br>
            </div>
          {questionNum !==Questions.length-1?  <button id="next" onClick={next}>Next</button> 
          :
          <button id="finsh" onClick={Finsh}>Finsh test</button>}
        </div>
    )
}