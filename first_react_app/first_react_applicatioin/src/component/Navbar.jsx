import {Link} from "react-router-dom"
import Logo from "../assets/logo.png"
import "../styles/Navbar.css"
export default function NavBar(){
    return(
           <div style={{
            // "width":"100px",
            "height":"70px",
            "backgroundColor": "biseque",
            "boxShadow": "0 4px 8px rgba(0, 0, 0, 0.4)",
            "display": "flex",
            "alignItems": "center",
            "justifyContent": "space-between",
            "padding":"5px 10px",

           }}>
             <img src={Logo} alt="logo" style={{
                "height": "80px",
                "width": "80px",
                "borderRadius": "50%",
             }}/>
             <div className="menus">
                <div className="menu">
                  <Link to={"/"}>Home</Link>
                </div>
                <div className="menu">
                  <Link to={"/counter"}>Counter</Link>
                </div>
                <div className="menu">
                  <Link to={"/task"}>Task</Link>
                </div>
             </div>
           </div>
  )         
}