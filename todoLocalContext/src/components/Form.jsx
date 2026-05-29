import { useState } from "react";
import { useTodo } from "../context/TodoContext";

function Form() {
    
const [todoMsg , setTodoMsg] = useState("");
const {AddTodo} = useTodo(); 
    return (
        <form  className="flex">
            <input
                type="text"
                placeholder="Write Todo..."
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
                value={todoMsg}
                onChange={(e)=>{
                setTodoMsg(e.target.value);
                }}
            />
            <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0"
                onClick={(e)=>{
                    e.preventDefault();
                    const todo = {
                        id : Date.now() , 
                        todo : todoMsg,
                        completed : false
                    };
                    AddTodo(todo);
                    setTodoMsg("");
                }}
            >
                Add
            </button>
        </form>
    );
}

export default Form;

