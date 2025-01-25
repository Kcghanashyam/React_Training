import {useRef,useState} from "react"
import "./TaskWithFile.css"
const TaskWithFile = ()=>{
    const fileRef= useRef(null)
    const [formState, setFormState]= useState({})
    const divRef=useRef(null)
    const updateFormState = (e) =>{
        setFormState({
            ...formState,
            [e.target.name]: e.target.value
        })
    }
    const handleSubmit = (e) =>{
        e.preventDefault()
        console.log("picked file: ",fileRef.current.files)
        console.log("form state= ",formState)
        divRef.current.style.backgroundColor = "red";
        divRef.current.style.borderRadius = "40px"
        // divRef.current.style.display = "none"  //To hide
    }
    return(
        <>
          <h1>Task With File </h1>
          <form onSubmit={handleSubmit}>
            <div className="task-field" ref={divRef}>
                <label>
                    Task 
                    <input type="text" placeholder="Enter your task"name="task" onChange={updateFormState}/>
                </label>
            </div>
            <div className="task-field">
                <label>
                    Choose Date 
                    <input type="date" placeholder="pick Date"name="date" onChange={updateFormState}/>
                </label>
            </div>
            <div className="task-field">
                <label>
                    Pick Your FAV Color
                <input type="color" placeholder="pick Color" name="color" onChange={updateFormState}/>
                </label>
            </div>
            <div className="task-field">
                <label>
                <input type="file"ref={fileRef} multiple/>
                </label>
            </div>
            <div className="task-field">
                <label>
                <input type="submit" value={"Add Task"}/>
                </label>
            </div>
          </form>
        </>
    )

}
export default TaskWithFile