import React, { useState } from 'react'
import { FormEvent } from 'react'
interface userObj{
     age : number,
     name : string
}

const UseStateHook = () => {
     const [user ,setUser] = useState<userObj>()

     const formSubmit = (e:FormEvent<HTMLFormElement>) => {
                  e.preventDefault()
                  console.log(user);
                  
     }
  return (

    <div>

        
        <form action=""
        onSubmit={(e) => {formSubmit(e)}}
        >
            <input
             type="number"
             placeholder='age'
             value={user?.age || ""}
             onChange={(e) => setUser(prev => ({...prev! , age : Number(e.target.value)}))}
            />


            <input type="text"
            value={user?.name || ""}
            placeholder='enter your name'
            onChange={(e) => {setUser(prev => ({...prev! , name : e.target.value}))}}
             />

  <button>Submit</button>
        </form>
    </div>
  )
}

export default UseStateHook