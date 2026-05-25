import { useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {

  return(
    <>
      <h1 className='bg-green-400 text-black'>Tailwind test</h1>
    </>
  )
//   let [counter , setCounter] = useState(5); // write default value;
// // let counter = 5;

//   return(
//     <>
//     <h1>Chai aur code</h1>

//     <h3>Counter value : {counter}</h3>
//     <button style={
//      {
//       width : "100px",
//        marginLeft : "50%"
//      }
//     } onClick= {
//      ()=>{
//       counter = counter+1;
//      setCounter(counter);
// even if there are many SetCounter it will still add only one 

// if we write like this lets say 4 times then 4 bar inc hoga and if normally kiya hota to ek hi hota
// setCunter((prevCounter) => prevCounter+1)
//      console.log(counter);
     
//      }
//     }>Add value</button>
//     <br />
//     <button style={
//      {
//       width : "100px",
//       marginLeft : "50%"
//      }
//     } onClick ={
//     ()=>{
      
//       if(counter > 0){
//         counter--;
//       }
//        setCounter(counter);
//     }
//     }>Decrease Value</button>
//     </>
//   )
}

export default App
