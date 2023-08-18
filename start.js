import { useContext } from "react"
import {allStates} from"../App.js"

export const Start=()=>{
    const{state,setState,name,setName}=useContext(allStates)
    return(
        <div id="start">
             <div id="startContent">
                <input id="input" placeholder="Enter your name..." type="text" onChange={(event)=>setName(event.target.value)}/>
                <br></br>
                <br></br>
                <br></br>
                <button id="startBtn" onClick={()=>setState("Game")}>start quiz!</button>
            </div>
        </div>
            )
}