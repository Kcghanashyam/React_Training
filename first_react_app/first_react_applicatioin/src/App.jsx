import { Outlet } from "react-router-dom"
import NavBar from "./component/Navbar"
export default function App(){
  return(
    <>
        <NavBar/>
       <Outlet/>
       {/* set your footer here */}
       <h1>Footer from</h1>
    </>
  )
}