import { useContext } from "react"
import UserContext from "../context/UserContext"

export default function(){
    const {user} = useContext(UserContext);
    if(!user){
        return(
            <h1>Please Login</h1>
        )
    }
    return(
        <>
        <h1>Hey {user.username}</h1>
        </>
    )
}