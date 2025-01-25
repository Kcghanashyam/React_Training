import React, { useState } from "react"
export default function ConditionalRenderingExample(){
    return(
        <div>
            <LandingPage isLoggedIn={true}/>
            <CustomLoginButton isLoggedIn={true}/>
            <DisplayName user={
                {id:1,name:"Shyam"}
            }/>
            <DisplayUserAge/>
            <ToggleElement/>
            <DisplayActiveUsers/>
        </div>
    )
}
//rendering using filter(in array) and map (in objects)
function DisplayActiveUsers(){
    const users = [
        {id:1, name: "Boob",isActive:true},
        {id:2, name: "Shyam",isActive:false},
        {id:3, name: "Chhatra",isActive:true},
        {id:4, name: "Bijju",isActive:true},
    ]
    /*~~
    const newArr = users.filter(
        (obj)=>!obj.isActive
    )
    */
    
    return(
        <>
        <h1>Active Users</h1>
        <ol type="A" start={4}>
            {
                users.filter(
                    (ele)=>ele.isActive
                ).map(
                    (elem,index)=>(
                        <li key={elem.id}>{elem.name} : {elem.isActive ? "Active":"InActive"}</li>
                    )
                )
            }
        </ol>
        </>
    )
}

//dynamic rendereing using useState hook
function ToggleElement(){
    const [show, setShow] = useState(true)
    return(
        <>
         <button onClick={
            ()=>setShow(!show)
         }>
         {show ? "Hide":"Show"}</button>
         {show &&<p>My Content</p>}
        </>
    )
}
// || operator (default fallback values)
function DisplayUserAge({user}){
    return(
        <>
        {user || <p>Invalid User!!</p>}
        </>
    )
}
//&& operator (short-circuit evaluation)
function DisplayName({user}){
    return(
        <>
        {
            user&& <h1>Name: {user.name}</h1>
        }
        </>
    )
}
//using ternary operator
function CustomLoginButton({isLoggedIn}){
    return(
        <div>
            {
                isLoggedIn ?
                <button>Logout</button>
                : <button>Login</button>
            }
        </div>
    )
}
//using if statement
function LandingPage({isLoggedIn}){
    if(isLoggedIn){
        return <h1>Home page</h1>
    }
    else{
        return <h1>Login Page</h1>
    }
}