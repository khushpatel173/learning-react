import Color from "./Color"

function ColorSet(){
    return(
        <div style = {{
            border : "2px solid black",
            display : "flex",
            gap : "10px",
            justifyContent : "center",
            alignItems : "center",
            width: "1000px",
            margin : "auto",
            borderRadius : "15px"
        }}>
         <Color color='red'/>
  <Color color='blue'/>
   <Color color='yellow'/>
    <Color color='aqua'/>
     <Color color='pink'/>
     </div>
    )
}
export default ColorSet;