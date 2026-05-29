import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { TodoProvider } from './context/TodoContext'
import Item from './components/Item';
import Form from './components/Form'

function App() {
  // define the functionalities
  const [todos , setTodos] = useState([]);

  const AddTodo = (todo)=>{ // assume this todo as an message
      // just make a todo and add it in the array as object
      setTodos([...todos , todo]);
  }

  const DeleteTodo = (id)=>{
    // from all the todos find the id and delete it via setTodos
    const filterTodos = todos.filter((obj) => obj.id !==id);
    setTodos(filterTodos);
  }
  const UpdateTodo = (id , todo)=>{
      setTodos((prev) => (prev.map((obj) => obj.id===id ? todo : obj)))
  }
  const ToggleComplete = (id)=>{
      setTodos((prev) => (prev.map((obj) => obj.id === id ? {...obj , completed : !obj.completed} : obj)))
  }


  // if there are todos are already set in ls then get them and store in our todo
  useEffect(()=>{
   const todos = JSON.parse(localStorage.getItem("todos"));
   if(todos && todos.length > 0){
    setTodos(todos);
   }
  } , []);
    useEffect(()=>{
      // todos mathi laine ena upr upload krvanu
      localStorage.setItem("todos" , JSON.stringify(todos))
  } , [todos]);
  return (
    <TodoProvider value={{todos , AddTodo , DeleteTodo , UpdateTodo , ToggleComplete}}>
      <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                    <Form/>
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {
                          todos.map((obj) => (
                          <div className='w-full' key={obj.id}>
                          <Item todo={obj} key={obj.id}/>
                          </div>))
                        }
                    </div>
                </div>
            </div>
    </TodoProvider>
  )
}

export default App
