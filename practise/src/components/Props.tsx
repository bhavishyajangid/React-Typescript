import React from 'react'
interface obj {
        heading : string
           count : number
           fun1 : (name : string) => void ;   // like this we define a funciton type which is return nothing because this is void type
    }

const Props = ({heading , count , fun1} : obj) => {
    // in the typescript we define the type of the props like this we destructure the first obj and after we define its type
    
    // we can also do like this const Props = ({heading} : {heading:string}) => {}
     
    fun1("hey")

  return (  
    <>
  <div>{heading}</div>
   <p>{count}</p>
 </> 
  )
}

export default Props