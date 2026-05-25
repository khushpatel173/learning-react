import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Card from './components/Card.jsx';

function App() {

  return (
    <>
     <Card username='Khush' myArr = {[1,2,3]}  myObj = {{name : "Khush" , pass : "Khush1243"}}/>
   <Card username='Hitesh'/>
    </>
  )
}

export default App;