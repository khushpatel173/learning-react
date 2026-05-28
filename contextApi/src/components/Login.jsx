import { useContext } from "react";
import { useState } from "react"
import UserContext from "../context/UserContext";

export default function(){
    const {setUser} = useContext(UserContext);  
    const [username , setUsername] = useState('');
    const [pass , setPass] = useState('');
return(
<>
<input type="text" placeholder="Username"  value={username} onChange={
(e)=>{
setUsername(e.target.value);
}

}/>
<input type="password"  placeholder="Password" value={pass} onChange={
    (e)=>{
        setPass(e.target.value);
    }
}/>
<button onClick={
    (e)=>{
        e.preventDefault();
        // the user is created so pass the data 
        
        setUser({username:username , pass:pass});
    }
}>Submit</button>
</>

)
}