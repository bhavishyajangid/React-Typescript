import React, { createContext, ReactNode, useState } from 'react'
interface ThemeType {
  Theme : "light" | "dark"
  toggleTheme : () => void 
}
const Context = () => {
    const ThemeContext = createContext<ThemeType>({
      Theme: 'light',
      toggleTheme: () => {}
    });

    const ThemeProvider = ({children} : {children : ReactNode}) => {
       const [theme , setTheme] = useState<ThemeType>()

       const toggleTheme = () => {
         setTheme((prev) => (prev === "light" ? "dark" : "light"))
       }
    }
  return (
    <div>this is context</div>
  )
}

export default Context