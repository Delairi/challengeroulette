import { useState } from 'react'
import './App.css'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Inicio from './Screens/Inicio';
function App() {
  
  return (
    <BrowserRouter basename='/challengeroulette' >
    <Routes>
      <Route path='/' element={<Inicio/>}></Route>
    </Routes>
    </BrowserRouter>


  )
}

export default App
