import { useState } from 'react'
import './App.css'
// import Props from './components/props'
import Generics from './components/Generics'
import Hook from './components/Hook'
import UseStateHook from './components/UseStateHook'

function App() {
  const [val , setVal] = useState<string>("")
  
  return (
    <>
   <h1>hello</h1>
        {/* <Props heading='this is props' count={20} fun1={(name : string) => {console.log(name);
        }}/> */}

          {/* <Generics label='username' value="ram" onchange={(event : string) => {alert(event)
          }}/> */}

          <Hook label='username' value={val} setter={setVal}/>
          <UseStateHook/>


    </>
  )
}

export default App
