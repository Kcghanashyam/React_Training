import {useState} from "react";
export default function TaskPage(){
    const [tasks,setTask]=useState(["Task 1","Task 2"])
    const [inputtedTask,setInputtedTask]=useState("")
    const[taskError,setTaskError] = useState("")
    const handleAddTask=(e)=>{
        e.preventDefault()
        // validate empty task
        if(inputtedTask.length<=0){
            //alert("Please enter your task first")
            setTaskError("Task is required!!")
            return;
        }else{
            setTaskError("")
        }
        //Todo: validate if the task is duplicate
        //const trimmedTask = inputtedTask.trim().toLowerCase();//convert to lowercase
        //if(trimmedTask && !tasks.some(task => task.toLowerCase() === trimmedTask)){
        //   setTask([...tasks, inputtedTask.trim()]);//Use original casing for display
        //}
        //setInputtedTask("");//clear input field
        //};

        console.log("add task button clicked",inputtedTask)
        const mergedArray=[...tasks,inputtedTask]
        console.log("merged array: ",mergedArray)
        setTask(mergedArray)
        //clearing field
        setInputtedTask("")
    }
    const handleDeleteTask=(data)=>{
        const filterTasks =tasks.filter(
            (ele,index)=>ele != data
        )
        console.log("filtered tasks: ",filterTasks)
        setTask(filterTasks)
    }
    return(
        <>
           <h1>All Task</h1>
           <ul>
           {
               tasks && tasks.map(
                   (task,index)=>{
                       return(
                        <div key={index} style={{display:"flex",
                        justifyContent:"space-between",
                        margin:"10px"
                        }}>
                            <li>{task}</li>
                            <button onClick={
                                ()=>handleDeleteTask(task)
                            }>Delete</button>
                        </div>
                       )
                    }
                )
            }
            </ul>
            <form onSubmit={handleAddTask}>
                <input type="text" placeholder="Enter task" value={inputtedTask}
                onChange={
                    (e)=>setInputtedTask(e.target.value)
                }></input>
                {taskError && <p style={{color:"red",}}>taskError</p>}
                <button type ="submit">Add Task</button>
           </form>
        </>
    )
}