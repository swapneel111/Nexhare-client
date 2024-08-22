import "./App.css";
import {BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./Home"
import Shoes from "./shoes"
import Tower from "./tower";
import Car from "./car";
const App = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="Jordan" element={<Shoes/>} />
        <Route path="tower" element={<Tower/>}/>
        <Route path="car" element={<Car/>}/>

    </Routes>
    </BrowserRouter>

  )
}

export default App
