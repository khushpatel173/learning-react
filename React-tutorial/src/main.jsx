import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import React from 'react';
// import './index.css'
import App from './App.jsx'
const username = 'khush';
const ReactElement = React.createElement('a' , {
  href : 'https://www.google.com' , target : '_blank'
} , "click me");

createRoot(document.getElementById('root')).render(
  // <StrictMode>  
  //   <App/>
  //   {/* <ReactElement/> */}
  // </StrictMode>,
   ReactElement
)
