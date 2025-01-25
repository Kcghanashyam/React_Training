import {useState} from "react"
import "./counter_style.css"
const CounterPage = ()=>{
    const[count,setCount]=useState(0)
    const handleIncrement =()=>{
        console.log("increment clicked")
        setCount(
            (prev)=>prev+1,
        )
    }
    const handleOnChange = ()=>{
        console.log("event: ",event)
        console.log("input changed",event.target.value)
    }
    return(
        <div id="counter">
            <h1>Counter Page</h1>
            <p>
                Counter Value:
                <span>{count}</span>
            </p>
            <div id="btn">
               <button onClick={handleIncrement}>Increment</button>
            </div>
            <div id="input">
            <input type="text" onChange={handleOnChange}/>
            </div>
        </div>
    )
}
export default CounterPage

export const MainTitle = () =>{
    return(
        <div className="mainTitle">
            <h1>React Programming Class</h1>
        </div>
    )
}