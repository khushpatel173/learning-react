import { useState } from 'react';
function Color({color = 'red'}){

    const [color2 , setColor] = useState('black');
    let body = document.querySelector("body");
    body.style.backgroundColor = color2;
    return(
        <button style = {{
            padding : "5px",
            borderRadius : "10px",
            height : "50px",
            width : "50px",
            backgroundColor : color,
            margin: "5px"
        }} onClick = {
            ()=>{
            setColor(color)
            }
        }>{color}</button>
    )
}
export default Color; 