import { useContext } from "react"
import {allStates} from"../App.js"
import { Questions } from "./questionBank.js"

export const End=()=>{
    const{setState,score,setScore,name}=useContext(allStates)

    return(
    <div id="finished">
        <h1 className="done">Quiz Finished</h1>
        {score>=Questions.length/2? <h3 className="done">Congrats {name}!, you got {score}/{Questions.length}, you passed!</h3>
        :
        <h3 className="done">Better luck next time {name}, you got {score}/{Questions.length}, you Failed</h3>
        }
        <button id="restart" onClick={()=>
        {
            setState("Start")
            setScore(0)
    }
    }>Restart test</button>
    </div>
    )
}