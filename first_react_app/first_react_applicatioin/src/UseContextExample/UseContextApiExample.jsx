
import { createContext, useState } from "react"
import { useContext } from "react"

//creating context container
const UserNameContext = createContext()
export default function UseContextApiExample(){
    const [userName, setUserName] = useState("Gyanuuu")
    return(
        <>
          <input style={{
            borderRadius:"9px",
            margin:"10px",
            padding:"8px",
         }}
         type ="text" onChange={(e)=>{
            setUserName(e.target.value)
          }}/>
          <h1>Username: {userName}</h1>
          <UserNameContext.Provider value={userName} >
              <A/>
          </UserNameContext.Provider>
        </>
    )
}
const A= ()=>{
    return(
        <>
          <h1>Inside A</h1>
          <B/>
        </>
    )
}

const B= ()=>{
    const userName = useContext(UserNameContext)
    return(
        <>
          <h1>Inside B</h1>
          <p>Username inside B: {userName}</p>
        </>
    )
}