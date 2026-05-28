import { useState } from "react";
import ThemeContext from "./ThemeContext";
   
 function ThemeContextProvider({children}){
     const [isDark , setIsDark] = useState(false);
    return(
        <ThemeContext.Provider value={{ isDark, setIsDark }}>
        {children}
        </ThemeContext.Provider>
    )
}

export default ThemeContextProvider;