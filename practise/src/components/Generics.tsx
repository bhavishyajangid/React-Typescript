

type inputValue  = string | number

const Generics = <T extends inputValue> ({label , value , onchange} : 
   {
    label : string,
    value : T
     onchange : (event :string) => void
   }
   ) => {
  return (
    <div>
    <form action="">
        <label htmlFor="">{label}</label>
        <input className="border border-solid border-black h-10 w-20" type="text" value={value} onChange={(e) => {onchange(e.target.value)}} />
    </form>
    </div>
  )
}

export default Generics