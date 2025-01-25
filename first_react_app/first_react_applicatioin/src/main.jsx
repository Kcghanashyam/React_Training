import {createRoot} from "react-dom/client"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import CounterPage from "./counter_page"
import App from "./App"
import TaskWithFile from "./task/TaskWithFile"
import Home from "./Home"
import UseEffectHookExample from "./hooksExample/UseEffectHookExample"
import UseContextApiExample from "./UseContextExample/UseContextApiExample"

const rootElement = document.getElementById("root")
const root = createRoot(rootElement)
root.render(
  <>
  <BrowserRouter>
     <Routes>
      <Route path="/" element={<App/>}>
        <Route index element={<Home/>}/>
        {/* <Route path="task" element={<TaskWithFile/>}/> */}
        {/* <Route path="counter" element={<CounterPage/>}/> */}
        <Route path="timer" element={<UseEffectHookExample/>}/>
        <Route path="uc" element={<UseContextApiExample/>}/>
      </Route>
     </Routes>
  </BrowserRouter>
  </>
)
