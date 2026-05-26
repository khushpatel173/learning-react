import { useCallback, useEffect, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
// import './App.css'

function App() {

   const [length , setLength] = useState(8);
   const [isNumber , setIsNumber] = useState(false);
   const [isCharacter , setIsCharacter] = useState(false);
   const[password , setPassword] = useState("");
   const passwordRef = useRef(null);
   const passwordGenerator = useCallback(()=>{
      let pass= '';
      let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
      if(isNumber){
         str+= "0123456789";
      }
      if(isCharacter) {
         str += "!@#$%^&*()_+-=[]{}|;:',.<>?/";
      }
      for(let i = 0; i < length; i++){
         let charIdx = Math.floor((Math.random() * str.length));
         pass += str.charAt(charIdx);
      }
      // now you have your password
      setPassword(pass);
   } , [length , isCharacter , isNumber , setPassword]);

   useEffect(passwordGenerator , [length , isNumber , isCharacter , passwordGenerator]);
 return(
      <>
      <div style = {{
      height : "130px" , 
      width : "600px" , 
      backgroundColor : "grey" ,
      margin : "auto",
      marginTop : "50px" , 
      borderRadius : "15px" , 
      display : "flex",
      flexDirection : "column" ,
      gap: "20px"

      }}className='container'>
         <div className='search-bar' style = {{
         display : "flex" , 
         justifyContent : "center" , 
         width : "90%" , 
         margin : "auto",
         height : "40px" , 
         borderRadius : "15px" , 
         marginTop : "20px"
         }}>
          <input type="text" placeholder='password' readOnly style={{
            width : "80%" , 
           borderTopLeftRadius: "15px",
           borderBottomLeftRadius: "15px",
           padding : "5px"
          }} value = {password} ref={passwordRef}/> 
          <button style = {{
            borderTopRightRadius: "15px",
           borderBottomRightRadius: "15px",
            padding : "5px",
            backgroundColor : "blue" , 
            color : "white"
          }} onClick={
            ()=>{
               passwordRef.current.select();
               window.navigator.clipboard.writeText(passwordRef.current.value);
            }
          }>Copy</button>    

         </div>
         <div className='properties' style = {{
            display : "flex" , 
            gap : "5px", 
            alignItems : "center" , 
            width : "80%" , 
            margin : "auto"
         }}>
         <input type="range" min={0} max={100} value= {length} onChange = {(e)=>{
            setLength(e.target.value)
         }}/>
         <p>Length : {length}</p>
         <input type="checkbox" id='numbers' value={isNumber} onChange={()=>{
            setIsNumber((prev) => !prev)}
         }/> 
         <label htmlFor="numbers" >Numbers</label>
         <input type="checkbox" id='character' defaultChecked={isCharacter} onChange={ ()=>{setIsCharacter((prev) => !prev)}}/>    
         <label htmlFor="character">Characters</label>
         </div>
      </div>
     </>

 )
}

export default App
