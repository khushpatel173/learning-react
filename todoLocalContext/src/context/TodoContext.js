import React, { useContext } from "react";
const TodoContext = React.createContext(
    {
        todos : [],
        AddTodo : (todo)=>{},
        DeleteTodo : (id)=>{},
        UpdateTodo : (id , todo)=>{},
        ToggleComplete : (id)=>{}
    }    
);
export const TodoProvider = TodoContext.Provider;

export function useTodo(){
    return useContext(TodoContext);
}