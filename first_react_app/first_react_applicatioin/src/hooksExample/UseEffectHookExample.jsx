import { useEffect, useState } from "react"
export default function UseEffectHookExample (){
    const [timer, setTimer] =useState(0)
    const [count, setCount] = useState(0)
    const [posts, setPosts] = useState([])
    //useEffect hook: side effect of the component
    //syntax: useEffect(callback, dependency)
    //case in Dependency:
    //case a: if dependency not provided -> forever running
    //case b: if dependency is empty array {[]} -> only run one time when the page loads
    //case c: if dependency is array of variables -> only run when the variable changes, also callback always called at first time
    //Eg1: Forever running callback in useEffect
    useEffect(
        ()=>{
            const timeoutId = setTimeout(
                ()=>{
                    setTimer(
                        (prev)=>prev+ 1
                    )
                },
                1000
            )
            return () => clearTimeout(timeoutId)
        }
    )

    useEffect(
        ()=>{
            fetch("https://jsonplaceholder.typicode.com/posts").then(
                (response)=>{
                    response.json().then(
                        (data)=>{ 
                            console.log("My data: ",data)
                            setPosts(data)
                    }
                    )
                }
            ).catch(
                (e)=>console.log("error : ",e)
            )
        },
        []
    )
    return(
        <>
          <h1>Use Effect Hook Example Welcome You!!</h1>
          <p style={{
            color: "red",
            fontSize: "40px",
            fontWeight: "bold"
          }}>Timer: {timer} sec</p>
          <ol>
            {
                posts && posts.map(
                    (pt)=>{
                        return(
                            <div key={pt.id}>
                                <li style={{
                                    color:"green",
                                    fontSize:"20px",
                                    fontWeight:"bold"
                                }}>
                                {pt.title} </li>
                                <p>{pt.body}</p>
                            </div>
                        )
                    }
                )
            }
          </ol>
        </>
    )
}