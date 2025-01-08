import { Dispatch , SetStateAction } from "react"
type inputValue  = string | number

const Hook = <T extends inputValue> ({label , value , setter} : 
    {
     label : string,
     value : T
    setter : Dispatch<SetStateAction<T>>    // define the type of the setVal hover to setVal hook and its give this type you can also give a fucntion to its type
    }) => {
  return (
    <div>
        <div>
    <form action="">
        <label htmlFor="">{label}</label>
        <input type="text" value={value} onChange={(e) => {setter(e.target.value as T)}} />
    </form>
    </div>
    </div>
  )
}

export default Hook