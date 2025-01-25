export default function EventPropagation(){
    const handleOnClickParent = () =>{
        console.log("Parent clicked")
        alert("parent clicked")
    }
    const handleOnClickChild = () =>{
        event.stopPropagation(); //helps to propagate(bubble up DOM)
        console.log("Child Clicked")
        alert("child clicked")
    }
    const handleKeyPressed = (event) =>{
        console.log("key pressed",event.key)
    }
    //html default behaviour: always refresh page on submitting form
    //solution: preventDefault()
    const handleOnSubmit = (event) =>{
        event.preventDefault()
        console.log("submitted!!")
    }
    return(
        <div>
            <h1>Event Propagation</h1>
            <div onClick={handleOnClickParent}>
                <button onClick={handleOnClickChild}>Click Me 
                </button>
            </div>
            <form onSubmit={handleOnSubmit}>
              <input 
                placeholder ="Enter your name"
                type="text"
                onKeyDown={handleKeyPressed}
               />
               <input type="submit"/>
            </form>
        </div>
    )
}