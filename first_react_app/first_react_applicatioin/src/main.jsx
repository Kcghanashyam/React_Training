import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import MyApp, { DisplayName } from './App.jsx'
import PropsExample from'./Props_Example.jsx'
import Profile from './destructuring_props_example.jsx'
const profileDetails ={
  id:2,
  name: "Chhatra Neupane",
  age:40,
  address:"Nepal"
}
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/*<MyApp />
    <DisplayName />*/}
    <PropsExample id="10" name="Shyamm" age="20" address="Salyan"/>
    {
    //<Profile name={"Ghanshyam KC"} age={50} address={"Kathmandu"}/>
    }
    <div style={
      {
        /*
        width: "100vh",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignitems:"center"
        */
       position: "absolute",
       top:"50%",
       left:"50%",
      }
    }>
    <Profile {...profileDetails}/>
    </div>
  </StrictMode>
)
