import"./App.css";
import ReactLogo from"./assets/react.svg";
export default function MyApp(){
  return(
    <div><div className="App">
      <h2>Sorry, React is not working, Something went wrong!..</h2>
      <img src={ReactLogo}/>
    </div>
    </div>
  )
}
export function DisplayName(){
  return(
    <div>
      <h1>My Name: </h1>
      <p>Mr. Ghanshyam KC</p>
    </div>
  )
}