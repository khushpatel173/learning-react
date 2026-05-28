import { useContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Card from './components/Card'
import ThemeBtn from './components/ThemeBtn'
import ThemeContextProvider from './context/ThemeContextProvider'
import ThemeContext from './context/ThemeContext'

function App() {

    const {isDark} = useContext(ThemeContext);

  return (
<div className= {`${isDark ? "dark" : "light"} flex flex-wrap min-h-screen items-center`}>
                <div className="w-full">
                    <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                       <ThemeBtn/>
                    </div>
                    <div className="w-full max-w-sm mx-auto">
                
                        <Card/>
                    </div>
                </div>
            </div>
  )
}

export default App
